/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginList } from '../models/PaginatedPluginList';
import type { PatchedPlugin } from '../models/PatchedPlugin';
import type { Plugin } from '../models/Plugin';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PipelineTransformationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineTransformationsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/',
            path: {
                'organization_id': organizationId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_transformations/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineTransformationsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/check_for_updates/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/update_source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/upgrade/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/activity/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/exports_unsubscribe_configs/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/repository/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
}
