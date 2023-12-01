/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginConfigList } from '../models/PaginatedPluginConfigList';
import type { PaginatedPluginLogEntryList } from '../models/PaginatedPluginLogEntryList';
import type { PatchedPluginConfig } from '../models/PatchedPluginConfig';
import type { PluginConfig } from '../models/PluginConfig';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PluginConfigsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginConfigList
     * @throws ApiError
     */
    public static pluginConfigsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginConfigList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/plugin_configs/',
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
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginConfigsCreate(
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/plugin_configs/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param parentLookupPluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginLogEntryList
     * @throws ApiError
     */
    public static pluginConfigsLogsList(
        parentLookupPluginConfigId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginLogEntryList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/plugin_configs/{parent_lookup_plugin_config_id}/logs/',
            path: {
                'parent_lookup_plugin_config_id': parentLookupPluginConfigId,
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginConfigsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/plugin_configs/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginConfigsUpdate(
        id: number,
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/plugin_configs/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginConfigsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedPluginConfig,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/plugin_configs/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static pluginConfigsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/plugin_configs/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginConfigsFrontendRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/plugin_configs/{id}/frontend/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginConfigsJobCreate(
        id: number,
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/plugin_configs/{id}/job/',
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
     * @returns PluginConfig
     * @throws ApiError
     */
    public static pluginConfigsRearrangePartialUpdate(
        projectId: string,
        requestBody?: PatchedPluginConfig,
    ): CancelablePromise<PluginConfig> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/plugin_configs/rearrange/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
