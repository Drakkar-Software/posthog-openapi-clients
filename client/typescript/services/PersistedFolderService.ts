/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPersistedFolderList } from '../models/PaginatedPersistedFolderList';
import type { PatchedPersistedFolder } from '../models/PatchedPersistedFolder';
import type { PersistedFolder } from '../models/PersistedFolder';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PersistedFolderService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPersistedFolderList
     * @throws ApiError
     */
    public persistedFolderList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPersistedFolderList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persisted_folder/',
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
     * @returns PersistedFolder
     * @throws ApiError
     */
    public persistedFolderCreate(
        projectId: string,
        requestBody: PersistedFolder,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persisted_folder/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns PersistedFolder
     * @throws ApiError
     */
    public persistedFolderRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PersistedFolder
     * @throws ApiError
     */
    public persistedFolderUpdate(
        id: string,
        projectId: string,
        requestBody: PersistedFolder,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PersistedFolder
     * @throws ApiError
     */
    public persistedFolderPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedPersistedFolder,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public persistedFolderDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
