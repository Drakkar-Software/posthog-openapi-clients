/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Experiment } from '../models/Experiment';
import type { PaginatedExperimentList } from '../models/PaginatedExperimentList';
import type { PatchedExperiment } from '../models/PatchedExperiment';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ExperimentsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedExperimentList
     * @throws ApiError
     */
    public experimentsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedExperimentList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/',
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
     * @returns Experiment
     * @throws ApiError
     */
    public experimentsCreate(
        projectId: string,
        requestBody: Experiment,
    ): CancelablePromise<Experiment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/experiments/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Experiment
     * @throws ApiError
     */
    public experimentsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Experiment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Experiment
     * @throws ApiError
     */
    public experimentsUpdate(
        id: number,
        projectId: string,
        requestBody: Experiment,
    ): CancelablePromise<Experiment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Experiment
     * @throws ApiError
     */
    public experimentsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedExperiment,
    ): CancelablePromise<Experiment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public experimentsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Experiment
     * @throws ApiError
     */
    public experimentsResultsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Experiment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/{id}/results/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Experiment
     * @throws ApiError
     */
    public experimentsSecondaryResultsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Experiment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/{id}/secondary_results/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Experiment
     * @throws ApiError
     */
    public experimentsRequiresFlagImplementationRetrieve(
        projectId: string,
    ): CancelablePromise<Experiment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/requires_flag_implementation/',
            path: {
                'project_id': projectId,
            },
        });
    }

}
