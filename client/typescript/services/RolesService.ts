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
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedRoleList
     * @throws ApiError
     */
    public rolesList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedRoleList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/roles/',
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
     * @returns Role
     * @throws ApiError
     */
    public rolesCreate(
        organizationId: string,
        requestBody: Role,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/roles/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this role.
     * @param organizationId
     * @returns Role
     * @throws ApiError
     */
    public rolesRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/roles/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this role.
     * @param organizationId
     * @param requestBody
     * @returns Role
     * @throws ApiError
     */
    public rolesUpdate(
        id: string,
        organizationId: string,
        requestBody: Role,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/roles/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this role.
     * @param organizationId
     * @param requestBody
     * @returns Role
     * @throws ApiError
     */
    public rolesPartialUpdate(
        id: string,
        organizationId: string,
        requestBody?: PatchedRole,
    ): CancelablePromise<Role> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/roles/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this role.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public rolesDestroy(
        id: string,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/roles/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @param roleId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedRoleMembershipList
     * @throws ApiError
     */
    public rolesRoleMembershipsList(
        organizationId: string,
        roleId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedRoleMembershipList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/roles/{role_id}/role_memberships/',
            path: {
                'organization_id': organizationId,
                'role_id': roleId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param organizationId
     * @param roleId
     * @param requestBody
     * @returns RoleMembership
     * @throws ApiError
     */
    public rolesRoleMembershipsCreate(
        organizationId: string,
        roleId: string,
        requestBody: RoleMembership,
    ): CancelablePromise<RoleMembership> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/roles/{role_id}/role_memberships/',
            path: {
                'organization_id': organizationId,
                'role_id': roleId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this role membership.
     * @param organizationId
     * @param roleId
     * @returns void
     * @throws ApiError
     */
    public rolesRoleMembershipsDestroy(
        id: string,
        organizationId: string,
        roleId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/roles/{role_id}/role_memberships/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
                'role_id': roleId,
            },
        });
    }
}
