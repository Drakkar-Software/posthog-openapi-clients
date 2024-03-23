/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AppMetricsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    /**
     * @param pluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public appMetricsHistoricalExportsRetrieve(
        pluginConfigId: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/app_metrics/{plugin_config_id}/historical_exports/',
            path: {
                'plugin_config_id': pluginConfigId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id
     * @param pluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public appMetricsHistoricalExportsRetrieve2(
        id: string,
        pluginConfigId: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/app_metrics/{plugin_config_id}/historical_exports/{id}/',
            path: {
                'id': id,
                'plugin_config_id': pluginConfigId,
                'project_id': projectId,
            },
        });
    }
}
