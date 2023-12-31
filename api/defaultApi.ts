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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { BadRequestError400Response } from '../model/badRequestError400Response';
import { CreateDefaultData200Response } from '../model/createDefaultData200Response';
import { CreateDefaultDataRequest } from '../model/createDefaultDataRequest';
import { ForbiddenError403Response } from '../model/forbiddenError403Response';
import { Import200Response } from '../model/import200Response';
import { InternalServerError500Response } from '../model/internalServerError500Response';
import { ResetData200Response } from '../model/resetData200Response';
import { UnauthorizedError401Response } from '../model/unauthorizedError401Response';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.dev.manage-space.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum DefaultApiApiKeys {
}

export class DefaultApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'bearer': new HttpBearerAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: DefaultApiApiKeys, value: string) {
        (this.authentications as any)[DefaultApiApiKeys[key]].apiKey = value;
    }

    set accessToken(accessToken: string | (() => string)) {
        this.authentications.bearer.accessToken = accessToken;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Endpoint to upload a file to import data.
     * @summary Import data from a file.
     * @param orgId Organization ID
     * @param siteId Site ID
     * @param locationId Location ID
     * @param entityTypeCodeName Must be a valid codeName of one of the supported entity types.
     * @param file The CSV file to be uploaded
     */
    public async _import (orgId: string, siteId: string, locationId: string, entityTypeCodeName: string, file: RequestFile, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: Import200Response;  }> {
        const localVarPath = this.basePath + '/onboarding/orgs/{orgId}/sites/{siteId}/locations/{locationId}/import'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)))
            .replace('{' + 'siteId' + '}', encodeURIComponent(String(siteId)))
            .replace('{' + 'locationId' + '}', encodeURIComponent(String(locationId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling _import.');
        }

        // verify required parameter 'siteId' is not null or undefined
        if (siteId === null || siteId === undefined) {
            throw new Error('Required parameter siteId was null or undefined when calling _import.');
        }

        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new Error('Required parameter locationId was null or undefined when calling _import.');
        }

        // verify required parameter 'entityTypeCodeName' is not null or undefined
        if (entityTypeCodeName === null || entityTypeCodeName === undefined) {
            throw new Error('Required parameter entityTypeCodeName was null or undefined when calling _import.');
        }

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling _import.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        if (entityTypeCodeName !== undefined) {
            localVarFormParams['entityTypeCodeName'] = ObjectSerializer.serialize(entityTypeCodeName, "string");
        }

        if (file !== undefined) {
            localVarFormParams['file'] = file;
        }
        localVarUseFormData = true;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: Import200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "Import200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Create the default data for onboarding.
     * @summary Create default data.
     * @param createDefaultDataRequest 
     */
    public async createDefaultData (createDefaultDataRequest: CreateDefaultDataRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateDefaultData200Response;  }> {
        const localVarPath = this.basePath + '/onboarding/orgs';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'createDefaultDataRequest' is not null or undefined
        if (createDefaultDataRequest === null || createDefaultDataRequest === undefined) {
            throw new Error('Required parameter createDefaultDataRequest was null or undefined when calling createDefaultData.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(createDefaultDataRequest, "CreateDefaultDataRequest")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateDefaultData200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "CreateDefaultData200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * Resets default data for org.
     * @summary Resets default data for org.
     * @param orgId The Organization ID
     */
    public async resetData (orgId: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ResetData200Response;  }> {
        const localVarPath = this.basePath + '/onboarding/orgs/{orgId}/reset'
            .replace('{' + 'orgId' + '}', encodeURIComponent(String(orgId)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json;v=1'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'orgId' is not null or undefined
        if (orgId === null || orgId === undefined) {
            throw new Error('Required parameter orgId was null or undefined when calling resetData.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.bearer.accessToken) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.bearer.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ResetData200Response;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ResetData200Response");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
