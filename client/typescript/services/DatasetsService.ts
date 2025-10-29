/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dataset } from '../models/Dataset';
import type { PaginatedDatasetList } from '../models/PaginatedDatasetList';
import type { PatchedDataset } from '../models/PatchedDataset';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DatasetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param idIn Multiple values may be separated by commas.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param orderBy Ordering
     *
     * * `created_at` - Created At
     * * `-created_at` - Created At (descending)
     * * `updated_at` - Updated At
     * * `-updated_at` - Updated At (descending)
     * @param search Search in name, description, or metadata
     * @returns PaginatedDatasetList
     * @throws ApiError
     */
    public datasetsList(
        projectId: string,
        idIn?: Array<string>,
        limit?: number,
        offset?: number,
        orderBy?: Array<'-created_at' | '-updated_at' | 'created_at' | 'updated_at'>,
        search?: string,
    ): CancelablePromise<PaginatedDatasetList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/datasets/',
            path: {
                'project_id': projectId,
            },
            query: {
                'id__in': idIn,
                'limit': limit,
                'offset': offset,
                'order_by': orderBy,
                'search': search,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dataset
     * @throws ApiError
     */
    public datasetsCreate(
        projectId: string,
        requestBody: Dataset,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/datasets/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Dataset
     * @throws ApiError
     */
    public datasetsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/datasets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dataset
     * @throws ApiError
     */
    public datasetsUpdate(
        id: string,
        projectId: string,
        requestBody: Dataset,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/datasets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dataset
     * @throws ApiError
     */
    public datasetsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedDataset,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/datasets/{id}/',
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
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public datasetsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/datasets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
}
