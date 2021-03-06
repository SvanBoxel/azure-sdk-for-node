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
 * Specifies the return carrier and customer's account with the carrier.
 *
 */
class ReturnShipping {
  /**
   * Create a ReturnShipping.
   * @member {string} carrierName The carrier's name.
   * @member {string} carrierAccountNumber The customer's account number with
   * the carrier.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReturnShipping
   *
   * @returns {object} metadata of ReturnShipping
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReturnShipping',
      type: {
        name: 'Composite',
        className: 'ReturnShipping',
        modelProperties: {
          carrierName: {
            required: true,
            serializedName: 'carrierName',
            type: {
              name: 'String'
            }
          },
          carrierAccountNumber: {
            required: true,
            serializedName: 'carrierAccountNumber',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReturnShipping;
