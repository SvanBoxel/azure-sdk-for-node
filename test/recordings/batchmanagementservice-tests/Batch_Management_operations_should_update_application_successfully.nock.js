// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2019-08-01', '*')
  .reply(200, "{\"type\":\"Microsoft.Batch/batchAccounts/applications\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id\",\"name\":\"my_application_id\",\"etag\":\"W/\\\"0x8D719D75322690A\\\"\",\"properties\":{\"displayName\":\"my_updated_name\",\"allowUpdates\":false,\"defaultVersion\":\"v1.0\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '396',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Mon, 05 Aug 2019 19:01:29 GMT',
  etag: 'W/"0x8D719D75322690A"',
  'x-ms-correlation-request-id': '2526dacf-619f-4e38-befc-6a78caec6c65',
  'x-ms-request-id': '0a8a9cc5-37b3-4f80-bd79-13454ff31e49',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190130Z:2526dacf-619f-4e38-befc-6a78caec6c65',
  date: 'Mon, 05 Aug 2019 19:01:29 GMT',
  connection: 'close' });
 return result; }]];