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
 * Property definition.
 *
 */
class PropertyDefinition {
  /**
   * Create a PropertyDefinition.
   * @member {string} [arrayValueSeparator] Array value separator for
   * properties with isArray set.
   * @member {array} [enumValidValues] Describes valid values for an enum
   * property.
   * @member {string} fieldName Name of the property.
   * @member {string} fieldType Type of the property.
   * @member {boolean} [isArray] Indicates if the property is actually an array
   * of the fieldType above on the data api.
   * @member {boolean} [isEnum] Indicates if the property is an enum.
   * @member {boolean} [isFlagEnum] Indicates if the property is an flag enum.
   * @member {boolean} [isImage] Whether the property is an Image.
   * @member {boolean} [isLocalizedString] Whether the property is a localized
   * string.
   * @member {boolean} [isName] Whether the property is a name or a part of
   * name.
   * @member {boolean} [isRequired] Whether property value is required on
   * instances, IsRequired field only for Intercation. Profile Instance will
   * not check for required field.
   * @member {string} [propertyId] The ID associated with the property.
   * @member {string} [schemaItemPropLink] URL encoded schema.org item prop
   * link for the property.
   * @member {number} [maxLength] Max length of string. Used only if type is
   * string.
   * @member {boolean} [isAvailableInGraph] Whether property is available in
   * graph or not.
   * @member {array} [dataSourcePrecedenceRules] This is specific to
   * interactions modeled as activities. Data sources are used to determine
   * where data is stored and also in precedence rules.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PropertyDefinition
   *
   * @returns {object} metadata of PropertyDefinition
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PropertyDefinition',
      type: {
        name: 'Composite',
        className: 'PropertyDefinition',
        modelProperties: {
          arrayValueSeparator: {
            required: false,
            serializedName: 'arrayValueSeparator',
            type: {
              name: 'String'
            }
          },
          enumValidValues: {
            required: false,
            serializedName: 'enumValidValues',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ProfileEnumValidValuesFormatElementType',
                  type: {
                    name: 'Composite',
                    className: 'ProfileEnumValidValuesFormat'
                  }
              }
            }
          },
          fieldName: {
            required: true,
            serializedName: 'fieldName',
            type: {
              name: 'String'
            }
          },
          fieldType: {
            required: true,
            serializedName: 'fieldType',
            type: {
              name: 'String'
            }
          },
          isArray: {
            required: false,
            serializedName: 'isArray',
            type: {
              name: 'Boolean'
            }
          },
          isEnum: {
            required: false,
            serializedName: 'isEnum',
            type: {
              name: 'Boolean'
            }
          },
          isFlagEnum: {
            required: false,
            serializedName: 'isFlagEnum',
            type: {
              name: 'Boolean'
            }
          },
          isImage: {
            required: false,
            serializedName: 'isImage',
            type: {
              name: 'Boolean'
            }
          },
          isLocalizedString: {
            required: false,
            serializedName: 'isLocalizedString',
            type: {
              name: 'Boolean'
            }
          },
          isName: {
            required: false,
            serializedName: 'isName',
            type: {
              name: 'Boolean'
            }
          },
          isRequired: {
            required: false,
            serializedName: 'isRequired',
            type: {
              name: 'Boolean'
            }
          },
          propertyId: {
            required: false,
            serializedName: 'propertyId',
            type: {
              name: 'String'
            }
          },
          schemaItemPropLink: {
            required: false,
            serializedName: 'schemaItemPropLink',
            type: {
              name: 'String'
            }
          },
          maxLength: {
            required: false,
            serializedName: 'maxLength',
            type: {
              name: 'Number'
            }
          },
          isAvailableInGraph: {
            required: false,
            serializedName: 'isAvailableInGraph',
            type: {
              name: 'Boolean'
            }
          },
          dataSourcePrecedenceRules: {
            required: false,
            readOnly: true,
            serializedName: 'dataSourcePrecedenceRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DataSourcePrecedenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'DataSourcePrecedence'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PropertyDefinition;