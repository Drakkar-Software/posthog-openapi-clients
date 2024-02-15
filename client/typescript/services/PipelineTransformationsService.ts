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
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineTransformationsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/',
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
    public pipelineTransformationsCreate(
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/',
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
    public pipelineTransformationsRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
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
    public pipelineTransformationsUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
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
    public pipelineTransformationsPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
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
    public pipelineTransformationsDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
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
    public pipelineTransformationsCheckForUpdatesRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/check_for_updates/',
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
    public pipelineTransformationsSourceRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/source/',
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
    public pipelineTransformationsUpdateSourcePartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/update_source/',
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
    public pipelineTransformationsUpgradeCreate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/upgrade/',
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
    public pipelineTransformationsActivityRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/activity/',
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
    public pipelineTransformationsExportsUnsubscribeConfigsRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/exports_unsubscribe_configs/',
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
    public pipelineTransformationsRepositoryRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/repository/',
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
    public pipelineTransformationsUnusedRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/unused/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
}
