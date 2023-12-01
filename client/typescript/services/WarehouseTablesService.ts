/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTableList } from '../models/PaginatedTableList';
import type { PatchedTable } from '../models/PatchedTable';
import type { Table } from '../models/Table';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WarehouseTablesService {

    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedTableList
     * @throws ApiError
     */
    public static warehouseTablesList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedTableList> {
        return __request(OpenAPI, {
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
    public static warehouseTablesCreate(
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<Table> {
        return __request(OpenAPI, {
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
    public static warehouseTablesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Table> {
        return __request(OpenAPI, {
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
    public static warehouseTablesUpdate(
        id: string,
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<Table> {
        return __request(OpenAPI, {
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
    public static warehouseTablesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedTable,
    ): CancelablePromise<Table> {
        return __request(OpenAPI, {
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
    public static warehouseTablesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/warehouse_tables/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
