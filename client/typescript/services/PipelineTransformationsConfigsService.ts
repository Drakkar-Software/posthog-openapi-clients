/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginConfigList } from '../models/PaginatedPluginConfigList';
import type { PatchedPluginConfig } from '../models/PatchedPluginConfig';
import type { PluginConfig } from '../models/PluginConfig';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PipelineTransformationsConfigsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginConfigList
     * @throws ApiError
     */
    public pipelineTransformationsConfigsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginConfigList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/',
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
    public pipelineTransformationsConfigsCreate(
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/',
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
    public pipelineTransformationsConfigsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/{id}/',
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
    public pipelineTransformationsConfigsUpdate(
        id: number,
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/{id}/',
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
    public pipelineTransformationsConfigsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedPluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/{id}/',
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
    public pipelineTransformationsConfigsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/{id}/',
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
    public pipelineTransformationsConfigsFrontendRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/{id}/frontend/',
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
    public pipelineTransformationsConfigsJobCreate(
        id: number,
        projectId: string,
        requestBody: PluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/{id}/job/',
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
    public pipelineTransformationsConfigsRearrangePartialUpdate(
        projectId: string,
        requestBody?: PatchedPluginConfig,
    ): CancelablePromise<PluginConfig> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/pipeline_transformations_configs/rearrange/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
