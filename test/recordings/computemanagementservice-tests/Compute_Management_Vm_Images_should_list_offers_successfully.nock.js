// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers?api-version=2018-06-01')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"WindowsServer\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '258',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a2654dde-7c4e-4c0f-8fc1-c153476746fc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e6f8be4c-2fa8-4e89-8810-b41b1a349e3b',
  'x-ms-routing-request-id': 'WESTUS:20160315T015814Z:e6f8be4c-2fa8-4e89-8810-b41b1a349e3b',
  date: 'Tue, 15 Mar 2016 01:58:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/providers/Microsoft.Compute/locations/westus/publishers/MicrosoftWindowsServer/artifacttypes/vmimage/offers?api-version=2018-06-01')
  .reply(200, "[\r\n  {\r\n    \"location\": \"westus\",\r\n    \"name\": \"WindowsServer\",\r\n    \"id\": \"/Subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/Providers/Microsoft.Compute/Locations/westus/Publishers/MicrosoftWindowsServer/ArtifactTypes/VMImage/Offers/WindowsServer\"\r\n  }\r\n]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '258',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a2654dde-7c4e-4c0f-8fc1-c153476746fc',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': 'e6f8be4c-2fa8-4e89-8810-b41b1a349e3b',
  'x-ms-routing-request-id': 'WESTUS:20160315T015814Z:e6f8be4c-2fa8-4e89-8810-b41b1a349e3b',
  date: 'Tue, 15 Mar 2016 01:58:14 GMT',
  connection: 'close' });
 return result; }]];