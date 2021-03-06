/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.Resource = require('./resource');
exports.FrontDoor = require('./frontDoor');
exports.SubResource = require('./subResource');
exports.RoutingRule = require('./routingRule');
exports.LoadBalancingSettingsModel = require('./loadBalancingSettingsModel');
exports.HealthProbeSettingsModel = require('./healthProbeSettingsModel');
exports.BackendPool = require('./backendPool');
exports.KeyVaultCertificateSourceParametersVault = require('./keyVaultCertificateSourceParametersVault');
exports.CustomHttpsConfiguration = require('./customHttpsConfiguration');
exports.FrontendEndpoint = require('./frontendEndpoint');
exports.FrontDoorUpdateParameters = require('./frontDoorUpdateParameters');
exports.PurgeParameters = require('./purgeParameters');
exports.CacheConfiguration = require('./cacheConfiguration');
exports.RoutingRuleUpdateParameters = require('./routingRuleUpdateParameters');
exports.Backend = require('./backend');
exports.LoadBalancingSettingsUpdateParameters = require('./loadBalancingSettingsUpdateParameters');
exports.HealthProbeSettingsUpdateParameters = require('./healthProbeSettingsUpdateParameters');
exports.BackendPoolUpdateParameters = require('./backendPoolUpdateParameters');
exports.FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink = require('./frontendEndpointUpdateParametersWebApplicationFirewallPolicyLink');
exports.FrontendEndpointUpdateParameters = require('./frontendEndpointUpdateParameters');
exports.ValidateCustomDomainInput = require('./validateCustomDomainInput');
exports.ValidateCustomDomainOutput = require('./validateCustomDomainOutput');
exports.ErrorResponse = require('./errorResponse');
exports.CheckNameAvailabilityInput = require('./checkNameAvailabilityInput');
exports.CheckNameAvailabilityOutput = require('./checkNameAvailabilityOutput');
exports.ErrorDetails = require('./errorDetails');
exports.ErrorModel = require('./errorModel');
exports.AzureAsyncOperationResult = require('./azureAsyncOperationResult');
exports.TagsObject = require('./tagsObject');
exports.PolicySettings = require('./policySettings');
exports.MatchCondition1 = require('./matchCondition1');
exports.CustomRule = require('./customRule');
exports.CustomRules = require('./customRules');
exports.ManagedRuleSet = require('./managedRuleSet');
exports.ManagedRuleSets = require('./managedRuleSets');
exports.WebApplicationFirewallPolicy1 = require('./webApplicationFirewallPolicy1');
exports.AzureManagedOverrideRuleGroup = require('./azureManagedOverrideRuleGroup');
exports.AzureManagedRuleSet = require('./azureManagedRuleSet');
exports.FrontDoorListResult = require('./frontDoorListResult');
exports.RoutingRuleListResult = require('./routingRuleListResult');
exports.HealthProbeSettingsListResult = require('./healthProbeSettingsListResult');
exports.LoadBalancingSettingsListResult = require('./loadBalancingSettingsListResult');
exports.BackendPoolListResult = require('./backendPoolListResult');
exports.FrontendEndpointsListResult = require('./frontendEndpointsListResult');
exports.WebApplicationFirewallPolicyListResult = require('./webApplicationFirewallPolicyListResult');
exports.discriminators = {
  'Unknown' : exports.ManagedRuleSet,
  'ManagedRuleSet.AzureManagedRuleSet' : exports.AzureManagedRuleSet
};
