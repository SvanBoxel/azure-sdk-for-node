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

/**
 * The list of integration accounts.
 */
class IntegrationAccountListResult extends Array {
  /**
   * Create a IntegrationAccountListResult.
   * @member {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IntegrationAccountListResult
   *
   * @returns {object} metadata of IntegrationAccountListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IntegrationAccountListResult',
      type: {
        name: 'Composite',
        className: 'IntegrationAccountListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'IntegrationAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'IntegrationAccount'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntegrationAccountListResult;