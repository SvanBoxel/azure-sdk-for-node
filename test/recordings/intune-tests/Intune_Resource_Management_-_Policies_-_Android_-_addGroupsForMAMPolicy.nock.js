// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.bmsua01/androidPolicies/6cdfd0fe-d60d-4480-8421-6601df70b451/groups/125bfe6d-67ac-486b-9bc3-c0427144ed9e?api-version=2015-01-14-privatepreview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '157',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'bc92971e-e88f-4026-bc18-09a247c10b43',
  'unique-request-id': 'f5cadc70-f0fa-48a4-8b99-87f7efa9d7ab',
  'x-ms-request-id': 'f5cadc70-f0fa-48a4-8b99-87f7efa9d7ab',
  'related-activity-id': 'f5cadc70-f0fa-48a4-8b99-87f7efa9d7ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1184',
  'x-ms-correlation-request-id': '19546872-7474-4bd2-b1a3-0d5f1c002507',
  'x-ms-routing-request-id': 'WESTUS:20151124T035201Z:19546872-7474-4bd2-b1a3-0d5f1c002507',
  date: 'Tue, 24 Nov 2015 03:52:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/providers/Microsoft.Intune/locations/fef.bmsua01/androidPolicies/6cdfd0fe-d60d-4480-8421-6601df70b451/groups/125bfe6d-67ac-486b-9bc3-c0427144ed9e?api-version=2015-01-14-privatepreview', '*')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'elapsed-time-milliseconds': '157',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'bc92971e-e88f-4026-bc18-09a247c10b43',
  'unique-request-id': 'f5cadc70-f0fa-48a4-8b99-87f7efa9d7ab',
  'x-ms-request-id': 'f5cadc70-f0fa-48a4-8b99-87f7efa9d7ab',
  'related-activity-id': 'f5cadc70-f0fa-48a4-8b99-87f7efa9d7ab',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-tenant-writes': '1184',
  'x-ms-correlation-request-id': '19546872-7474-4bd2-b1a3-0d5f1c002507',
  'x-ms-routing-request-id': 'WESTUS:20151124T035201Z:19546872-7474-4bd2-b1a3-0d5f1c002507',
  date: 'Tue, 24 Nov 2015 03:52:01 GMT',
  connection: 'close' });
 return result; }]];