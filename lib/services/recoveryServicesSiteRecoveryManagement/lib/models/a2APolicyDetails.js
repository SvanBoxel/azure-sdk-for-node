/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * A2A specific policy details.
 *
 * @extends models['PolicyProviderSpecificDetails']
 */
class A2APolicyDetails extends models['PolicyProviderSpecificDetails'] {
  /**
   * Create a A2APolicyDetails.
   * @member {number} [recoveryPointThresholdInMinutes] The recovery point
   * threshold in minutes.
   * @member {number} [recoveryPointHistory] The duration in minutes until
   * which the recovery points need to be stored.
   * @member {number} [appConsistentFrequencyInMinutes] The app consistent
   * snapshot frequency in minutes.
   * @member {string} [multiVmSyncStatus] A value indicating whether multi-VM
   * sync has to be enabled.
   * @member {number} [crashConsistentFrequencyInMinutes] The crash consistent
   * snapshot frequency in minutes.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of A2APolicyDetails
   *
   * @returns {object} metadata of A2APolicyDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'A2A',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'PolicyProviderSpecificDetails',
        className: 'A2APolicyDetails',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          recoveryPointThresholdInMinutes: {
            required: false,
            serializedName: 'recoveryPointThresholdInMinutes',
            type: {
              name: 'Number'
            }
          },
          recoveryPointHistory: {
            required: false,
            serializedName: 'recoveryPointHistory',
            type: {
              name: 'Number'
            }
          },
          appConsistentFrequencyInMinutes: {
            required: false,
            serializedName: 'appConsistentFrequencyInMinutes',
            type: {
              name: 'Number'
            }
          },
          multiVmSyncStatus: {
            required: false,
            serializedName: 'multiVmSyncStatus',
            type: {
              name: 'String'
            }
          },
          crashConsistentFrequencyInMinutes: {
            required: false,
            serializedName: 'crashConsistentFrequencyInMinutes',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = A2APolicyDetails;