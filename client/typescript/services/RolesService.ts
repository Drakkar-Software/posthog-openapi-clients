/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedRoleList } from '../models/PaginatedRoleList';
import type { PaginatedRoleMembershipList } from '../models/PaginatedRoleMembershipList';
import type { PatchedRole } from '../models/PatchedRole';
import type { Role } from '../models/Role';
import type { RoleMembership } from '../models/RoleMembership';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedRoleList
     * @throws ApiError
     */
    public static rolesList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedRoleList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/',
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
     * @returns Role
     * @throws ApiError
     */
    public static rolesCreate(
        parentLookupOrganizationId: string,
        requestBody: Role,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param parentLookupOrganizationId
     * @param parentLookupRoleId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedRoleMembershipList
     * @throws ApiError
     */
    public static rolesRoleMembershipsList(
        parentLookupOrganizationId: string,
        parentLookupRoleId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedRoleMembershipList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{parent_lookup_role_id}/role_memberships/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
                'parent_lookup_role_id': parentLookupRoleId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param parentLookupOrganizationId
     * @param parentLookupRoleId
     * @param requestBody
     * @returns RoleMembership
     * @throws ApiError
     */
    public static rolesRoleMembershipsCreate(
        parentLookupOrganizationId: string,
        parentLookupRoleId: string,
        requestBody: RoleMembership,
    ): CancelablePromise<RoleMembership> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{parent_lookup_role_id}/role_memberships/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
                'parent_lookup_role_id': parentLookupRoleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this role membership.
     * @param parentLookupOrganizationId
     * @param parentLookupRoleId
     * @returns void
     * @throws ApiError
     */
    public static rolesRoleMembershipsDestroy(
        id: string,
        parentLookupOrganizationId: string,
        parentLookupRoleId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{parent_lookup_role_id}/role_memberships/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
                'parent_lookup_role_id': parentLookupRoleId,
            },
        });
    }

    /**
     * @param id A UUID string identifying this role.
     * @param parentLookupOrganizationId
     * @returns Role
     * @throws ApiError
     */
    public static rolesRetrieve(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

    /**
     * @param id A UUID string identifying this role.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Role
     * @throws ApiError
     */
    public static rolesUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: Role,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this role.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Role
     * @throws ApiError
     */
    public static rolesPartialUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody?: PatchedRole,
    ): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this role.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public static rolesDestroy(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

}
