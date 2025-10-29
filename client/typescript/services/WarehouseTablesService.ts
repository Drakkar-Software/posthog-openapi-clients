/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTableList } from '../models/PaginatedTableList';
import type { PatchedTable } from '../models/PatchedTable';
import type { Table } from '../models/Table';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WarehouseTablesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedTableList
     * @throws ApiError
     */
    public warehouseTablesList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedTableList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_tables/',
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
     * @returns Table
     * @throws ApiError
     */
    public warehouseTablesCreate(
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_tables/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Table
     * @throws ApiError
     */
    public warehouseTablesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_tables/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Table
     * @throws ApiError
     */
    public warehouseTablesUpdate(
        id: string,
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/warehouse_tables/{id}/',
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
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Table
     * @throws ApiError
     */
    public warehouseTablesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedTable,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/warehouse_tables/{id}/',
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
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public warehouseTablesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/warehouse_tables/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public warehouseTablesRefreshSchemaCreate(
        id: string,
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_tables/{id}/refresh_schema/',
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
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public warehouseTablesUpdateSchemaCreate(
        id: string,
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_tables/{id}/update_schema/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns any No response body
     * @throws ApiError
     */
    public warehouseTablesFileCreate(
        projectId: string,
        formData: Table,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_tables/file/',
            path: {
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}
