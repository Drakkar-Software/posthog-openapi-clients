/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExport } from '../models/BatchExport';
import type { Organization } from '../models/Organization';
import type { OrganizationDomain } from '../models/OrganizationDomain';
import type { OrganizationInvite } from '../models/OrganizationInvite';
import type { OrganizationMember } from '../models/OrganizationMember';
import type { OrganizationResourceAccess } from '../models/OrganizationResourceAccess';
import type { PaginatedBatchExportList } from '../models/PaginatedBatchExportList';
import type { PaginatedOrganizationDomainList } from '../models/PaginatedOrganizationDomainList';
import type { PaginatedOrganizationInviteList } from '../models/PaginatedOrganizationInviteList';
import type { PaginatedOrganizationList } from '../models/PaginatedOrganizationList';
import type { PaginatedOrganizationMemberList } from '../models/PaginatedOrganizationMemberList';
import type { PaginatedOrganizationResourceAccessList } from '../models/PaginatedOrganizationResourceAccessList';
import type { PaginatedPluginList } from '../models/PaginatedPluginList';
import type { PaginatedRoleList } from '../models/PaginatedRoleList';
import type { PaginatedRoleMembershipList } from '../models/PaginatedRoleMembershipList';
import type { PatchedBatchExport } from '../models/PatchedBatchExport';
import type { PatchedOrganization } from '../models/PatchedOrganization';
import type { PatchedOrganizationDomain } from '../models/PatchedOrganizationDomain';
import type { PatchedOrganizationMember } from '../models/PatchedOrganizationMember';
import type { PatchedOrganizationResourceAccess } from '../models/PatchedOrganizationResourceAccess';
import type { PatchedPlugin } from '../models/PatchedPlugin';
import type { PatchedRole } from '../models/PatchedRole';
import type { Plugin } from '../models/Plugin';
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
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportList
     * @throws ApiError
     */
    public batchExportsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/',
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
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsCreate(
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsRetrieve(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPartialUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody?: PatchedBatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public batchExportsDestroy(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * Trigger a backfill for a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsBackfillCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/backfill/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPauseCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/pause/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unpause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUnpauseCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/unpause/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationDomainList
     * @throws ApiError
     */
    public domainsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationDomainList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/',
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
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsCreate(
        parentLookupOrganizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsRetrieve(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsPartialUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody?: PatchedOrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public domainsDestroy(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this domain.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsVerifyCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/domains/{id}/verify/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all feature flags for a given organization and key.
     * @param featureFlagKey
     * @param parentLookupOrganizationId
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsRetrieve(
        featureFlagKey: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/feature_flags/{feature_flag_key}/',
            path: {
                'feature_flag_key': featureFlagKey,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * Retrieves all feature flags for a given organization and key.
     * @param parentLookupOrganizationId
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsCopyFlagsCreate(
        parentLookupOrganizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/feature_flags/copy_flags/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
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
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineDestinationsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsCreate(
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineDestinationsDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsCheckForUpdatesRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/check_for_updates/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsSourceRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpdateSourcePartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/update_source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpgradeCreate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/{id}/upgrade/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsActivityRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/activity/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsExportsUnsubscribeConfigsRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/exports_unsubscribe_configs/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsRepositoryRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/repository/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUnusedRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_destinations/unused/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineTransformationsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsCreate(
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineTransformationsDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsCheckForUpdatesRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/check_for_updates/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsSourceRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpdateSourcePartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/update_source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpgradeCreate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/{id}/upgrade/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsActivityRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/activity/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsExportsUnsubscribeConfigsRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/exports_unsubscribe_configs/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsRepositoryRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/repository/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUnusedRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/pipeline_transformations/unused/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pluginsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsCreate(
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public pluginsDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsCheckForUpdatesRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/check_for_updates/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsSourceRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUpdateSourcePartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/update_source/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUpgradeCreate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/{id}/upgrade/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsActivityRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/activity/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsExportsUnsubscribeConfigsRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/exports_unsubscribe_configs/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsRepositoryRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/repository/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUnusedRetrieve(
        parentLookupOrganizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/plugins/unused/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedOrganizationResourceAccessList
     * @throws ApiError
     */
    public resourceAccessList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedOrganizationResourceAccessList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/',
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
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public resourceAccessCreate(
        parentLookupOrganizationId: string,
        requestBody: OrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public resourceAccessRetrieve(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public resourceAccessUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody: OrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns OrganizationResourceAccess
     * @throws ApiError
     */
    public resourceAccessPartialUpdate(
        id: number,
        parentLookupOrganizationId: string,
        requestBody?: PatchedOrganizationResourceAccess,
    ): CancelablePromise<OrganizationResourceAccess> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this organization resource access.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public resourceAccessDestroy(
        id: number,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/resource_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
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
