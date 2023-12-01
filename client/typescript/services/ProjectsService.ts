/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTeamBasicList } from '../models/PaginatedTeamBasicList';
import type { PatchedTeam } from '../models/PatchedTeam';
import type { Team } from '../models/Team';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectsService {

    /**
     * Projects for the current organization.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedTeamBasicList
     * @throws ApiError
     */
    public static list(
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedTeamBasicList> {
        return __request(OpenAPI, {
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
    public static create(
        requestBody?: Team,
    ): CancelablePromise<Team> {
        return __request(OpenAPI, {
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
    public static retrieve(
        id: number,
    ): CancelablePromise<Team> {
        return __request(OpenAPI, {
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
    public static update(
        id: number,
        requestBody?: Team,
    ): CancelablePromise<Team> {
        return __request(OpenAPI, {
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
    public static partialUpdate(
        id: number,
        requestBody?: PatchedTeam,
    ): CancelablePromise<Team> {
        return __request(OpenAPI, {
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
    public static destroy(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
