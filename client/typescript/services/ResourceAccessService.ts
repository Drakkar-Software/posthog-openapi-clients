/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationResourceAccess } from '../models/OrganizationResourceAccess';
import type { PaginatedOrganizationResourceAccessList } from '../models/PaginatedOrganizationResourceAccessList';
import type { PatchedOrganizationResourceAccess } from '../models/PatchedOrganizationResourceAccess';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ResourceAccessService {

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationResourceAccessList
     * @throws ApiError
     */
    public static resourceAccessList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationResourceAccessList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/',
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
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public static resourceAccessCreate(
        parentLookupOrganizationId: string,
        requestBody: OrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public static resourceAccessRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<OrganizationResourceAccess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public static resourceAccessUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody: OrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public static resourceAccessPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedOrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public static resourceAccessDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

}
