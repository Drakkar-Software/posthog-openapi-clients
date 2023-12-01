/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hook } from '../models/Hook';
import type { PaginatedHookList } from '../models/PaginatedHookList';
import type { PatchedHook } from '../models/PatchedHook';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HooksService {

    /**
     * Retrieve, create, update or destroy REST hooks.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedHookList
     * @throws ApiError
     */
    public static hooksList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedHookList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/hooks/',
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
     * Retrieve, create, update or destroy REST hooks.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Hook
     * @throws ApiError
     */
    public static hooksCreate(
        projectId: string,
        requestBody: Hook,
    ): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/hooks/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve, create, update or destroy REST hooks.
     * @param id A unique value identifying this hook.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Hook
     * @throws ApiError
     */
    public static hooksRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/hooks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * Retrieve, create, update or destroy REST hooks.
     * @param id A unique value identifying this hook.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Hook
     * @throws ApiError
     */
    public static hooksUpdate(
        id: string,
        projectId: string,
        requestBody: Hook,
    ): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/hooks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve, create, update or destroy REST hooks.
     * @param id A unique value identifying this hook.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Hook
     * @throws ApiError
     */
    public static hooksPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedHook,
    ): CancelablePromise<Hook> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/hooks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Retrieve, create, update or destroy REST hooks.
     * @param id A unique value identifying this hook.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static hooksDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/hooks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
