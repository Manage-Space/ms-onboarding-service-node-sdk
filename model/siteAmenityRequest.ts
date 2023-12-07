/**
 * ManageSpace Onboarding API
 * ManageSpace Onboarding API Documentation
 *
 * The version of the OpenAPI document: 0.0.12-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class SiteAmenityRequest {
    /**
    * Amenity name
    */
    'amenityName': string;
    /**
    * Amenity description
    */
    'amenityDescription': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amenityName",
            "baseName": "amenityName",
            "type": "string"
        },
        {
            "name": "amenityDescription",
            "baseName": "amenityDescription",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SiteAmenityRequest.attributeTypeMap;
    }
}

