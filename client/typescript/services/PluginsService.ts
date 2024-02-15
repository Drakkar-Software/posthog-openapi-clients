/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginList } from '../models/PaginatedPluginList';
import type { PatchedPlugin } from '../models/PatchedPlugin';
import type { Plugin } from '../models/Plugin';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PluginsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pluginsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/',
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
    public pluginsCreate(
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/',
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
    public pluginsRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
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
    public pluginsUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
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
    public pluginsPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
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
    public pluginsDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
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
    public pluginsCheckForUpdatesRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/check_for_updates/',
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
    public pluginsSourceRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/source/',
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
    public pluginsUpdateSourcePartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/update_source/',
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
    public pluginsUpgradeCreate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/upgrade/',
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
    public pluginsActivityRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/activity/',
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
    public pluginsExportsUnsubscribeConfigsRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/exports_unsubscribe_configs/',
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
    public pluginsRepositoryRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/repository/',
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
    public pluginsUnusedRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/unused/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
}
