/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationMember } from '../models/OrganizationMember';
import type { PaginatedOrganizationMemberList } from '../models/PaginatedOrganizationMemberList';
import type { PatchedOrganizationMember } from '../models/PatchedOrganizationMember';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MembersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationMemberList
     * @throws ApiError
     */
    public membersList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationMemberList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/members/',
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
     * @param userUuid
     * @param requestBody
     * @returns OrganizationMember
     * @throws ApiError
     */
    public membersUpdate(
        parentLookupOrganizationId: string,
        userUuid: string,
        requestBody?: OrganizationMember,
    ): CancelablePromise<OrganizationMember> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/members/{user__uuid}/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
                'user__uuid': userUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param parentLookupOrganizationId
     * @param userUuid
     * @param requestBody
     * @returns OrganizationMember
     * @throws ApiError
     */
    public membersPartialUpdate(
        parentLookupOrganizationId: string,
        userUuid: string,
        requestBody?: PatchedOrganizationMember,
    ): CancelablePromise<OrganizationMember> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/members/{user__uuid}/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
                'user__uuid': userUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param parentLookupOrganizationId
     * @param userUuid
     * @returns void
     * @throws ApiError
     */
    public membersDestroy(
        parentLookupOrganizationId: string,
        userUuid: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/members/{user__uuid}/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
                'user__uuid': userUuid,
            },
        });
    }

}
