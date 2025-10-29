/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedWebExperimentsAPIList } from '../models/PaginatedWebExperimentsAPIList';
import type { PatchedWebExperimentsAPI } from '../models/PatchedWebExperimentsAPI';
import type { WebExperimentsAPI } from '../models/WebExperimentsAPI';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebExperimentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedWebExperimentsAPIList
     * @throws ApiError
     */
    public webExperimentsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedWebExperimentsAPIList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/web_experiments/',
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
     * @returns WebExperimentsAPI
     * @throws ApiError
     */
    public webExperimentsCreate(
        projectId: string,
        requestBody: WebExperimentsAPI,
    ): CancelablePromise<WebExperimentsAPI> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/web_experiments/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this web experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns WebExperimentsAPI
     * @throws ApiError
     */
    public webExperimentsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<WebExperimentsAPI> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/web_experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this web experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns WebExperimentsAPI
     * @throws ApiError
     */
    public webExperimentsUpdate(
        id: number,
        projectId: string,
        requestBody: WebExperimentsAPI,
    ): CancelablePromise<WebExperimentsAPI> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/web_experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this web experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns WebExperimentsAPI
     * @throws ApiError
     */
    public webExperimentsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedWebExperimentsAPI,
    ): CancelablePromise<WebExperimentsAPI> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/web_experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this web experiment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public webExperimentsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/web_experiments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
