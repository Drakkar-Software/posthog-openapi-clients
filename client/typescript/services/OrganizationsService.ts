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
import type { PaginatedPluginList } from '../models/PaginatedPluginList';
import type { PaginatedRoleList } from '../models/PaginatedRoleList';
import type { PaginatedRoleMembershipList } from '../models/PaginatedRoleMembershipList';
import type { PaginatedTeamBasicList } from '../models/PaginatedTeamBasicList';
import type { PatchedBatchExport } from '../models/PatchedBatchExport';
import type { PatchedOrganization } from '../models/PatchedOrganization';
import type { PatchedOrganizationDomain } from '../models/PatchedOrganizationDomain';
import type { PatchedOrganizationMember } from '../models/PatchedOrganizationMember';
import type { PatchedPlugin } from '../models/PatchedPlugin';
import type { PatchedRole } from '../models/PatchedRole';
import type { PatchedTeam } from '../models/PatchedTeam';
import type { Plugin } from '../models/Plugin';
import type { Role } from '../models/Role';
import type { RoleMembership } from '../models/RoleMembership';
import type { Team } from '../models/Team';
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
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsBackfillCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
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
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPauseCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
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
     * Unpause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUnpauseCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
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
     * @returns OrganizationDomain
     * @throws ApiError
     */
    public domainsVerifyCreate(
        id: string,
        organizationId: string,
        requestBody: OrganizationDomain,
    ): CancelablePromise<OrganizationDomain> {
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
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineDestinationsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_destinations/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineDestinationsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/check_for_updates/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/update_source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_destinations/{id}/upgrade/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/activity/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/exports_unsubscribe_configs/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/repository/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineDestinationsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_destinations/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineFrontendAppsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineFrontendAppsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/check_for_updates/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/update_source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/upgrade/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/activity/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/exports_unsubscribe_configs/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/repository/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineFrontendAppsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_frontend_apps/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineImportAppsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineImportAppsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/check_for_updates/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/update_source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/{id}/upgrade/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/activity/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/exports_unsubscribe_configs/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/repository/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineImportAppsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_import_apps/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pipelineTransformationsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_transformations/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public pipelineTransformationsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/check_for_updates/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/update_source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/pipeline_transformations/{id}/upgrade/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/activity/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/exports_unsubscribe_configs/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/repository/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pipelineTransformationsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/pipeline_transformations/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginList
     * @throws ApiError
     */
    public pluginsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsCreate(
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/plugins/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUpdate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public pluginsDestroy(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/plugins/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsCheckForUpdatesRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/{id}/check_for_updates/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsSourceRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/{id}/source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUpdateSourcePartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedPlugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/plugins/{id}/update_source/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this plugin.
     * @param organizationId
     * @param requestBody
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUpgradeCreate(
        id: number,
        organizationId: string,
        requestBody?: Plugin,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/plugins/{id}/upgrade/',
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
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsActivityRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/activity/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsExportsUnsubscribeConfigsRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/exports_unsubscribe_configs/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsRepositoryRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/repository/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param organizationId
     * @returns Plugin
     * @throws ApiError
     */
    public pluginsUnusedRetrieve(
        organizationId: string,
    ): CancelablePromise<Plugin> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/plugins/unused/',
            path: {
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedTeamBasicList
     * @throws ApiError
     */
    public list2(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedTeamBasicList> {
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
     * @returns Team
     * @throws ApiError
     */
    public create2(
        organizationId: string,
        requestBody?: Team,
    ): CancelablePromise<Team> {
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
     * @param id A unique integer value identifying this team.
     * @param organizationId
     * @returns Team
     * @throws ApiError
     */
    public retrieve2(
        id: number,
        organizationId: string,
    ): CancelablePromise<Team> {
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
     * @param id A unique integer value identifying this team.
     * @param organizationId
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public update2(
        id: number,
        organizationId: string,
        requestBody?: Team,
    ): CancelablePromise<Team> {
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
     * @param id A unique integer value identifying this team.
     * @param organizationId
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public partialUpdate2(
        id: number,
        organizationId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<Team> {
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
     * @param id A unique integer value identifying this team.
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
     * @param id A unique integer value identifying this team.
     * @param organizationId
     * @returns Team
     * @throws ApiError
     */
    public activityRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Team> {
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
     * @param id A unique integer value identifying this team.
     * @param organizationId
     * @returns Team
     * @throws ApiError
     */
    public isGeneratingDemoDataRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<Team> {
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
     * @param id A unique integer value identifying this team.
     * @param organizationId
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public resetTokenPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<Team> {
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
