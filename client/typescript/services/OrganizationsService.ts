/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExport } from '../models/BatchExport';
import type { Organization } from '../models/Organization';
import type { OrganizationDomain } from '../models/OrganizationDomain';
import type { OrganizationInvite } from '../models/OrganizationInvite';
import type { OrganizationMember } from '../models/OrganizationMember';
import type { PaginatedBatchExportList } from '../models/PaginatedBatchExportList';
import type { PaginatedOrganizationDomainList } from '../models/PaginatedOrganizationDomainList';
import type { PaginatedOrganizationInviteList } from '../models/PaginatedOrganizationInviteList';
import type { PaginatedOrganizationList } from '../models/PaginatedOrganizationList';
import type { PaginatedOrganizationMemberList } from '../models/PaginatedOrganizationMemberList';
import type { PaginatedProjectBackwardCompatBasicList } from '../models/PaginatedProjectBackwardCompatBasicList';
import type { PaginatedProxyRecordList } from '../models/PaginatedProxyRecordList';
import type { PaginatedRoleList } from '../models/PaginatedRoleList';
import type { PaginatedRoleMembershipList } from '../models/PaginatedRoleMembershipList';
import type { PatchedBatchExport } from '../models/PatchedBatchExport';
import type { PatchedOrganization } from '../models/PatchedOrganization';
import type { PatchedOrganizationDomain } from '../models/PatchedOrganizationDomain';
import type { PatchedOrganizationMember } from '../models/PatchedOrganizationMember';
import type { PatchedProjectBackwardCompat } from '../models/PatchedProjectBackwardCompat';
import type { PatchedProxyRecord } from '../models/PatchedProxyRecord';
import type { PatchedRole } from '../models/PatchedRole';
import type { ProjectBackwardCompat } from '../models/ProjectBackwardCompat';
import type { ProxyRecord } from '../models/ProxyRecord';
import type { Role } from '../models/Role';
import type { RoleMembership } from '../models/RoleMembership';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OrganizationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationList
     * @throws ApiError
     */
    public list(
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param requestBody
     * @returns Organization
     * @throws ApiError
     */
    public create(
        requestBody: Organization,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this organization.
     * @returns Organization
     * @throws ApiError
     */
    public retrieve(
        id: string,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id A UUID string identifying this organization.
     * @param requestBody
     * @returns Organization
     * @throws ApiError
     */
    public update(
        id: string,
        requestBody: Organization,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this organization.
     * @param requestBody
     * @returns Organization
     * @throws ApiError
     */
    public partialUpdate(
        id: string,
        requestBody?: PatchedOrganization,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this organization.
     * @returns void
     * @throws ApiError
     */
    public destroy(
        id: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Trigger environments rollback migration for users previously on multi-environment projects.
     * The request data should be a mapping of source environment IDs to target environment IDs.
     * Example: { "2": 2, "116911": 2, "99346": 99346, "140256": 99346 }
     * @param id A UUID string identifying this organization.
     * @param requestBody
     * @returns Organization
     * @throws ApiError
     */
    public environmentsRollbackCreate(
        id: string,
        requestBody: Organization,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{id}/environments_rollback/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportList
     * @throws ApiError
     */
    public batchExportsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/batch_exports/',
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
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsCreate(
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUpdate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPartialUpdate(
        id: string,
        organizationId: string,
        requestBody?: PatchedBatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public batchExportsDestroy(
        id: string,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Trigger a backfill for a BatchExport.
     *
     * Note: This endpoint is deprecated. Please use POST /batch_exports/<id>/backfills/ instead.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsBackfillCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/backfill/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsLogsRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/logs/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsPauseCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/pause/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsRunTestStepCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/run_test_step/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unpause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsUnpauseCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/unpause/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsRunTestStepNewCreate(
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/run_test_step_new/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsTestRetrieve(
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/batch_exports/test/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
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
     * @returns any No response body
     * @throws ApiError
     */
    public domainsVerifyCreate(
        id: string,
        organizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<any> {
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
     * @returns any No response body
     * @throws ApiError
     */
    public invitesBulkCreate(
        organizationId: string,
        requestBody: OrganizationInvite,
    ): CancelablePromise<any> {
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
    /**
     * @param organizationId
     * @param userUuid
     * @returns OrganizationMember
     * @throws ApiError
     */
    public membersScopedApiKeysRetrieve(
        organizationId: string,
        userUuid: string,
    ): CancelablePromise<OrganizationMember> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/members/{user__uuid}/scoped_api_keys/',
            path: {
                'organization_id': organizationId,
                'user__uuid': userUuid,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedProjectBackwardCompatBasicList
     * @throws ApiError
     */
    public list2(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedProjectBackwardCompatBasicList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/',
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
     * Projects for the current organization.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public create2(
        organizationId: string,
        requestBody?: ProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/projects/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public retrieve2(
        id: number,
        organizationId: string,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public update2(
        id: number,
        organizationId: string,
        requestBody?: ProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public partialUpdate2(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public destroy2(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public activityRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/{id}/activity/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public addProductIntentPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/add_product_intent/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public changeOrganizationCreate(
        id: number,
        organizationId: string,
        requestBody?: ProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/projects/{id}/change_organization/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public completeProductOnboardingPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/complete_product_onboarding/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public deleteSecretTokenBackupPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/delete_secret_token_backup/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public isGeneratingDemoDataRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/{id}/is_generating_demo_data/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public resetTokenPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/reset_token/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public rotateSecretTokenPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/rotate_secret_token/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedProxyRecordList
     * @throws ApiError
     */
    public proxyRecordsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedProxyRecordList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/proxy_records/',
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
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsCreate(
        organizationId: string,
        requestBody: ProxyRecord,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/proxy_records/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param organizationId
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id
     * @param organizationId
     * @param requestBody
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsUpdate(
        id: string,
        organizationId: string,
        requestBody: ProxyRecord,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param organizationId
     * @param requestBody
     * @returns ProxyRecord
     * @throws ApiError
     */
    public proxyRecordsPartialUpdate(
        id: string,
        organizationId: string,
        requestBody?: PatchedProxyRecord,
    ): CancelablePromise<ProxyRecord> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public proxyRecordsDestroy(
        id: string,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/proxy_records/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
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
