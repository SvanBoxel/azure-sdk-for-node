// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2017-10-23T18:57:56.5958966Z\",\"lastUpdateTime\":\"2018-08-21T19:30:00Z\",\"dedicatedCoreTime\":\"P842DT15H44M4.782S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2017-10-23T18:57:56.5958966Z\",\"diskReadIOps\":\"4333098\",\"diskWriteIOps\":\"217500288\",\"lastUpdateTime\":\"2018-08-21T19:30:00Z\",\"avgCPUPercentage\":0.11879342572208607,\"avgMemoryGiB\":0.76116733185640628,\"peakMemoryGiB\":3.8065605163574219,\"avgDiskGiB\":2.4733423606074521,\"peakDiskGiB\":16.662128448486328,\"diskReadGiB\":159.07264709472656,\"diskWriteGiB\":2209.7888917922974,\"networkReadGiB\":323.3932627197355,\"networkWriteGiB\":219.14907851628959\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cebbd73e-dba3-4693-9362-1dd4bcddc0da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .get('/lifetimepoolstats?api-version=2018-08-01.7.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://lchency4.westcentralus.batch.azure.com/$metadata#poolstats/@Element\",\"url\":\"https://lchency4.westcentralus.batch.azure.com/lifetimepoolstats\",\"usageStats\":{\r\n    \"startTime\":\"2017-10-23T18:57:56.5958966Z\",\"lastUpdateTime\":\"2018-08-21T19:30:00Z\",\"dedicatedCoreTime\":\"P842DT15H44M4.782S\"\r\n  },\"resourceStats\":{\r\n    \"startTime\":\"2017-10-23T18:57:56.5958966Z\",\"diskReadIOps\":\"4333098\",\"diskWriteIOps\":\"217500288\",\"lastUpdateTime\":\"2018-08-21T19:30:00Z\",\"avgCPUPercentage\":0.11879342572208607,\"avgMemoryGiB\":0.76116733185640628,\"peakMemoryGiB\":3.8065605163574219,\"avgDiskGiB\":2.4733423606074521,\"peakDiskGiB\":16.662128448486328,\"diskReadGiB\":159.07264709472656,\"diskWriteGiB\":2209.7888917922974,\"networkReadGiB\":323.3932627197355,\"networkWriteGiB\":219.14907851628959\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'cebbd73e-dba3-4693-9362-1dd4bcddc0da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Tue, 21 Aug 2018 20:25:23 GMT',
  connection: 'close' });
 return result; }]];