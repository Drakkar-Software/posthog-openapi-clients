/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileSystem } from '../models/FileSystem';
import type { PaginatedFileSystemList } from '../models/PaginatedFileSystemList';
import type { PatchedFileSystem } from '../models/PatchedFileSystem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FileSystemService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedFileSystemList
     * @throws ApiError
     */
    public fileSystemList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedFileSystemList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/file_system/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystem
     * @throws ApiError
     */
    public fileSystemCreate(
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/file_system/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FileSystem
     * @throws ApiError
     */
    public fileSystemRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystem
     * @throws ApiError
     */
    public fileSystemUpdate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystem
     * @throws ApiError
     */
    public fileSystemPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedFileSystem,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public fileSystemDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Get count of all files in a folder.
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public fileSystemCountCreate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/file_system/{id}/count/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public fileSystemLinkCreate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/file_system/{id}/link/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public fileSystemMoveCreate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/file_system/{id}/move/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get count of all files in a folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public fileSystemCountByPathCreate(
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/file_system/count_by_path/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public fileSystemLogViewCreate(
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/file_system/log_view/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public fileSystemUnfiledRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/file_system/unfiled/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
