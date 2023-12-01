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
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RolesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedRoleList
     * @throws ApiError
     */
    public rolesList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedRoleList> {
        return this.httpRequest.request({
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
    public rolesCreate(
        parentLookupOrganizationId: string,
        requestBody: Role,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
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
    public rolesRoleMembershipsList(
        parentLookupOrganizationId: string,
        parentLookupRoleId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedRoleMembershipList> {
        return this.httpRequest.request({
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
    public rolesRoleMembershipsCreate(
        parentLookupOrganizationId: string,
        parentLookupRoleId: string,
        requestBody: RoleMembership,
    ): CancelablePromise<RoleMembership> {
        return this.httpRequest.request({
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
    public rolesRoleMembershipsDestroy(
        id: string,
        parentLookupOrganizationId: string,
        parentLookupRoleId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
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
    public rolesRetrieve(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
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
    public rolesUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: Role,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
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
    public rolesPartialUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody?: PatchedRole,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
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
    public rolesDestroy(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/roles/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

}
