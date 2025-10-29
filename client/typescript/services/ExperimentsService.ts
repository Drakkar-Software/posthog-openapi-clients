/* generated using openapi-typescript-codegen -- do not edit */
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
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
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
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public experimentsCreateExposureCohortForExperimentCreate(
        id: number,
        projectId: string,
        requestBody: Experiment,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/experiments/{id}/create_exposure_cohort_for_experiment/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public experimentsDuplicateCreate(
        id: number,
        projectId: string,
        requestBody: Experiment,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/experiments/{id}/duplicate/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create a recalculation request for experiment timeseries data.
     *
     * Request body:
     * - metric (required): The full metric object to recalculate
     * - fingerprint (required): The fingerprint of the metric configuration
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public experimentsRecalculateTimeseriesCreate(
        id: number,
        projectId: string,
        requestBody: Experiment,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/experiments/{id}/recalculate_timeseries/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve timeseries results for a specific experiment-metric combination.
     * Aggregates daily results into a timeseries format for frontend compatibility.
     *
     * Query parameters:
     * - metric_uuid (required): The UUID of the metric to retrieve results for
     * - fingerprint (required): The fingerprint of the metric configuration
     * @param id A unique integer value identifying this experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public experimentsTimeseriesResultsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/{id}/timeseries_results/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Returns a paginated list of feature flags eligible for use in experiments.
     *
     * Eligible flags must:
     * - Be multivariate with at least 2 variants
     * - Have "control" as the first variant key
     *
     * Query parameters:
     * - search: Filter by flag key or name (case insensitive)
     * - limit: Number of results per page (default: 20)
     * - offset: Pagination offset (default: 0)
     * - active: Filter by active status ("true" or "false")
     * - created_by_id: Filter by creator user ID
     * - order: Sort order field
     * - evaluation_runtime: Filter by evaluation runtime
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public experimentsEligibleFeatureFlagsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/eligible_feature_flags/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public experimentsRequiresFlagImplementationRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiments/requires_flag_implementation/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
