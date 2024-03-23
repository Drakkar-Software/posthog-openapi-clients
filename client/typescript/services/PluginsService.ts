/* generated using openapi-typescript-codegen -- do not edit */
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
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pluginsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/',
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
    public pluginsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/plugins/',
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
    public pluginsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
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
    public pluginsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
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
    public pluginsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
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
    public pluginsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
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
    public pluginsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/{id}/check_for_updates/',
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
    public pluginsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/{id}/source/',
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
    public pluginsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/plugins/{id}/update_source/',
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
    public pluginsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/plugins/{id}/upgrade/',
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
    public pluginsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/activity/',
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
    public pluginsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/exports_unsubscribe_configs/',
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
    public pluginsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/repository/',
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
    public pluginsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
}
