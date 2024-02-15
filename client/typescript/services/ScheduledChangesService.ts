/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedScheduledChangeList } from '../models/PaginatedScheduledChangeList';
import type { PatchedScheduledChange } from '../models/PatchedScheduledChange';
import type { ScheduledChange } from '../models/ScheduledChange';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ScheduledChangesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create, read, update and delete scheduled changes.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedScheduledChangeList
     * @throws ApiError
     */
    public scheduledChangesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedScheduledChangeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/scheduled_changes/',
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
     * Create, read, update and delete scheduled changes.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ScheduledChange
     * @throws ApiError
     */
    public scheduledChangesCreate(
        projectId: string,
        requestBody: ScheduledChange,
    ): CancelablePromise<ScheduledChange> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/scheduled_changes/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete scheduled changes.
     * @param id A unique integer value identifying this scheduled change.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ScheduledChange
     * @throws ApiError
     */
    public scheduledChangesRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ScheduledChange> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/scheduled_changes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete scheduled changes.
     * @param id A unique integer value identifying this scheduled change.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ScheduledChange
     * @throws ApiError
     */
    public scheduledChangesUpdate(
        id: number,
        projectId: string,
        requestBody: ScheduledChange,
    ): CancelablePromise<ScheduledChange> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/scheduled_changes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete scheduled changes.
     * @param id A unique integer value identifying this scheduled change.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ScheduledChange
     * @throws ApiError
     */
    public scheduledChangesPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedScheduledChange,
    ): CancelablePromise<ScheduledChange> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/scheduled_changes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete scheduled changes.
     * @param id A unique integer value identifying this scheduled change.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public scheduledChangesDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/scheduled_changes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
