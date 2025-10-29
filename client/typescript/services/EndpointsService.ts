/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointLastExecutionTimesRequest } from '../models/EndpointLastExecutionTimesRequest';
import type { EndpointRequest } from '../models/EndpointRequest';
import type { EndpointRunRequest } from '../models/EndpointRunRequest';
import type { QueryStatusResponse } from '../models/QueryStatusResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EndpointsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all endpoints for the team.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/endpoints/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Create a new endpoint
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsCreate(
        projectId: string,
        requestBody?: EndpointRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/endpoints/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve an endpoint.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRetrieve2(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsUpdate(
        name: string,
        projectId: string,
        requestBody?: EndpointRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsPartialUpdate(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Delete a endpoint.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsEndpointsDestroy(
        name: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRunRetrieve(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/endpoints/{name}/run/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRunCreate(
        name: string,
        projectId: string,
        requestBody?: EndpointRunRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/endpoints/{name}/run/',
            path: {
                'name': name,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get the last execution times in the past 6 monthsfor multiple endpoints.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns QueryStatusResponse
     * @throws ApiError
     */
    public environmentsEndpointsLastExecutionTimesCreate(
        projectId: string,
        requestBody: EndpointLastExecutionTimesRequest,
    ): CancelablePromise<QueryStatusResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/endpoints/last_execution_times/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * List all endpoints for the team.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public endpointsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/endpoints/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Create a new endpoint
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public endpointsCreate(
        projectId: string,
        requestBody?: EndpointRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/endpoints/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve an endpoint.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public endpointsRetrieve2(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public endpointsUpdate(
        name: string,
        projectId: string,
        requestBody?: EndpointRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public endpointsPartialUpdate(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Delete a endpoint.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public endpointsDestroy(
        name: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public endpointsRunRetrieve(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/endpoints/{name}/run/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public endpointsRunCreate(
        name: string,
        projectId: string,
        requestBody?: EndpointRunRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/endpoints/{name}/run/',
            path: {
                'name': name,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get the last execution times in the past 6 monthsfor multiple endpoints.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns QueryStatusResponse
     * @throws ApiError
     */
    public endpointsLastExecutionTimesCreate(
        projectId: string,
        requestBody: EndpointLastExecutionTimesRequest,
    ): CancelablePromise<QueryStatusResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/endpoints/last_execution_times/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
