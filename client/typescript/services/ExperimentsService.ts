/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Experiment } from '../models/Experiment';
import type { PaginatedExperimentList } from '../models/PaginatedExperimentList';
import type { PatchedExperiment } from '../models/PatchedExperiment';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExperimentsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedExperimentList
     * @throws ApiError
     */
    public static experimentsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedExperimentList> {
        return __request(OpenAPI, {
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
    public static experimentsCreate(
        projectId: string,
        requestBody: Experiment,
    ): CancelablePromise<Experiment> {
        return __request(OpenAPI, {
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
    public static experimentsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Experiment> {
        return __request(OpenAPI, {
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
    public static experimentsUpdate(
        id: number,
        projectId: string,
        requestBody: Experiment,
    ): CancelablePromise<Experiment> {
        return __request(OpenAPI, {
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
    public static experimentsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedExperiment,
    ): CancelablePromise<Experiment> {
        return __request(OpenAPI, {
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
    public static experimentsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static experimentsResultsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Experiment> {
        return __request(OpenAPI, {
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
    public static experimentsSecondaryResultsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Experiment> {
        return __request(OpenAPI, {
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
    public static experimentsRequiresFlagImplementationRetrieve(
        projectId: string,
    ): CancelablePromise<Experiment> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/requires_flag_implementation/',
            path: {
                'project_id': projectId,
            },
        });
    }

}
