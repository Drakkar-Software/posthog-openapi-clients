/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppMetricsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param parentLookupPluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public appMetricsHistoricalExportsRetrieve(
        parentLookupPluginConfigId: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/app_metrics/{parent_lookup_plugin_config_id}/historical_exports/',
            path: {
                'parent_lookup_plugin_config_id': parentLookupPluginConfigId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id
     * @param parentLookupPluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public appMetricsHistoricalExportsRetrieve2(
        id: string,
        parentLookupPluginConfigId: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/app_metrics/{parent_lookup_plugin_config_id}/historical_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_plugin_config_id': parentLookupPluginConfigId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public appMetricsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/app_metrics/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public appMetricsErrorDetailsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/app_metrics/{id}/error_details/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
