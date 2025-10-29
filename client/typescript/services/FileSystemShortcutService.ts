/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileSystemShortcut } from '../models/FileSystemShortcut';
import type { PaginatedFileSystemShortcutList } from '../models/PaginatedFileSystemShortcutList';
import type { PatchedFileSystemShortcut } from '../models/PatchedFileSystemShortcut';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FileSystemShortcutService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedFileSystemShortcutList
     * @throws ApiError
     */
    public fileSystemShortcutList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedFileSystemShortcutList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/file_system_shortcut/',
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
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public fileSystemShortcutCreate(
        projectId: string,
        requestBody: FileSystemShortcut,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/file_system_shortcut/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public fileSystemShortcutRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public fileSystemShortcutUpdate(
        id: string,
        projectId: string,
        requestBody: FileSystemShortcut,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public fileSystemShortcutPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedFileSystemShortcut,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public fileSystemShortcutDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
