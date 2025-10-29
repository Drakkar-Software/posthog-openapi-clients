/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogFunction } from '../models/HogFunction';
import type { PaginatedHogFunctionMinimalList } from '../models/PaginatedHogFunctionMinimalList';
import type { PatchedHogFunction } from '../models/PatchedHogFunction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HogFunctionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param createdAt
     * @param createdBy
     * @param enabled
     * @param id
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @param type Multiple values may be separated by commas.
     * @param updatedAt
     * @returns PaginatedHogFunctionMinimalList
     * @throws ApiError
     */
    public hogFunctionsList(
        projectId: string,
        createdAt?: string,
        createdBy?: number,
        enabled?: boolean,
        id?: string,
        limit?: number,
        offset?: number,
        search?: string,
        type?: Array<string>,
        updatedAt?: string,
    ): CancelablePromise<PaginatedHogFunctionMinimalList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/hog_functions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'created_at': createdAt,
                'created_by': createdBy,
                'enabled': enabled,
                'id': id,
                'limit': limit,
                'offset': offset,
                'search': search,
                'type': type,
                'updated_at': updatedAt,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns HogFunction
     * @throws ApiError
     */
    public hogFunctionsCreate(
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/hog_functions/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns HogFunction
     * @throws ApiError
     */
    public hogFunctionsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/hog_functions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns HogFunction
     * @throws ApiError
     */
    public hogFunctionsUpdate(
        id: string,
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/hog_functions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns HogFunction
     * @throws ApiError
     */
    public hogFunctionsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedHogFunction,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/hog_functions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public hogFunctionsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/hog_functions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsBroadcastCreate(
        id: string,
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/hog_functions/{id}/broadcast/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsInvocationsCreate(
        id: string,
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/hog_functions/{id}/invocations/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsLogsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/hog_functions/{id}/logs/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsMetricsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/hog_functions/{id}/metrics/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsMetricsTotalsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/hog_functions/{id}/metrics/totals/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsIconRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/hog_functions/icon/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsIconsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/hog_functions/icons/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Update the execution order of multiple HogFunctions.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public hogFunctionsRearrangePartialUpdate(
        projectId: string,
        requestBody?: PatchedHogFunction,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/hog_functions/rearrange/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
