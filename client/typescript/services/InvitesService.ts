/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationInvite } from '../models/OrganizationInvite';
import type { PaginatedOrganizationInviteList } from '../models/PaginatedOrganizationInviteList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InvitesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationInviteList
     * @throws ApiError
     */
    public invitesList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationInviteList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/invites/',
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
     * @returns OrganizationInvite
     * @throws ApiError
     */
    public invitesCreate(
        parentLookupOrganizationId: string,
        requestBody: OrganizationInvite,
    ): CancelablePromise<OrganizationInvite> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/invites/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this organization invite.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public invitesDestroy(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/invites/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationInvite
     * @throws ApiError
     */
    public invitesBulkCreate(
        parentLookupOrganizationId: string,
        requestBody: OrganizationInvite,
    ): CancelablePromise<OrganizationInvite> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/invites/bulk/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
