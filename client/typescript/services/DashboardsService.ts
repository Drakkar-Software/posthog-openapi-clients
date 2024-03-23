/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dashboard } from '../models/Dashboard';
import type { DashboardCollaborator } from '../models/DashboardCollaborator';
import type { PaginatedDashboardBasicList } from '../models/PaginatedDashboardBasicList';
import type { PatchedDashboard } from '../models/PatchedDashboard';
import type { SharingConfiguration } from '../models/SharingConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DashboardsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDashboardBasicList
     * @throws ApiError
     */
    public dashboardsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDashboardBasicList> {
        return this.httpRequest.request({
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
    public dashboardsCreate(
        projectId: string,
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
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
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DashboardCollaborator
     * @throws ApiError
     */
    public dashboardsCollaboratorsList(
        dashboardId: number,
        projectId: string,
    ): CancelablePromise<Array<DashboardCollaborator>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DashboardCollaborator
     * @throws ApiError
     */
    public dashboardsCollaboratorsCreate(
        dashboardId: number,
        projectId: string,
        requestBody: DashboardCollaborator,
    ): CancelablePromise<DashboardCollaborator> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param userUuid
     * @returns void
     * @throws ApiError
     */
    public dashboardsCollaboratorsDestroy(
        dashboardId: number,
        projectId: string,
        userUuid: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/{user__uuid}/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
                'user__uuid': userUuid,
            },
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public dashboardsSharingList(
        dashboardId: number,
        projectId: string,
    ): CancelablePromise<Array<SharingConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/dashboards/{dashboard_id}/sharing/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Dashboard
     * @throws ApiError
     */
    public dashboardsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
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
    public dashboardsUpdate(
        id: number,
        projectId: string,
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
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
    public dashboardsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedDashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
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
    public dashboardsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
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
    public dashboardsMoveTilePartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedDashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
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
    public dashboardsCreateFromTemplateJsonCreate(
        projectId: string,
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
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
