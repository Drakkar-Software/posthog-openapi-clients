/* generated using openapi-typescript-codegen -- do no edit */
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
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineDestinationsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsCreate(
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineDestinationsDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsCheckForUpdatesRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/check_for_updates/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsSourceRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpdateSourcePartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/update_source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpgradeCreate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/upgrade/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsActivityRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/activity/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsExportsUnsubscribeConfigsRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/exports_unsubscribe_configs/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsRepositoryRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/repository/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUnusedRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/unused/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
}
