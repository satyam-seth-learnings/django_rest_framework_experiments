/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Student,
    StudentFromJSON,
    StudentToJSON,
} from '../models';

export interface CreateStudentRequest {
    student?: Student;
}

export interface DestroyStudentRequest {
    id: string;
}

export interface PartialUpdateStudentRequest {
    id: string;
    student?: Student;
}

export interface RetrieveStudentRequest {
    id: string;
}

export interface UpdateStudentRequest {
    id: string;
    student?: Student;
}

/**
 * 
 */
export class StudentapiApi extends runtime.BaseAPI {

    /**
     * 
     */
    async createStudentRaw(requestParameters: CreateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/studentapi/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StudentToJSON(requestParameters.student),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudentFromJSON(jsonValue));
    }

    /**
     * 
     */
    async createStudent(requestParameters: CreateStudentRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student> {
        const response = await this.createStudentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async destroyStudentRaw(requestParameters: DestroyStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling destroyStudent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     */
    async destroyStudent(requestParameters: DestroyStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.destroyStudentRaw(requestParameters, initOverrides);
    }

    /**
     * 
     */
    async listStudentsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<Student>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/studentapi/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StudentFromJSON));
    }

    /**
     * 
     */
    async listStudents(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<Student>> {
        const response = await this.listStudentsRaw(initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async partialUpdateStudentRaw(requestParameters: PartialUpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling partialUpdateStudent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: StudentToJSON(requestParameters.student),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudentFromJSON(jsonValue));
    }

    /**
     * 
     */
    async partialUpdateStudent(requestParameters: PartialUpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student> {
        const response = await this.partialUpdateStudentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async retrieveStudentRaw(requestParameters: RetrieveStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling retrieveStudent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudentFromJSON(jsonValue));
    }

    /**
     * 
     */
    async retrieveStudent(requestParameters: RetrieveStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student> {
        const response = await this.retrieveStudentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     */
    async updateStudentRaw(requestParameters: UpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateStudent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/studentapi/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StudentToJSON(requestParameters.student),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StudentFromJSON(jsonValue));
    }

    /**
     * 
     */
    async updateStudent(requestParameters: UpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student> {
        const response = await this.updateStudentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
