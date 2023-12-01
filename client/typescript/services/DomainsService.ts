/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationDomain } from '../models/OrganizationDomain';
import type { PaginatedOrganizationDomainList } from '../models/PaginatedOrganizationDomainList';
import type { PatchedOrganizationDomain } from '../models/PatchedOrganizationDomain';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DomainsService {

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationDomainList
     * @throws ApiError
     */
    public static domainsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationDomainList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/',
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
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public static domainsCreate(
        parentLookupOrganizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public static domainsRetrieve(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<OrganizationDomain> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public static domainsUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public static domainsPartialUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody?: PatchedOrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public static domainsDestroy(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public static domainsVerifyCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/verify/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
