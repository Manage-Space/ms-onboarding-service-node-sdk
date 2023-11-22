/**
 * ManageSpace Onboarding API
 * ManageSpace Onboarding API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class SiteUserRequest {
    /**
    * First name
    */
    'firstName': string;
    /**
    * Middle name
    */
    'middleInitial'?: string;
    /**
    * Last name
    */
    'lastName': string;
    /**
    * Email address
    */
    'email': string;
    /**
    * Mobile number
    */
    'mobileNumber': string;
    /**
    * Job title
    */
    'jobTitle': SiteUserRequest.JobTitleEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "middleInitial",
            "baseName": "middleInitial",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "mobileNumber",
            "baseName": "mobileNumber",
            "type": "string"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "SiteUserRequest.JobTitleEnum"
        }    ];

    static getAttributeTypeMap() {
        return SiteUserRequest.attributeTypeMap;
    }
}

export namespace SiteUserRequest {
    export enum JobTitleEnum {
        PropertyManager = <any> 'property_manager'
    }
}