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
 * Result of the request to list Logic operations. It contains a list of
 * operations and a URL link to get the next set of results.
 */
class OperationListResult extends Array {
  /**
   * Create a OperationListResult.
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationListResult
   *
   * @returns {object} metadata of OperationListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationListResult',
      type: {
        name: 'Composite',
        className: 'OperationListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Operation'
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

module.exports = OperationListResult;