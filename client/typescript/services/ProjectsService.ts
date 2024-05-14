/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTeamBasicList } from '../models/PaginatedTeamBasicList';
import type { PatchedTeam } from '../models/PatchedTeam';
import type { Team } from '../models/Team';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
     * @param id A unique integer value identifying this team (soon to be environment).
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
     * @param id A unique integer value identifying this team (soon to be environment).
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
     * @param id A unique integer value identifying this team (soon to be environment).
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
     * @param id A unique integer value identifying this team (soon to be environment).
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
     * @param id A unique integer value identifying this team (soon to be environment).
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
     * @param id A unique integer value identifying this team (soon to be environment).
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
     * @param id A unique integer value identifying this team (soon to be environment).
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
}
