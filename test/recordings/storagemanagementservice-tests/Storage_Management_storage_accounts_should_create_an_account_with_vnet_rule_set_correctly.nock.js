// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc1852?api-version=2017-10-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/bac7113b-e862-4ac9-94aa-308c541bfec9?monitor=true&api-version=2017-10-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': '74169fd9-75cd-4415-bd83-8ac3d11944c0',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '74169fd9-75cd-4415-bd83-8ac3d11944c0',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054839Z:74169fd9-75cd-4415-bd83-8ac3d11944c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:48:39 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc1852?api-version=2017-10-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/bac7113b-e862-4ac9-94aa-308c541bfec9?monitor=true&api-version=2017-10-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-request-id': '74169fd9-75cd-4415-bd83-8ac3d11944c0',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': '74169fd9-75cd-4415-bd83-8ac3d11944c0',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054839Z:74169fd9-75cd-4415-bd83-8ac3d11944c0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:48:39 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/bac7113b-e862-4ac9-94aa-308c541bfec9?monitor=true&api-version=2017-10-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup8499/providers/Microsoft.Storage/storageAccounts/testacc1852\",\"kind\":\"Storage\",\"location\":\"eastus2euap\",\"name\":\"testacc1852\",\"properties\":{\"creationTime\":\"2017-12-12T05:48:39.8416479Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:48:39.8436478Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:48:39.8436478Z\"}}},\"networkAcls\":{\"bypass\":\"Logging, AzureServices\",\"defaultAction\":\"Deny\",\"ipRules\":[{\"action\":\"Allow\",\"value\":\"23.45.67.90\"},{\"action\":\"Allow\",\"value\":\"23.45.67.91\"}],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc1852.blob.core.windows.net/\",\"file\":\"https://testacc1852.file.core.windows.net/\",\"queue\":\"https://testacc1852.queue.core.windows.net/\",\"table\":\"https://testacc1852.table.core.windows.net/\"},\"primaryLocation\":\"eastus2euap\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1d9aa86a-5aae-4c66-8757-a4a44cbe38d5',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14354',
  'x-ms-correlation-request-id': '1d9aa86a-5aae-4c66-8757-a4a44cbe38d5',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054911Z:1d9aa86a-5aae-4c66-8757-a4a44cbe38d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:49:10 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/eastus2euap/asyncoperations/bac7113b-e862-4ac9-94aa-308c541bfec9?monitor=true&api-version=2017-10-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup8499/providers/Microsoft.Storage/storageAccounts/testacc1852\",\"kind\":\"Storage\",\"location\":\"eastus2euap\",\"name\":\"testacc1852\",\"properties\":{\"creationTime\":\"2017-12-12T05:48:39.8416479Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:48:39.8436478Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:48:39.8436478Z\"}}},\"networkAcls\":{\"bypass\":\"Logging, AzureServices\",\"defaultAction\":\"Deny\",\"ipRules\":[{\"action\":\"Allow\",\"value\":\"23.45.67.90\"},{\"action\":\"Allow\",\"value\":\"23.45.67.91\"}],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc1852.blob.core.windows.net/\",\"file\":\"https://testacc1852.file.core.windows.net/\",\"queue\":\"https://testacc1852.queue.core.windows.net/\",\"table\":\"https://testacc1852.table.core.windows.net/\"},\"primaryLocation\":\"eastus2euap\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1133',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '1d9aa86a-5aae-4c66-8757-a4a44cbe38d5',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14354',
  'x-ms-correlation-request-id': '1d9aa86a-5aae-4c66-8757-a4a44cbe38d5',
  'x-ms-routing-request-id': 'EASTASIA:20171212T054911Z:1d9aa86a-5aae-4c66-8757-a4a44cbe38d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:49:10 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['testacc1852'];};