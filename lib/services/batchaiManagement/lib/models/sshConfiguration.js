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
 * SSH configuration settings for the VM
 *
 */
class SshConfiguration {
  /**
   * Create a SshConfiguration.
   * @member {array} [publicIPsToAllow] List of source IP ranges to allow SSH
   * connection to VM. Default value is '*' can be used to match all source
   * IPs. Maximum number of publicIPs that can be specified are 400.
   * @member {object} userAccountSettings Settings for user account of VMs.
   * @member {string} [userAccountSettings.adminUserName]
   * @member {string} [userAccountSettings.adminUserSshPublicKey]
   * @member {string} [userAccountSettings.adminUserPassword]
   */
  constructor() {
  }

  /**
   * Defines the metadata of SshConfiguration
   *
   * @returns {object} metadata of SshConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SshConfiguration',
      type: {
        name: 'Composite',
        className: 'SshConfiguration',
        modelProperties: {
          publicIPsToAllow: {
            required: false,
            serializedName: 'publicIPsToAllow',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          userAccountSettings: {
            required: true,
            serializedName: 'userAccountSettings',
            type: {
              name: 'Composite',
              className: 'UserAccountSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = SshConfiguration;