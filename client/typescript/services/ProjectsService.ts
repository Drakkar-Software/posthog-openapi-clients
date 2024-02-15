/* generated using openapi-typescript-codegen -- do no edit */
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
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedTeamBasicList
     * @throws ApiError
     */
    public list2(
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedTeamBasicList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public create2(
        requestBody?: Team,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this team.
     * @returns Team
     * @throws ApiError
     */
    public retrieve2(
        id: number,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this team.
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public update2(
        id: number,
        requestBody?: Team,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this team.
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public partialUpdate2(
        id: number,
        requestBody?: PatchedTeam,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{id}/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this team.
     * @returns void
     * @throws ApiError
     */
    public destroy2(
        id: number,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
