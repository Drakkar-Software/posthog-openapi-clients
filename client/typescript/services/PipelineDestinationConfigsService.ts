/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginConfigList } from '../models/PaginatedPluginConfigList';
import type { PatchedPluginConfig } from '../models/PatchedPluginConfig';
import type { PluginConfig } from '../models/PluginConfig';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PipelineDestinationConfigsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginConfigList
     * @throws ApiError
     */
    public pipelineDestinationConfigsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginConfigList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/pipeline_destination_configs/',
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
    public pipelineDestinationConfigsCreate(
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/pipeline_destination_configs/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns PluginConfig
     * @throws ApiError
     */
    public pipelineDestinationConfigsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/',
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
    public pipelineDestinationConfigsUpdate(
        id: number,
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/',
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
    public pipelineDestinationConfigsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedPluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/',
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
    public pipelineDestinationConfigsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/',
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
    public pipelineDestinationConfigsActivityRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/activity/',
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
    public pipelineDestinationConfigsFrontendRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/frontend/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationConfigsJobCreate(
        id: number,
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/job/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationConfigsMigrateCreate(
        id: number,
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/pipeline_destination_configs/{id}/migrate/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationConfigsRearrangePartialUpdate(
        projectId: string,
        requestBody?: PatchedPluginConfig,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/pipeline_destination_configs/rearrange/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
