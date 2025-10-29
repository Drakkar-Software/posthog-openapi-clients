/* generated using openapi-typescript-codegen -- do not edit */
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
     * @param page A page number within the paginated result set.
     * @param search A search term.
     * @returns PaginatedDataWarehouseSavedQueryList
     * @throws ApiError
     */
    public warehouseSavedQueriesList(
        projectId: string,
        page?: number,
        search?: string,
    ): CancelablePromise<PaginatedDataWarehouseSavedQueryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_saved_queries/',
            path: {
                'project_id': projectId,
            },
            query: {
                'page': page,
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
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesActivityRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Return the ancestors of this saved query.
     *
     * By default, we return the immediate parents. The `level` parameter can be used to
     * look further back into the ancestor tree. If `level` overshoots (i.e. points to only
     * ancestors beyond the root), we return an empty list.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesAncestorsCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/ancestors/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Cancel a running saved query workflow.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesCancelCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/cancel/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Return the descendants of this saved query.
     *
     * By default, we return the immediate children. The `level` parameter can be used to
     * look further ahead into the descendants tree. If `level` overshoots (i.e. points to only
     * descendants further than a leaf), we return an empty list.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesDescendantsCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/descendants/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Undo materialization, revert back to the original view.
     * (i.e. delete the materialized table and the schedule)
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesRevertMaterializationCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/revert_materialization/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Run this saved query.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public warehouseSavedQueriesRunCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_saved_queries/{id}/run/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
