/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardTemplate } from '../models/DashboardTemplate';
import type { PaginatedDashboardTemplateList } from '../models/PaginatedDashboardTemplateList';
import type { PatchedDashboardTemplate } from '../models/PatchedDashboardTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DashboardTemplatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDashboardTemplateList
     * @throws ApiError
     */
    public dashboardTemplatesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDashboardTemplateList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/dashboard_templates/',
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
     * @returns DashboardTemplate
     * @throws ApiError
     */
    public dashboardTemplatesCreate(
        projectId: string,
        requestBody?: DashboardTemplate,
    ): CancelablePromise<DashboardTemplate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/dashboard_templates/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DashboardTemplate
     * @throws ApiError
     */
    public dashboardTemplatesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<DashboardTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/dashboard_templates/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DashboardTemplate
     * @throws ApiError
     */
    public dashboardTemplatesUpdate(
        id: string,
        projectId: string,
        requestBody?: DashboardTemplate,
    ): CancelablePromise<DashboardTemplate> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/dashboard_templates/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DashboardTemplate
     * @throws ApiError
     */
    public dashboardTemplatesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedDashboardTemplate,
    ): CancelablePromise<DashboardTemplate> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/dashboard_templates/{id}/',
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
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public dashboardTemplatesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/dashboard_templates/{id}/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DashboardTemplate
     * @throws ApiError
     */
    public dashboardTemplatesJsonSchemaRetrieve(
        projectId: string,
    ): CancelablePromise<DashboardTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/dashboard_templates/json_schema/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
