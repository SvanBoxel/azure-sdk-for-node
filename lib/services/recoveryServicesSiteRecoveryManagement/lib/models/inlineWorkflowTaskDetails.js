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
 * This class represents the inline workflow task details.
 *
 * @extends models['GroupTaskDetails']
 */
class InlineWorkflowTaskDetails extends models['GroupTaskDetails'] {
  /**
   * Create a InlineWorkflowTaskDetails.
   * @member {array} [workflowIds] The list of child workflow ids.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of InlineWorkflowTaskDetails
   *
   * @returns {object} metadata of InlineWorkflowTaskDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'InlineWorkflowTaskDetails',
      type: {
        name: 'Composite',
        className: 'InlineWorkflowTaskDetails',
        modelProperties: {
          childTasks: {
            required: false,
            serializedName: 'childTasks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ASRTaskElementType',
                  type: {
                    name: 'Composite',
                    className: 'ASRTask'
                  }
              }
            }
          },
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            type: {
              name: 'String'
            }
          },
          workflowIds: {
            required: false,
            serializedName: 'workflowIds',
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
          }
        }
      }
    };
  }
}

module.exports = InlineWorkflowTaskDetails;