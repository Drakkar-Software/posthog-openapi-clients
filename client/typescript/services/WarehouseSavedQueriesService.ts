/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataWarehouseSavedQuery } from '../models/DataWarehouseSavedQuery';
import type { PaginatedDataWarehouseSavedQueryList } from '../models/PaginatedDataWarehouseSavedQueryList';
import type { PatchedDataWarehouseSavedQuery } from '../models/PatchedDataWarehouseSavedQuery';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WarehouseSavedQueriesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedDataWarehouseSavedQueryList
     * @throws ApiError
     */
    public warehouseSavedQueriesList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedDataWarehouseSavedQueryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_saved_queries/',
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
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesCreate(
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_saved_queries/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesUpdate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedDataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public warehouseSavedQueriesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
