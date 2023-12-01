/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedViewLinkList } from '../models/PaginatedViewLinkList';
import type { PatchedViewLink } from '../models/PatchedViewLink';
import type { ViewLink } from '../models/ViewLink';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WarehouseViewLinkService {

    /**
     * Create, Read, Update and Delete View Columns.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedViewLinkList
     * @throws ApiError
     */
    public static warehouseViewLinkList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedViewLinkList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_view_link/',
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
     * Create, Read, Update and Delete View Columns.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ViewLink
     * @throws ApiError
     */
    public static warehouseViewLinkCreate(
        projectId: string,
        requestBody: ViewLink,
    ): CancelablePromise<ViewLink> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/warehouse_view_link/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete View Columns.
     * @param id A UUID string identifying this data warehouse view link.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ViewLink
     * @throws ApiError
     */
    public static warehouseViewLinkRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ViewLink> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/warehouse_view_link/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, Read, Update and Delete View Columns.
     * @param id A UUID string identifying this data warehouse view link.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ViewLink
     * @throws ApiError
     */
    public static warehouseViewLinkUpdate(
        id: string,
        projectId: string,
        requestBody: ViewLink,
    ): CancelablePromise<ViewLink> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/warehouse_view_link/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete View Columns.
     * @param id A UUID string identifying this data warehouse view link.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ViewLink
     * @throws ApiError
     */
    public static warehouseViewLinkPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedViewLink,
    ): CancelablePromise<ViewLink> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/warehouse_view_link/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create, Read, Update and Delete View Columns.
     * @param id A UUID string identifying this data warehouse view link.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static warehouseViewLinkDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/warehouse_view_link/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
