/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationDomain } from '../models/OrganizationDomain';
import type { PaginatedOrganizationDomainList } from '../models/PaginatedOrganizationDomainList';
import type { PatchedOrganizationDomain } from '../models/PatchedOrganizationDomain';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DomainsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationDomainList
     * @throws ApiError
     */
    public domainsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationDomainList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/domains/',
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
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsCreate(
        organizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/domains/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param organizationId
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/domains/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param organizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsUpdate(
        id: string,
        organizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/domains/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param organizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsPartialUpdate(
        id: string,
        organizationId: string,
        requestBody?: PatchedOrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/domains/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public domainsDestroy(
        id: string,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/domains/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param organizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsVerifyCreate(
        id: string,
        organizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/domains/{id}/verify/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
