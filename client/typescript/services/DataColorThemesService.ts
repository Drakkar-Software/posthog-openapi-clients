/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataColorTheme } from '../models/DataColorTheme';
import type { PaginatedDataColorThemeList } from '../models/PaginatedDataColorThemeList';
import type { PatchedDataColorTheme } from '../models/PatchedDataColorTheme';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DataColorThemesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDataColorThemeList
     * @throws ApiError
     */
    public dataColorThemesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDataColorThemeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/data_color_themes/',
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
     * @returns DataColorTheme
     * @throws ApiError
     */
    public dataColorThemesCreate(
        projectId: string,
        requestBody: DataColorTheme,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/data_color_themes/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DataColorTheme
     * @throws ApiError
     */
    public dataColorThemesRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataColorTheme
     * @throws ApiError
     */
    public dataColorThemesUpdate(
        id: number,
        projectId: string,
        requestBody: DataColorTheme,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataColorTheme
     * @throws ApiError
     */
    public dataColorThemesPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedDataColorTheme,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public dataColorThemesDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
