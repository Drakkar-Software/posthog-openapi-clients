/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notebook } from '../models/Notebook';
import type { PaginatedNotebookMinimalList } from '../models/PaginatedNotebookMinimalList';
import type { PatchedNotebook } from '../models/PatchedNotebook';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class NotebooksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param contains Filter for notebooks that match a provided filter.
     * Each match pair is separated by a colon,
     * multiple match pairs can be sent separated by a space or a comma
     * @param createdBy The UUID of the Notebook's creator
     * @param dateFrom Filter for notebooks created after this date & time
     * @param dateTo Filter for notebooks created before this date & time
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param user If any value is provided for this parameter, return notebooks created by the logged in user.
     * @returns PaginatedNotebookMinimalList
     * @throws ApiError
     */
    public notebooksList(
        projectId: string,
        contains?: string,
        createdBy?: number,
        dateFrom?: string,
        dateTo?: string,
        limit?: number,
        offset?: number,
        user?: string,
    ): CancelablePromise<PaginatedNotebookMinimalList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/notebooks/',
            path: {
                'project_id': projectId,
            },
            query: {
                'contains': contains,
                'created_by': createdBy,
                'date_from': dateFrom,
                'date_to': dateTo,
                'limit': limit,
                'offset': offset,
                'user': user,
            },
        });
    }
    /**
     * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Notebook
     * @throws ApiError
     */
    public notebooksCreate(
        projectId: string,
        requestBody?: Notebook,
    ): CancelablePromise<Notebook> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/notebooks/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns Notebook
     * @throws ApiError
     */
    public notebooksRetrieve(
        projectId: string,
        shortId: string,
    ): CancelablePromise<Notebook> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/notebooks/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
        });
    }
    /**
     * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @param requestBody
     * @returns Notebook
     * @throws ApiError
     */
    public notebooksUpdate(
        projectId: string,
        shortId: string,
        requestBody?: Notebook,
    ): CancelablePromise<Notebook> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/notebooks/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @param requestBody
     * @returns Notebook
     * @throws ApiError
     */
    public notebooksPartialUpdate(
        projectId: string,
        shortId: string,
        requestBody?: PatchedNotebook,
    ): CancelablePromise<Notebook> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/notebooks/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns void
     * @throws ApiError
     */
    public notebooksDestroy(
        projectId: string,
        shortId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/notebooks/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns any No response body
     * @throws ApiError
     */
    public notebooksActivityRetrieve2(
        projectId: string,
        shortId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/notebooks/{short_id}/activity/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
        });
    }
    /**
     * The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public notebooksActivityRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/notebooks/activity/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
