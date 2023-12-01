/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportedAsset } from '../models/ExportedAsset';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExportsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExportedAsset
     * @throws ApiError
     */
    public static exportsCreate(
        projectId: string,
        requestBody: ExportedAsset,
    ): CancelablePromise<ExportedAsset> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/exports/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this exported asset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExportedAsset
     * @throws ApiError
     */
    public static exportsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExportedAsset> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this exported asset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExportedAsset
     * @throws ApiError
     */
    public static exportsContentRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExportedAsset> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/exports/{id}/content/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

}
