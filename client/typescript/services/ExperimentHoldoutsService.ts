/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentHoldout } from '../models/ExperimentHoldout';
import type { PaginatedExperimentHoldoutList } from '../models/PaginatedExperimentHoldoutList';
import type { PatchedExperimentHoldout } from '../models/PatchedExperimentHoldout';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExperimentHoldoutsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedExperimentHoldoutList
     * @throws ApiError
     */
    public experimentHoldoutsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedExperimentHoldoutList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiment_holdouts/',
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
     * @returns ExperimentHoldout
     * @throws ApiError
     */
    public experimentHoldoutsCreate(
        projectId: string,
        requestBody: ExperimentHoldout,
    ): CancelablePromise<ExperimentHoldout> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/experiment_holdouts/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this experiment holdout.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExperimentHoldout
     * @throws ApiError
     */
    public experimentHoldoutsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExperimentHoldout> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiment_holdouts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this experiment holdout.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExperimentHoldout
     * @throws ApiError
     */
    public experimentHoldoutsUpdate(
        id: number,
        projectId: string,
        requestBody: ExperimentHoldout,
    ): CancelablePromise<ExperimentHoldout> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/experiment_holdouts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this experiment holdout.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExperimentHoldout
     * @throws ApiError
     */
    public experimentHoldoutsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedExperimentHoldout,
    ): CancelablePromise<ExperimentHoldout> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/experiment_holdouts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this experiment holdout.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public experimentHoldoutsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/experiment_holdouts/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
