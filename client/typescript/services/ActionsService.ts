/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Action } from '../models/Action';
import type { PaginatedActionList } from '../models/PaginatedActionList';
import type { PatchedAction } from '../models/PatchedAction';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActionsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedActionList
     * @throws ApiError
     */
    public static actionsList(
        projectId: string,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedActionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/actions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Action
     * @throws ApiError
     */
    public static actionsCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Action,
    ): CancelablePromise<Action> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/actions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this action.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Action
     * @throws ApiError
     */
    public static actionsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Action> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/actions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this action.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Action
     * @throws ApiError
     */
    public static actionsUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Action,
    ): CancelablePromise<Action> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/actions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this action.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Action
     * @throws ApiError
     */
    public static actionsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: PatchedAction,
    ): CancelablePromise<Action> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/actions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this action.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns void
     * @throws ApiError
     */
    public static actionsDestroy(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/actions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            errors: {
                405: `No response body`,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this action.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Action
     * @throws ApiError
     */
    public static actionsCountRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Action> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/actions/{id}/count/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Action
     * @throws ApiError
     */
    public static actionsPeopleRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Action> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/actions/people/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

}