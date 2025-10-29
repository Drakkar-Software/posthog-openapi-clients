/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentSavedMetric } from '../models/ExperimentSavedMetric';
import type { PaginatedExperimentSavedMetricList } from '../models/PaginatedExperimentSavedMetricList';
import type { PatchedExperimentSavedMetric } from '../models/PatchedExperimentSavedMetric';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExperimentSavedMetricsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedExperimentSavedMetricList
     * @throws ApiError
     */
    public experimentSavedMetricsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedExperimentSavedMetricList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiment_saved_metrics/',
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
     * @returns ExperimentSavedMetric
     * @throws ApiError
     */
    public experimentSavedMetricsCreate(
        projectId: string,
        requestBody: ExperimentSavedMetric,
    ): CancelablePromise<ExperimentSavedMetric> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/experiment_saved_metrics/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this experiment saved metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExperimentSavedMetric
     * @throws ApiError
     */
    public experimentSavedMetricsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExperimentSavedMetric> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/experiment_saved_metrics/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this experiment saved metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExperimentSavedMetric
     * @throws ApiError
     */
    public experimentSavedMetricsUpdate(
        id: number,
        projectId: string,
        requestBody: ExperimentSavedMetric,
    ): CancelablePromise<ExperimentSavedMetric> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/experiment_saved_metrics/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this experiment saved metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExperimentSavedMetric
     * @throws ApiError
     */
    public experimentSavedMetricsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedExperimentSavedMetric,
    ): CancelablePromise<ExperimentSavedMetric> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/experiment_saved_metrics/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this experiment saved metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public experimentSavedMetricsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/experiment_saved_metrics/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
