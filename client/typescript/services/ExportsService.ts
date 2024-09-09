/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExportedAsset } from '../models/ExportedAsset';
import type { PaginatedExportedAssetList } from '../models/PaginatedExportedAssetList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExportsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedExportedAssetList
     * @throws ApiError
     */
    public exportsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedExportedAssetList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/exports/',
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
     * @returns ExportedAsset
     * @throws ApiError
     */
    public exportsCreate(
        projectId: string,
        requestBody: ExportedAsset,
    ): CancelablePromise<ExportedAsset> {
        return this.httpRequest.request({
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
    public exportsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExportedAsset> {
        return this.httpRequest.request({
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
     * @returns any No response body
     * @throws ApiError
     */
    public exportsContentRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/exports/{id}/content/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
