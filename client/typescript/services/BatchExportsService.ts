/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExport } from '../models/BatchExport';
import type { BatchExportRun } from '../models/BatchExportRun';
import type { PaginatedBatchExportList } from '../models/PaginatedBatchExportList';
import type { PaginatedBatchExportRunList } from '../models/PaginatedBatchExportRunList';
import type { PatchedBatchExport } from '../models/PatchedBatchExport';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BatchExportsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportList
     * @throws ApiError
     */
    public batchExportsList(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/batch_exports/',
            path: {
                'organization_id': organizationId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsCreate(
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUpdate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPartialUpdate(
        id: string,
        organizationId: string,
        requestBody?: PatchedBatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public batchExportsDestroy(
        id: string,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Trigger a backfill for a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsBackfillCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/backfill/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsLogsRetrieve(
        id: string,
        organizationId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/logs/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsPauseCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/pause/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unpause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param organizationId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsUnpauseCreate(
        id: string,
        organizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/batch_exports/{id}/unpause/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportList
     * @throws ApiError
     */
    public batchExportsList2(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/',
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
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsCreate2(
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/batch_exports/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param batchExportId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param cursor The pagination cursor value.
     * @param ordering Which field to use when ordering the results.
     * @returns PaginatedBatchExportRunList
     * @throws ApiError
     */
    public batchExportsRunsList(
        batchExportId: string,
        projectId: string,
        cursor?: string,
        ordering?: string,
    ): CancelablePromise<PaginatedBatchExportRunList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/',
            path: {
                'batch_export_id': batchExportId,
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
                'ordering': ordering,
            },
        });
    }
    /**
     * @param batchExportId
     * @param id A UUID string identifying this batch export run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns BatchExportRun
     * @throws ApiError
     */
    public batchExportsRunsRetrieve(
        batchExportId: string,
        id: string,
        projectId: string,
    ): CancelablePromise<BatchExportRun> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param batchExportId
     * @param id A UUID string identifying this batch export run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsRunsLogsRetrieve(
        batchExportId: string,
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/logs/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Retry a batch export run.
     *
     * We use the same underlying mechanism as when backfilling a batch export, as retrying
     * a run is the same as backfilling one run.
     * @param batchExportId
     * @param id A UUID string identifying this batch export run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsRunsRetryCreate(
        batchExportId: string,
        id: string,
        projectId: string,
        requestBody: BatchExportRun,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}/retry/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsRetrieve2(
        id: string,
        projectId: string,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUpdate2(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPartialUpdate2(
        id: string,
        projectId: string,
        requestBody?: PatchedBatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public batchExportsDestroy2(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Trigger a backfill for a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsBackfillCreate2(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/batch_exports/{id}/backfill/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsLogsRetrieve2(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{id}/logs/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsPauseCreate2(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/batch_exports/{id}/pause/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unpause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public batchExportsUnpauseCreate2(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/batch_exports/{id}/unpause/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
