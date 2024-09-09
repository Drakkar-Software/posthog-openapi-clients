/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EarlyAccessFeature } from '../models/EarlyAccessFeature';
import type { EarlyAccessFeatureSerializerCreateOnly } from '../models/EarlyAccessFeatureSerializerCreateOnly';
import type { PaginatedEarlyAccessFeatureList } from '../models/PaginatedEarlyAccessFeatureList';
import type { PatchedEarlyAccessFeature } from '../models/PatchedEarlyAccessFeature';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EarlyAccessFeatureService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedEarlyAccessFeatureList
     * @throws ApiError
     */
    public earlyAccessFeatureList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedEarlyAccessFeatureList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/early_access_feature/',
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
     * @returns EarlyAccessFeatureSerializerCreateOnly
     * @throws ApiError
     */
    public earlyAccessFeatureCreate(
        projectId: string,
        requestBody: EarlyAccessFeatureSerializerCreateOnly,
    ): CancelablePromise<EarlyAccessFeatureSerializerCreateOnly> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/early_access_feature/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this early access feature.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns EarlyAccessFeature
     * @throws ApiError
     */
    public earlyAccessFeatureRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<EarlyAccessFeature> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/early_access_feature/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this early access feature.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns EarlyAccessFeature
     * @throws ApiError
     */
    public earlyAccessFeatureUpdate(
        id: string,
        projectId: string,
        requestBody: EarlyAccessFeature,
    ): CancelablePromise<EarlyAccessFeature> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/early_access_feature/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this early access feature.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns EarlyAccessFeature
     * @throws ApiError
     */
    public earlyAccessFeaturePartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedEarlyAccessFeature,
    ): CancelablePromise<EarlyAccessFeature> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/early_access_feature/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this early access feature.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public earlyAccessFeatureDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/early_access_feature/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
