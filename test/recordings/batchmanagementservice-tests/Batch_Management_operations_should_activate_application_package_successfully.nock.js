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
.post('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0/activate?api-version=2019-08-01', '*')
  .reply(200, "{\"type\":\"Microsoft.Batch/batchAccounts/applications/versions\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id/versions/v1.0\",\"name\":\"v1.0\",\"etag\":\"W/\\\"0x8D719D7518AD09B\\\"\",\"properties\":{\"storageUrl\":\"https://nodesdkteststorage.blob.core.windows.net/app-my-application-id-b9dfc2b75e089960a922be9b4180a01f29ca0c78/my_application_id-v1.0-cdbdde7c-9ab2-4861-9077-ca26ff1d3b3f?sv=2018-03-28&sr=b&sig=zwuJi1cOY6rT8hRIx742sxcCdOgt9Qkmaz2WDMKTrlE%3D&st=2019-08-05T18%3A56%3A27Z&se=2019-08-05T23%3A01%3A27Z&sp=rw\",\"storageUrlExpiry\":\"2019-08-05T23:01:27.3492732Z\",\"state\":\"Active\",\"format\":\"zip\",\"lastActivationTime\":\"2019-08-05T19:01:27.27573Z\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '780',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Mon, 05 Aug 2019 19:01:27 GMT',
  etag: 'W/"0x8D719D7518AD09B"',
  'x-ms-correlation-request-id': '0b983542-74b7-46f6-91e9-dd13f7ba0547',
  'x-ms-request-id': 'd49859e6-779a-42bb-a389-6f0dee268b58',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190127Z:0b983542-74b7-46f6-91e9-dd13f7ba0547',
  date: 'Mon, 05 Aug 2019 19:01:26 GMT',
  connection: 'close' });
 return result; }]];