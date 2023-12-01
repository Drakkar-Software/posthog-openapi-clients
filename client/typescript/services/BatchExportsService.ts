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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BatchExportsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportList
     * @throws ApiError
     */
    public static batchExportsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportList> {
        return __request(OpenAPI, {
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
    public static batchExportsCreate(
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return __request(OpenAPI, {
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
    public static batchExportsLogsList(
        parentLookupBatchExportId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportLogEntryList> {
        return __request(OpenAPI, {
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
    public static batchExportsRunsList(
        parentLookupBatchExportId: string,
        projectId: string,
        cursor?: string,
    ): CancelablePromise<PaginatedBatchExportRunList> {
        return __request(OpenAPI, {
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
    public static batchExportsRunsLogsList(
        parentLookupBatchExportId: string,
        parentLookupRunId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportLogEntryList> {
        return __request(OpenAPI, {
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
    public static batchExportsRunsRetrieve(
        id: string,
        parentLookupBatchExportId: string,
        projectId: string,
    ): CancelablePromise<BatchExportRun> {
        return __request(OpenAPI, {
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
    public static batchExportsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<BatchExport> {
        return __request(OpenAPI, {
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
    public static batchExportsUpdate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return __request(OpenAPI, {
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
    public static batchExportsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedBatchExport,
    ): CancelablePromise<BatchExport> {
        return __request(OpenAPI, {
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
    public static batchExportsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static batchExportsBackfillCreate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return __request(OpenAPI, {
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
    public static batchExportsPauseCreate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return __request(OpenAPI, {
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
    public static batchExportsUnpauseCreate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return __request(OpenAPI, {
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
