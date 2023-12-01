/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnterpriseEventDefinition } from '../models/EnterpriseEventDefinition';
import type { PaginatedEnterpriseEventDefinitionList } from '../models/PaginatedEnterpriseEventDefinitionList';
import type { PatchedEnterpriseEventDefinition } from '../models/PatchedEnterpriseEventDefinition';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventDefinitionsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedEnterpriseEventDefinitionList
     * @throws ApiError
     */
    public static eventDefinitionsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedEnterpriseEventDefinitionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/event_definitions/',
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
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns EnterpriseEventDefinition
     * @throws ApiError
     */
    public static eventDefinitionsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<EnterpriseEventDefinition> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/event_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns EnterpriseEventDefinition
     * @throws ApiError
     */
    public static eventDefinitionsUpdate(
        id: string,
        projectId: string,
        requestBody?: EnterpriseEventDefinition,
    ): CancelablePromise<EnterpriseEventDefinition> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/event_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns EnterpriseEventDefinition
     * @throws ApiError
     */
    public static eventDefinitionsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedEnterpriseEventDefinition,
    ): CancelablePromise<EnterpriseEventDefinition> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/event_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static eventDefinitionsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/event_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
