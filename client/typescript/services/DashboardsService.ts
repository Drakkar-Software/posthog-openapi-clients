/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dashboard } from '../models/Dashboard';
import type { PaginatedDashboardBasicList } from '../models/PaginatedDashboardBasicList';
import type { PatchedDashboard } from '../models/PatchedDashboard';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DashboardsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDashboardBasicList
     * @throws ApiError
     */
    public static dashboardsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDashboardBasicList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/dashboards/',
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
     * @returns Dashboard
     * @throws ApiError
     */
    public static dashboardsCreate(
        projectId: string,
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/dashboards/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Dashboard
     * @throws ApiError
     */
    public static dashboardsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Dashboard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dashboard
     * @throws ApiError
     */
    public static dashboardsUpdate(
        id: number,
        projectId: string,
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dashboard
     * @throws ApiError
     */
    public static dashboardsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedDashboard,
    ): CancelablePromise<Dashboard> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static dashboardsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dashboard
     * @throws ApiError
     */
    public static dashboardsMoveTilePartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedDashboard,
    ): CancelablePromise<Dashboard> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/dashboards/{id}/move_tile/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dashboard
     * @throws ApiError
     */
    public static dashboardsCreateFromTemplateJsonCreate(
        projectId: string,
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/dashboards/create_from_template_json/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
