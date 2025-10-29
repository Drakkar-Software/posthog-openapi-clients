/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginLogEntryList } from '../models/PaginatedPluginLogEntryList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PluginConfigsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param pluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginLogEntryList
     * @throws ApiError
     */
    public pluginConfigsLogsList(
        pluginConfigId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginLogEntryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/plugin_configs/{plugin_config_id}/logs/',
            path: {
                'plugin_config_id': pluginConfigId,
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
