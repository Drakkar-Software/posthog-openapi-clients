/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginList } from '../models/PaginatedPluginList';
import type { PatchedPlugin } from '../models/PatchedPlugin';
import type { Plugin } from '../models/Plugin';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PipelineDestinationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineDestinationsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/',
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
    public pipelineDestinationsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_destinations/',
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
    public pipelineDestinationsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
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
    public pipelineDestinationsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
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
    public pipelineDestinationsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
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
    public pipelineDestinationsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/check_for_updates/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/source/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/update_source/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/upgrade/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/activity/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/exports_unsubscribe_configs/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/repository/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public pipelineDestinationsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
}
