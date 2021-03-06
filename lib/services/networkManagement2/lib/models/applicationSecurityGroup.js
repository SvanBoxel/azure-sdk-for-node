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
 * An application security group in a resource group.
 *
 * @extends models['Resource']
 */
class ApplicationSecurityGroup extends models['Resource'] {
  /**
   * Create a ApplicationSecurityGroup.
   * @property {string} [resourceGuid] The resource GUID property of the
   * application security group resource. It uniquely identifies a resource,
   * even if the user changes its name or migrate the resource across
   * subscriptions or resource groups.
   * @property {string} [provisioningState] The provisioning state of the
   * application security group resource. Possible values are: 'Succeeded',
   * 'Updating', 'Deleting', and 'Failed'.
   * @property {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationSecurityGroup
   *
   * @returns {object} metadata of ApplicationSecurityGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationSecurityGroup',
      type: {
        name: 'Composite',
        className: 'ApplicationSecurityGroup',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          resourceGuid: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceGuid',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            readOnly: true,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationSecurityGroup;
