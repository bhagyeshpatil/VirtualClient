// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Text;
    using System.Threading;
    using System.Threading.Tasks;
    using Azure;
    using Azure.Core;
    using Azure.Storage.Blobs;
    using Azure.Storage.Blobs.Models;
    using NUnit.Framework;
    using Polly;
    using VirtualClient.Contracts;

    [TestFixture]
    [Category("Unit")]
    public class BlobManagerTests
    {
        private BlobDescriptor mockDescriptor;
        private TestBlobManager blobManager;

        [SetUp]
        public void SetupDefaultBehaviors()
        {
            this.mockDescriptor = new BlobDescriptor()
            {
                Name = "AnyBlob",
                ContainerName = "anycontainer",
                ContentEncoding = Encoding.UTF8,
                ContentType = "text/plain"
            };

            this.blobManager = new TestBlobManager(new DependencyBlobStore(
                DependencyStore.Packages,
                "DefaultEndpointsProtocol=https;AccountName=anyaccount;EndpointSuffix=core.windows.net"));

            this.blobManager.OnDownloadToStreamAsync = (descriptor, stream) =>
            {
                return new TestResponse((int)HttpStatusCode.OK, "\"0x123456789\"")
                {
                    ContentStream = new MemoryStream(Encoding.UTF8.GetBytes("Blob Content"))
                };
            };

            this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
            {
                return new TestResponse<BlobContentInfo>()
                {
                    RawResponse = new TestResponse((int)HttpStatusCode.OK, "\"0x123456789\"")
                    {
                        ContentStream = new MemoryStream(Encoding.UTF8.GetBytes("Blob Content"))
                    }
                };
            };
        }

        [Test]
        public void BlobManagerConstructorsValidateRequiredParameters()
        {
            Assert.Throws<ArgumentException>(() => new BlobManager(null));
        }

        [Test]
        [TestCase(
            "DefaultEndpointsProtocol=https;AccountName=anystorageaccount;AccountKey=9876;EndpointSuffix=core.windows.net",
            "https://anystorageaccount.blob.core.windows.net/packages")]
        //
        [TestCase(
            "BlobEndpoint=https://anystorageaccount.blob.core.windows.net;SharedAccessSignature=sv=2020-08-04&ss=b&srt=c&sp=rwlacx&se=2021-11-23T14:30:18Z&st=2021-11-23T02:19:18Z&spr=https&sig=1234",
            "https://anystorageaccount.blob.core.windows.net/packages?sv=2020-08-04&ss=b&srt=c&spr=https&st=2021-11-23T02:19:18Z&se=2021-11-23T14:30:18Z&sp=rwlacx&sig=1234")]
        public void BlobManagerCreatesTheExpectedContainerClientForStorageAccountConnectionStrings(string connectionString, string expectedUri)
        {
            DependencyDescriptor packageDescriptor = new DependencyDescriptor(new Dictionary<string, IConvertible>
            {
                { "BlobName", "anypackage.1.0.0.zip" },
                { "ContainerName", "packages" },
                { "Name", "anypackage" }
            });

            DependencyBlobStore store = new DependencyBlobStore("Packages", connectionString);
            BlobContainerClient client = this.blobManager.CreateContainerClient(new BlobDescriptor(packageDescriptor), store);

            Uri uri = new Uri(expectedUri);
            Assert.AreEqual(uri.Scheme, client.Uri.Scheme);
            Assert.AreEqual(uri.Host, client.Uri.Host);
            Assert.AreEqual(uri.AbsolutePath, client.Uri.AbsolutePath);
        }

        [Test]
        [TestCase("https://blob.core.windows.net", "https://blob.core.windows.net/packages")]
        [TestCase("https://blob.core.windows.net/", "https://blob.core.windows.net/packages")]
        [TestCase("https://blob.core.windows.net/packages", "https://blob.core.windows.net/packages")]
        [TestCase("https://blob.core.windows.net/packages/", "https://blob.core.windows.net/packages/")]
        public void BlobManagerCreatesTheExpectedContainerClientForStorageAccountUris(string uri, string expectedUri)
        {
            DependencyDescriptor packageDescriptor = new DependencyDescriptor(new Dictionary<string, IConvertible>
            {
                { "BlobName", "anypackage.1.0.0.zip" },
                { "ContainerName", "packages" },
                { "Name", "anypackage" }
            });

            DependencyBlobStore store = new DependencyBlobStore("Packages", new Uri(uri));
            BlobContainerClient client = this.blobManager.CreateContainerClient(new BlobDescriptor(packageDescriptor), store);

            Assert.AreEqual(expectedUri, client.Uri.AbsoluteUri);
        }

        [Test]
        [TestCase(
            "https://blob.core.windows.net/?sv=2022-11-02&ss=b&srt=co&sp=rwdacytfx&se=2024-06-13T02:35:01Z&st=2024-06-12T18:35:01Z&spr=https",
            "https://blob.core.windows.net/packages?sv=2022-11-02&ss=b&srt=co&sp=rwdacytfx&se=2024-06-13T02:35:01Z&st=2024-06-12T18:35:01Z&spr=https")]
        [TestCase(
            "https://blob.core.windows.net/packages?sv=2022-11-02&ss=b&srt=co&sp=rwdacytfx&se=2024-06-13T02:35:01Z&st=2024-06-12T18:35:01Z&spr=https",
            "https://blob.core.windows.net/packages?sv=2022-11-02&ss=b&srt=co&sp=rwdacytfx&se=2024-06-13T02:35:01Z&st=2024-06-12T18:35:01Z&spr=https")]
        [TestCase(
            "https://blob.core.windows.net/packages/?sv=2022-11-02&ss=b&srt=co&sp=rwdacytfx&se=2024-06-13T02:35:01Z&st=2024-06-12T18:35:01Z&spr=https",
            "https://blob.core.windows.net/packages/?sv=2022-11-02&ss=b&srt=co&sp=rwdacytfx&se=2024-06-13T02:35:01Z&st=2024-06-12T18:35:01Z&spr=https")]
        public void BlobManagerCreatesTheExpectedContainerClientForStorageAccountSasUris(string uri, string expectedUri)
        {
            DependencyDescriptor packageDescriptor = new DependencyDescriptor(new Dictionary<string, IConvertible>
            {
                { "BlobName", "anypackage.1.0.0.zip" },
                { "ContainerName", "packages" },
                { "Name", "anypackage" }
            });

            DependencyBlobStore store = new DependencyBlobStore("Packages", new Uri(uri));
            BlobContainerClient client = this.blobManager.CreateContainerClient(new BlobDescriptor(packageDescriptor), store);

            Assert.AreEqual(expectedUri, client.Uri.AbsoluteUri);
        }

        [Test]
        public void BlobManagerValidatesTheBlobNameBeforeDownloadingABlob()
        {
            List<string> invalidBlobNames = new List<string>
            {
                null,
                string.Empty,
                "   ",
                new string('a', 1025)
            };

            List<string> validBlobNames = new List<string>
            {
                "abcdefghijklmnopqrstuvwxyz0123456789",
                "any/blob/in/with/a/path",
                "anyblob-" + DateTime.UtcNow.ToString("o"),
                new string('a', 1024)
            };

            using (MemoryStream downloadStream = new MemoryStream())
            {
                invalidBlobNames.ForEach(name =>
                {
                    this.mockDescriptor.Name = name;

                    Assert.ThrowsAsync<ArgumentException>(
                        () => this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync()));
                });

                validBlobNames.ForEach(name =>
                {
                    this.mockDescriptor.Name = name;

                    Assert.DoesNotThrowAsync(
                        () => this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync()));
                });
            }
        }

        [Test]
        public async Task BlobManagerSupportsDependencyDescriptorBaseClassParameterConversionOnDownloads()
        {
            using (MemoryStream downloadStream = new MemoryStream())
            {
                bool supported = false;
                this.blobManager.OnDownloadToStreamAsync = (descriptor, stream) =>
                {
                    supported = true;
                    return new TestResponse((int)HttpStatusCode.OK, "\"0x123456789\"")
                    {
                        ContentStream = new MemoryStream()
                    };
                };

                DependencyDescriptor baseDescriptor = new DependencyDescriptor(this.mockDescriptor);
                await this.blobManager.DownloadBlobAsync(baseDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync())
                    .ConfigureAwait(false);

                Assert.IsTrue(supported);
            }
        }

        [Test]
        public void BlobManagerValidatesTheContainerNameBeforeDownloadingABlob()
        {
            List<string> invalidContainerNames = new List<string>
            {
                null,
                string.Empty,
                "   ",
                "a", 
                "aa",
                "abcd123@",
                new string('a', 64)
            };

            List<string> validContainerNames = new List<string>
            {
                "aaa",
                "aaa-bbb",
                new string('a', 63)
            };

            using (MemoryStream downloadStream = new MemoryStream())
            {
                invalidContainerNames.ForEach(name =>
                {
                    this.mockDescriptor.ContainerName = name;

                    Assert.ThrowsAsync<ArgumentException>(
                        () => this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync()));
                });

                validContainerNames.ForEach(name =>
                {
                    this.mockDescriptor.ContainerName = name;

                    Assert.DoesNotThrowAsync(
                        () => this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync()));
                });
            }
        }

        [Test]
        public async Task BlobManagerDownloadsTheExpectedBlobToTheStream()
        {
            using (MemoryStream downloadStream = new MemoryStream())
            {
                this.blobManager.OnDownloadToStreamAsync = (descriptor, stream) =>
                {
                    Assert.IsTrue(object.ReferenceEquals(this.mockDescriptor, descriptor));
                    return new TestResponse((int)HttpStatusCode.OK, "\"0x123456789\"")
                    {
                        ContentStream = new MemoryStream()
                    };
                };

                await this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync())
                    .ConfigureAwait(false);
            }
        }

        [Test]
        public async Task BlobManagerReturnsTheExpectedBlobDescriptorOnDownloads()
        {
            using (MemoryStream downloadStream = new MemoryStream())
            {
                BlobDescriptor actualDescriptor = await this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync())
                    .ConfigureAwait(false) as BlobDescriptor;

                Assert.IsNotNull(actualDescriptor);
                Assert.AreEqual(this.mockDescriptor.Name, actualDescriptor.Name);
                Assert.AreEqual(this.mockDescriptor.ContainerName, actualDescriptor.ContainerName);
                Assert.AreEqual(this.mockDescriptor.ContentEncoding, actualDescriptor.ContentEncoding);
                Assert.AreEqual(this.mockDescriptor.ContentType, actualDescriptor.ContentType);
                Assert.IsNotNull(actualDescriptor.ETag);
            }
        }

        [Test]
        public void BlobManagerThrowsIfAFailedResponseIsReturnedOnAnAttemptToDownloadABlob()
        {
            using (MemoryStream downloadStream = new MemoryStream())
            {
                this.blobManager.OnDownloadToStreamAsync = (descriptor, stream) =>
                {
                    return new TestResponse((int)HttpStatusCode.BadRequest)
                    {
                        ContentStream = new MemoryStream()
                    };
                };

                DependencyException error = Assert.ThrowsAsync<DependencyException>(
                    () => this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, Policy.NoOpAsync()));

                Assert.IsTrue(error.Message.Contains("BadRequest"));
            }
        }

        [Test]
        public void BlobManagerAppliesTheRetryPolicyProvidedToHandleTransientErrorsWhenDownloadingBlobs()
        {
            using (MemoryStream downloadStream = new MemoryStream())
            {
                int downloadAttempts = 0;
                this.blobManager.OnDownloadToStreamAsync = (descriptor, stream) =>
                {
                    downloadAttempts++;
                    throw new RequestFailedException("Transient Error");
                };

                IAsyncPolicy expectedRetryPolicy = Policy.Handle<RequestFailedException>().RetryAsync(3);

                Assert.ThrowsAsync<DependencyException>(
                    () => this.blobManager.DownloadBlobAsync(this.mockDescriptor, downloadStream, CancellationToken.None, expectedRetryPolicy));

                Assert.IsTrue(downloadAttempts == 4);
            }
        }

        [Test]
        public void BlobManagerRetryableTransientErrorCodesMatchesExpected()
        {
            Assert.AreEqual(5, BlobManager.RetryableCodes.Count);

            CollectionAssert.AreEquivalent(
                new List<int>
                {
                    (int)HttpStatusCode.BadGateway,
                    (int)HttpStatusCode.GatewayTimeout,
                    (int)HttpStatusCode.ServiceUnavailable,
                    (int)HttpStatusCode.GatewayTimeout,
                    (int)HttpStatusCode.InternalServerError
                },
                BlobManager.RetryableCodes);
        }

        [Test]
        public void BlobManagerValidatesTheBlobNameBeforeUploadingABlob()
        {
            List<string> invalidBlobNames = new List<string>
            {
                null,
                string.Empty,
                "   ",
                new string('a', 1025)
            };

            List<string> validBlobNames = new List<string>
            {
                "abcdefghijklmnopqrstuvwxyz0123456789",
                "any/blob/in/with/a/path",
                "anyblob-" + DateTime.UtcNow.ToString("o"),
                new string('a', 1024)
            };

            using (MemoryStream uploadStream = new MemoryStream())
            {
                invalidBlobNames.ForEach(name =>
                {
                    this.mockDescriptor.Name = name;

                    Assert.ThrowsAsync<ArgumentException>(
                        () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync()));
                });

                validBlobNames.ForEach(name =>
                {
                    this.mockDescriptor.Name = name;

                    Assert.DoesNotThrowAsync(
                        () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync()));
                });
            }
        }

        [Test]
        public void BlobManagerValidatesTheContainerNameBeforeUploadingABlob()
        {
            List<string> invalidContainerNames = new List<string>
            {
                null,
                string.Empty,
                "   ",
                "a",
                "aa",
                "abcd123@",
                new string('a', 64)
            };

            List<string> validContainerNames = new List<string>
            {
                "aaa",
                "aaa-bbb",
                new string('a', 63)
            };

            using (MemoryStream uploadStream = new MemoryStream())
            {
                invalidContainerNames.ForEach(name =>
                {
                    this.mockDescriptor.ContainerName = name;

                    Assert.ThrowsAsync<ArgumentException>(
                        () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync()));
                });

                validContainerNames.ForEach(name =>
                {
                    this.mockDescriptor.ContainerName = name;

                    Assert.DoesNotThrowAsync(
                        () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync()));
                });
            }
        }

        [Test]
        public async Task BlobManagerSupportsDependencyDescriptorBaseClassParameterConversionOnUploads()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                bool supported = false;
                this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
                {
                    supported = true;

                    return new TestResponse<BlobContentInfo>()
                    {
                        RawResponse = new TestResponse((int)HttpStatusCode.OK, "\"0x123456789\"")
                        {
                            ContentStream = new MemoryStream()
                        }
                    };
                };

                DependencyDescriptor baseDescriptor = new DependencyDescriptor(this.mockDescriptor);
                await this.blobManager.UploadBlobAsync(baseDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync())
                    .ConfigureAwait(false);

                Assert.IsTrue(supported);
            }
        }

        [Test]
        public async Task BlobManagerUploadsTheExpectedBlobFromAStream()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
                {
                    Assert.IsTrue(object.ReferenceEquals(this.mockDescriptor, descriptor));
                    Assert.AreEqual(descriptor.ContentEncoding.WebName, options.HttpHeaders.ContentEncoding);
                    Assert.AreEqual(descriptor.ContentType, options.HttpHeaders.ContentType);

                    return new TestResponse<BlobContentInfo>()
                    {
                        RawResponse = new TestResponse((int)HttpStatusCode.OK, "\"0x123456789\"")
                        {
                            ContentStream = new MemoryStream()
                        }
                    };
                };

                await this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync())
                    .ConfigureAwait(false);
            }
        }

        [Test]
        public async Task BlobManagerUsesETagsToEnableOptimisticConcurrencyOnBlobUploads()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                this.mockDescriptor.ETag = "\"0x123456789\"";
                this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
                {
                    Assert.IsNotNull(options.Conditions);
                    Assert.IsTrue(options.Conditions.IfMatch.HasValue);
                    Assert.AreEqual(this.mockDescriptor.ETag, options.Conditions.IfMatch.Value.ToString());

                    return new TestResponse<BlobContentInfo>()
                    {
                        RawResponse = new TestResponse((int)HttpStatusCode.OK, "\"0x987654321\"")
                        {
                            ContentStream = new MemoryStream()
                        }
                    };
                };

                await this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync())
                    .ConfigureAwait(false);
            }
        }

        [Test]
        public async Task BlobManagerReturnsTheExpectedBlobDescriptorOnUploads()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                BlobDescriptor actualDescriptor = await this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync())
                    .ConfigureAwait(false) as BlobDescriptor;

                Assert.IsNotNull(actualDescriptor);
                Assert.AreEqual(this.mockDescriptor.Name, actualDescriptor.Name);
                Assert.AreEqual(this.mockDescriptor.ContainerName, actualDescriptor.ContainerName);
                Assert.AreEqual(this.mockDescriptor.ContentEncoding, actualDescriptor.ContentEncoding);
                Assert.AreEqual(this.mockDescriptor.ContentType, actualDescriptor.ContentType);
                Assert.IsNotNull(actualDescriptor.ETag);
            }
        }

        [Test]
        public void BlobManagerThrowsIfAFailedResponseIsReturnedOnAnAttemptToUploadABlob()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
                {
                    return new TestResponse<BlobContentInfo>()
                    {
                        RawResponse = new TestResponse((int)HttpStatusCode.BadRequest, "\"0x987654321\"")
                        {
                            ContentStream = new MemoryStream()
                        }
                    };
                };

                DependencyException error = Assert.ThrowsAsync<DependencyException>(
                    () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, Policy.NoOpAsync()));

                Assert.IsTrue(error.Message.Contains("BadRequest"));
            }
        }

        [Test]
        public void BlobManagerAppliesTheRetryPolicyProvidedToHandleTransientErrorsWhenUploadingBlobs()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                int uploadAttempts = 0;
                this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
                {
                    uploadAttempts++;
                    throw new RequestFailedException("Transient Error");
                };

                IAsyncPolicy expectedRetryPolicy = Policy.Handle<RequestFailedException>().RetryAsync(3);

                Assert.ThrowsAsync<DependencyException>(
                    () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None, expectedRetryPolicy));

                Assert.IsTrue(uploadAttempts == 4);
            }
        }

        [Test]
        public void BlobManagerDefaultRetryPolicyDoesNotRetryNonTransientErrorsWhenUploadingBlobs()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                int uploadAttempts = 0;
                this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
                {
                    uploadAttempts++;
                    throw new RequestFailedException(
                        (int)HttpStatusCode.Forbidden, 
                        "Access Forbidden.");
                };

                Assert.ThrowsAsync<DependencyException>(
                    () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None));

                Assert.AreEqual(1, uploadAttempts);
            }
        }

        [Test]
        public void BlobManagerDefaultRetryPolicyHandleSignatureMismatchErrors()
        {
            using (MemoryStream uploadStream = new MemoryStream())
            {
                int uploadAttempts = 0;
                this.blobManager.OnUploadFromStreamAsync = (descriptor, stream, options) =>
                {
                    if (uploadAttempts <= 1)
                    {
                        uploadAttempts++;
                        throw new RequestFailedException(
                            (int)HttpStatusCode.Forbidden,
                            "The MAC signature found in the HTTP request 'MmqQ7SLid80+/27w0FVT/Pcg4BPwN1qVtNc66Ktx3tU=' is not the same as any computed signature. Server used following string to sign: 'PUT");
                    }
                    else
                    {
                        uploadAttempts++;
                        throw new RequestFailedException(
                            (int)HttpStatusCode.Forbidden,
                            "Just retry 2 times, or the unit test will run for a long time.");
                    }
                };

                Assert.ThrowsAsync<DependencyException>(
                    () => this.blobManager.UploadBlobAsync(this.mockDescriptor, uploadStream, CancellationToken.None));

                Assert.AreEqual(3, uploadAttempts);
            }
        }

        private class TestBlobManager : BlobManager
        {
            public TestBlobManager(DependencyBlobStore storeDescription)
                : base(storeDescription)
            {
            }

            public Func<BlobDescriptor, Stream, Response> OnDownloadToStreamAsync { get; set; }

            public Func<BlobDescriptor, Stream, BlobUploadOptions, Response<BlobContentInfo>> OnUploadFromStreamAsync { get; set; }

            public new BlobContainerClient CreateContainerClient(BlobDescriptor descriptor, DependencyBlobStore blobStore)
            {
                return base.CreateContainerClient(descriptor, blobStore);
            }

            protected override Task<Response> DownloadToStreamAsync(BlobDescriptor descriptor, Stream stream, CancellationToken cancellationToken)
            {
                Response response = this.OnDownloadToStreamAsync != null
                    ? this.OnDownloadToStreamAsync?.Invoke(descriptor, stream)
                    : null;

                return Task.FromResult(response);
            }

            protected override Task<Response<BlobContentInfo>> UploadFromStreamAsync(BlobDescriptor descriptor, Stream stream, BlobUploadOptions uploadOptions, CancellationToken cancellationToken)
            {
                Response<BlobContentInfo> response = this.OnUploadFromStreamAsync != null
                    ? this.OnUploadFromStreamAsync?.Invoke(descriptor, stream, uploadOptions)
                    : null;

                return Task.FromResult(response);
            }
        }

        private class TestResponse : Response
        {
            private Dictionary<string, string> headers;

            public TestResponse(int httpStatus, string eTag = null)
            {
                this.Status = httpStatus;
                this.headers = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);

                if (eTag != null)
                {
                    this.headers.Add("ETag", eTag);
                }
            }

            public override int Status { get; }

            public override string ReasonPhrase { get; }

            public override Stream ContentStream { get; set; }

            public override string ClientRequestId { get; set; }

            public override void Dispose()
            {
            }

            protected override bool ContainsHeader(string name)
            {
                return this.headers.ContainsKey(name);
            }

            protected override IEnumerable<HttpHeader> EnumerateHeaders()
            {
                throw new NotImplementedException();
            }

            protected override bool TryGetHeader(string name, [NotNullWhen(true)] out string value)
            {
                value = null;
                bool headerExists = false;
                if (this.headers.ContainsKey(name))
                {
                    value = this.headers[name];
                    headerExists = true;
                }

                return headerExists;
            }

            protected override bool TryGetHeaderValues(string name, [NotNullWhen(true)] out IEnumerable<string> values)
            {
                throw new NotImplementedException();
            }
        }

        private class TestResponse<T> : Response<T>
        {
            public TestResponse()
                : base()
            {
            }

            public Response RawResponse { get; set; }

            public override T Value { get; }

            public override Response GetRawResponse()
            {
                return this.RawResponse;
            }
        }
    }
}
