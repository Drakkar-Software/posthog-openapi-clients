/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Integration } from '../models/Integration';
import type { PaginatedIntegrationList } from '../models/PaginatedIntegrationList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IntegrationsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedIntegrationList
     * @throws ApiError
     */
    public static integrationsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedIntegrationList> {
        return __request(OpenAPI, {
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
    public static integrationsCreate(
        projectId: string,
        requestBody: Integration,
    ): CancelablePromise<Integration> {
        return __request(OpenAPI, {
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
    public static integrationsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Integration> {
        return __request(OpenAPI, {
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
    public static integrationsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static integrationsChannelsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Integration> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/integrations/{id}/channels/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
