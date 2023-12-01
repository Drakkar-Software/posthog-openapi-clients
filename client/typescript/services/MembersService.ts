/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationMember } from '../models/OrganizationMember';
import type { PaginatedOrganizationMemberList } from '../models/PaginatedOrganizationMemberList';
import type { PatchedOrganizationMember } from '../models/PatchedOrganizationMember';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MembersService {

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationMemberList
     * @throws ApiError
     */
    public static membersList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationMemberList> {
        return __request(OpenAPI, {
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
    public static membersUpdate(
        parentLookupOrganizationId: string,
        userUuid: string,
        requestBody?: OrganizationMember,
    ): CancelablePromise<OrganizationMember> {
        return __request(OpenAPI, {
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
    public static membersPartialUpdate(
        parentLookupOrganizationId: string,
        userUuid: string,
        requestBody?: PatchedOrganizationMember,
    ): CancelablePromise<OrganizationMember> {
        return __request(OpenAPI, {
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
    public static membersDestroy(
        parentLookupOrganizationId: string,
        userUuid: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/members/{user__uuid}/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
                'user__uuid': userUuid,
            },
        });
    }

}
