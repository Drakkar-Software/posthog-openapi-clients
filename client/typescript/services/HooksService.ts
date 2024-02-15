/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hook } from '../models/Hook';
import type { PaginatedHookList } from '../models/PaginatedHookList';
import type { PatchedHook } from '../models/PatchedHook';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HooksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve, create, update or destroy REST hooks.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedHookList
     * @throws ApiError
     */
    public hooksList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedHookList> {
        return this.httpRequest.request({
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
    public hooksCreate(
        projectId: string,
        requestBody: Hook,
    ): CancelablePromise<Hook> {
        return this.httpRequest.request({
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
    public hooksRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Hook> {
        return this.httpRequest.request({
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
    public hooksUpdate(
        id: string,
        projectId: string,
        requestBody: Hook,
    ): CancelablePromise<Hook> {
        return this.httpRequest.request({
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
    public hooksPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedHook,
    ): CancelablePromise<Hook> {
        return this.httpRequest.request({
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
    public hooksDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/hooks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
