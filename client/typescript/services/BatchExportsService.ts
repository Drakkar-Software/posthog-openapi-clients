/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExport } from '../models/BatchExport';
import type { BatchExportRun } from '../models/BatchExportRun';
import type { PaginatedBatchExportList } from '../models/PaginatedBatchExportList';
import type { PaginatedBatchExportLogEntryList } from '../models/PaginatedBatchExportLogEntryList';
import type { PaginatedBatchExportRunList } from '../models/PaginatedBatchExportRunList';
import type { PatchedBatchExport } from '../models/PatchedBatchExport';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BatchExportsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param parentLookupOrganizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportList
     * @throws ApiError
     */
    public batchExportsList(
        parentLookupOrganizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsCreate(
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsRetrieve(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPartialUpdate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody?: PatchedBatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @returns void
     * @throws ApiError
     */
    public batchExportsDestroy(
        id: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }
    /**
     * Trigger a backfill for a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsBackfillCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/backfill/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPauseCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/pause/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unpause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param parentLookupOrganizationId
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUnpauseCreate(
        id: string,
        parentLookupOrganizationId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/batch_exports/{id}/unpause/',
            path: {
                'id': id,
                'parent_lookup_organization_id': parentLookupOrganizationId,
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
     * @param parentLookupBatchExportId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportLogEntryList
     * @throws ApiError
     */
    public batchExportsLogsList(
        parentLookupBatchExportId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportLogEntryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{parent_lookup_batch_export_id}/logs/',
            path: {
                'parent_lookup_batch_export_id': parentLookupBatchExportId,
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get all BatchExportRuns for a BatchExport.
     * @param parentLookupBatchExportId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param cursor The pagination cursor value.
     * @returns PaginatedBatchExportRunList
     * @throws ApiError
     */
    public batchExportsRunsList(
        parentLookupBatchExportId: string,
        projectId: string,
        cursor?: string,
    ): CancelablePromise<PaginatedBatchExportRunList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{parent_lookup_batch_export_id}/runs/',
            path: {
                'parent_lookup_batch_export_id': parentLookupBatchExportId,
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
            },
        });
    }
    /**
     * @param parentLookupBatchExportId
     * @param parentLookupRunId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportLogEntryList
     * @throws ApiError
     */
    public batchExportsRunsLogsList(
        parentLookupBatchExportId: string,
        parentLookupRunId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportLogEntryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{parent_lookup_batch_export_id}/runs/{parent_lookup_run_id}/logs/',
            path: {
                'parent_lookup_batch_export_id': parentLookupBatchExportId,
                'parent_lookup_run_id': parentLookupRunId,
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param id A UUID string identifying this batch export run.
     * @param parentLookupBatchExportId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns BatchExportRun
     * @throws ApiError
     */
    public batchExportsRunsRetrieve(
        id: string,
        parentLookupBatchExportId: string,
        projectId: string,
    ): CancelablePromise<BatchExportRun> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/batch_exports/{parent_lookup_batch_export_id}/runs/{id}/',
            path: {
                'id': id,
                'parent_lookup_batch_export_id': parentLookupBatchExportId,
                'project_id': projectId,
            },
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
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsBackfillCreate2(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
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
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsPauseCreate2(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
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
     * @returns BatchExport
     * @throws ApiError
     */
    public batchExportsUnpauseCreate2(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
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
