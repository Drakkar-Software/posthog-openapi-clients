/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationResourceAccess } from '../models/OrganizationResourceAccess';
import type { PaginatedOrganizationResourceAccessList } from '../models/PaginatedOrganizationResourceAccessList';
import type { PatchedOrganizationResourceAccess } from '../models/PatchedOrganizationResourceAccess';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ResourceAccessService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationResourceAccessList
     * @throws ApiError
     */
    public resourceAccessList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationResourceAccessList> {
        return this.httpRequest.request({
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
    public resourceAccessCreate(
        parentLookupOrganizationId: string,
        requestBody: OrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
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
    public resourceAccessRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
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
    public resourceAccessUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody: OrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
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
    public resourceAccessPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedOrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
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
    public resourceAccessDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

}
