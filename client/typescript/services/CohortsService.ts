/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cohort } from '../models/Cohort';
import type { PaginatedCohortList } from '../models/PaginatedCohortList';
import type { PatchedCohort } from '../models/PatchedCohort';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CohortsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedCohortList
     * @throws ApiError
     */
    public cohortsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedCohortList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/cohorts/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Cohort
     * @throws ApiError
     */
    public cohortsCreate(
        projectId: string,
        requestBody?: Cohort,
    ): CancelablePromise<Cohort> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/cohorts/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this cohort.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Cohort
     * @throws ApiError
     */
    public cohortsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Cohort> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/cohorts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this cohort.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Cohort
     * @throws ApiError
     */
    public cohortsUpdate(
        id: number,
        projectId: string,
        requestBody?: Cohort,
    ): CancelablePromise<Cohort> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/cohorts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this cohort.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Cohort
     * @throws ApiError
     */
    public cohortsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedCohort,
    ): CancelablePromise<Cohort> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/cohorts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this cohort.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public cohortsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/cohorts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this cohort.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public cohortsActivityRetrieve2(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/cohorts/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this cohort.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public cohortsDuplicateAsStaticCohortRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/cohorts/{id}/duplicate_as_static_cohort/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this cohort.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public cohortsPersonsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/cohorts/{id}/persons/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public cohortsActivityRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/cohorts/activity/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
