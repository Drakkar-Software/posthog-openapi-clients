/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Integration } from '../models/Integration';
import type { PaginatedIntegrationList } from '../models/PaginatedIntegrationList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IntegrationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedIntegrationList
     * @throws ApiError
     */
    public integrationsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedIntegrationList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/integrations/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Integration
     * @throws ApiError
     */
    public integrationsCreate(
        projectId: string,
        requestBody: Integration,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/integrations/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Integration
     * @throws ApiError
     */
    public integrationsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/integrations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public integrationsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/integrations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Integration
     * @throws ApiError
     */
    public integrationsChannelsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/integrations/{id}/channels/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
