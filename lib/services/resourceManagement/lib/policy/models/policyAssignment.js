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
 * The policy assignment.
 *
 * @extends models['BaseResource']
 */
class PolicyAssignment extends models['BaseResource'] {
  /**
   * Create a PolicyAssignment.
   * @member {string} [displayName] The display name of the policy assignment.
   * @member {string} [policyDefinitionId] The ID of the policy definition.
   * @member {string} [scope] The scope for the policy assignment.
   * @member {array} [notScopes] The policy's excluded scopes.
   * @member {object} [parameters] Required if a parameter is used in policy
   * rule.
   * @member {string} [description] This message will be part of response in
   * case of policy violation.
   * @member {object} [metadata] The policy assignment metadata.
   * @member {string} [id] The ID of the policy assignment.
   * @member {string} [type] The type of the policy assignment.
   * @member {string} [name] The name of the policy assignment.
   * @member {object} [sku] The policy sku.
   * @member {string} [sku.name] The name of the policy sku. Possible values
   * are A0 and A1.
   * @member {string} [sku.tier] The policy sku tier. Possible values are Free
   * and Standard.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PolicyAssignment
   *
   * @returns {object} metadata of PolicyAssignment
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PolicyAssignment',
      type: {
        name: 'Composite',
        className: 'PolicyAssignment',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          policyDefinitionId: {
            required: false,
            serializedName: 'properties.policyDefinitionId',
            type: {
              name: 'String'
            }
          },
          scope: {
            required: false,
            serializedName: 'properties.scope',
            type: {
              name: 'String'
            }
          },
          notScopes: {
            required: false,
            serializedName: 'properties.notScopes',
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
          parameters: {
            required: false,
            serializedName: 'properties.parameters',
            type: {
              name: 'Object'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          metadata: {
            required: false,
            serializedName: 'properties.metadata',
            type: {
              name: 'Object'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
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
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'PolicySku'
            }
          }
        }
      }
    };
  }
}

module.exports = PolicyAssignment;