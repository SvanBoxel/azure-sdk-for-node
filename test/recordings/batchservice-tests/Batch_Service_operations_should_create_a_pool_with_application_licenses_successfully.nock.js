// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:06:44 GMT',
  etag: '0x8D607A19E6D47A0',
  location: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8087a61e-23db-4262-860d-e075c3348c35',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  date: 'Tue, 21 Aug 2018 20:06:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2018-08-01.7.0', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Tue, 21 Aug 2018 20:06:44 GMT',
  etag: '0x8D607A19E6D47A0',
  location: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '8087a61e-23db-4262-860d-e075c3348c35',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool_licenses',
  date: 'Tue, 21 Aug 2018 20:06:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-08-01.7.0')
  .reply(500, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"OperationTimedOut\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Operation could not be completed within the specified time.\\nRequestId:d3fd4578-4696-4ae8-9de2-8cb8d6eaf23c\\nTime:2018-08-21T20:07:11.6718362Z\"\r\n  }\r\n}", { 'content-length': '366',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd3fd4578-4696-4ae8-9de2-8cb8d6eaf23c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:07:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-08-01.7.0')
  .reply(500, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"OperationTimedOut\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Operation could not be completed within the specified time.\\nRequestId:d3fd4578-4696-4ae8-9de2-8cb8d6eaf23c\\nTime:2018-08-21T20:07:11.6718362Z\"\r\n  }\r\n}", { 'content-length': '366',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd3fd4578-4696-4ae8-9de2-8cb8d6eaf23c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:07:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-08-01.7.0')
  .reply(500, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"OperationTimedOut\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Operation could not be completed within the specified time.\\nRequestId:130afc43-b7cf-4039-8985-b9f697033107\\nTime:2018-08-21T20:08:10.3146589Z\"\r\n  }\r\n}", { 'content-length': '366',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '130afc43-b7cf-4039-8985-b9f697033107',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:08:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-08-01.7.0')
  .reply(500, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"OperationTimedOut\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Operation could not be completed within the specified time.\\nRequestId:130afc43-b7cf-4039-8985-b9f697033107\\nTime:2018-08-21T20:08:10.3146589Z\"\r\n  }\r\n}", { 'content-length': '366',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '130afc43-b7cf-4039-8985-b9f697033107',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:08:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-08-01.7.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'efb1b63e-0afe-4fc5-b453-2b914d4b21d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:09:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .delete('/pools/nodesdktestpool_licenses?api-version=2018-08-01.7.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'efb1b63e-0afe-4fc5-b453-2b914d4b21d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:09:40 GMT',
  connection: 'close' });
 return result; }]];