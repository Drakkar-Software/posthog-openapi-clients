/* generated using openapi-typescript-codegen -- do not edit */
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
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationMemberList
     * @throws ApiError
     */
    public membersList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationMemberList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/members/',
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
     * @param userUuid
     * @param requestBody
     * @returns OrganizationMember
     * @throws ApiError
     */
    public membersUpdate(
        organizationId: string,
        userUuid: string,
        requestBody?: OrganizationMember,
    ): CancelablePromise<OrganizationMember> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/members/{user__uuid}/',
            path: {
                'organization_id': organizationId,
                'user__uuid': userUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param organizationId
     * @param userUuid
     * @param requestBody
     * @returns OrganizationMember
     * @throws ApiError
     */
    public membersPartialUpdate(
        organizationId: string,
        userUuid: string,
        requestBody?: PatchedOrganizationMember,
    ): CancelablePromise<OrganizationMember> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/members/{user__uuid}/',
            path: {
                'organization_id': organizationId,
                'user__uuid': userUuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param organizationId
     * @param userUuid
     * @returns void
     * @throws ApiError
     */
    public membersDestroy(
        organizationId: string,
        userUuid: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/members/{user__uuid}/',
            path: {
                'organization_id': organizationId,
                'user__uuid': userUuid,
            },
        });
    }
}
