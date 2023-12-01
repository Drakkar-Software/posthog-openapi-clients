/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPluginList } from '../models/PaginatedPluginList';
import type { PatchedPlugin } from '../models/PatchedPlugin';
import type { Plugin } from '../models/Plugin';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PipelineTransformationsService {

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public static pipelineTransformationsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsCreate(
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsCheckForUpdatesRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsSourceRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsUpdateSourcePartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsUpgradeCreate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsActivityRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsRepositoryRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
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
    public static pipelineTransformationsUnusedRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/unused/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

}
