/* generated using openapi-typescript-codegen -- do not edit */
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
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationInviteList
     * @throws ApiError
     */
    public invitesList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationInviteList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/invites/',
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
     * @returns OrganizationInvite
     * @throws ApiError
     */
    public invitesCreate(
        organizationId: string,
        requestBody: OrganizationInvite,
    ): CancelablePromise<OrganizationInvite> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/invites/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this organization invite.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public invitesDestroy(
        id: string,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/invites/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @param requestBody
     * @returns OrganizationInvite
     * @throws ApiError
     */
    public invitesBulkCreate(
        organizationId: string,
        requestBody: OrganizationInvite,
    ): CancelablePromise<OrganizationInvite> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/invites/bulk/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
