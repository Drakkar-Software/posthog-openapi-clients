/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EarlyAccessFeature } from '../models/EarlyAccessFeature';
import type { EarlyAccessFeatureSerializerCreateOnly } from '../models/EarlyAccessFeatureSerializerCreateOnly';
import type { PaginatedEarlyAccessFeatureList } from '../models/PaginatedEarlyAccessFeatureList';
import type { PatchedEarlyAccessFeature } from '../models/PatchedEarlyAccessFeature';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EarlyAccessFeatureService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedEarlyAccessFeatureList
     * @throws ApiError
     */
    public static earlyAccessFeatureList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedEarlyAccessFeatureList> {
        return __request(OpenAPI, {
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
    public static earlyAccessFeatureCreate(
        projectId: string,
        requestBody: EarlyAccessFeatureSerializerCreateOnly,
    ): CancelablePromise<EarlyAccessFeatureSerializerCreateOnly> {
        return __request(OpenAPI, {
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
    public static earlyAccessFeatureRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<EarlyAccessFeature> {
        return __request(OpenAPI, {
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
    public static earlyAccessFeatureUpdate(
        id: string,
        projectId: string,
        requestBody: EarlyAccessFeature,
    ): CancelablePromise<EarlyAccessFeature> {
        return __request(OpenAPI, {
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
    public static earlyAccessFeaturePartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedEarlyAccessFeature,
    ): CancelablePromise<EarlyAccessFeature> {
        return __request(OpenAPI, {
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
    public static earlyAccessFeatureDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/early_access_feature/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
