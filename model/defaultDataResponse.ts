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

export class DefaultDataResponse {
    /**
    * Organization ID
    */
    'orgId': string;
    /**
    * Site ID
    */
    'siteId': string;
    /**
    * Lease Template ID
    */
    'leaseTemplateId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "siteId",
            "baseName": "siteId",
            "type": "string"
        },
        {
            "name": "leaseTemplateId",
            "baseName": "leaseTemplateId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DefaultDataResponse.attributeTypeMap;
    }
}

