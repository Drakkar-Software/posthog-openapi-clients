/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatasetItem } from '../models/DatasetItem';
import type { PaginatedDatasetItemList } from '../models/PaginatedDatasetItemList';
import type { PatchedDatasetItem } from '../models/PatchedDatasetItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DatasetItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param dataset Filter by dataset ID
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDatasetItemList
     * @throws ApiError
     */
    public datasetItemsList(
        projectId: string,
        dataset?: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDatasetItemList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/dataset_items/',
            path: {
                'project_id': projectId,
            },
            query: {
                'dataset': dataset,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DatasetItem
     * @throws ApiError
     */
    public datasetItemsCreate(
        projectId: string,
        requestBody: DatasetItem,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/dataset_items/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DatasetItem
     * @throws ApiError
     */
    public datasetItemsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/dataset_items/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DatasetItem
     * @throws ApiError
     */
    public datasetItemsUpdate(
        id: string,
        projectId: string,
        requestBody: DatasetItem,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/dataset_items/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DatasetItem
     * @throws ApiError
     */
    public datasetItemsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedDatasetItem,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/dataset_items/{id}/',
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
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public datasetItemsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/dataset_items/{id}/',
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
