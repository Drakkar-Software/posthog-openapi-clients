/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryRequest } from '../models/QueryRequest';
import type { QueryResponseAlternative } from '../models/QueryResponseAlternative';
import type { QueryStatusResponse } from '../models/QueryStatusResponse';
import type { QueryUpgradeRequest } from '../models/QueryUpgradeRequest';
import type { QueryUpgradeResponse } from '../models/QueryUpgradeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns QueryResponseAlternative
     * @throws ApiError
     */
    public queryCreate(
        projectId: string,
        requestBody: QueryRequest,
    ): CancelablePromise<QueryResponseAlternative> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/query/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * (Experimental)
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns QueryStatusResponse
     * @throws ApiError
     */
    public queryRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<QueryStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/query/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * (Experimental)
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public queryDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/query/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Get query log details from query_log_archive table for a specific query_id, the query must have been issued in last 24 hours.
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any
     * @throws ApiError
     */
    public queryLogRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/query/{id}/log/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public queryCheckAuthForAsyncCreate(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/query/check_auth_for_async/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public queryDraftSqlRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/query/draft_sql/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Upgrades a query without executing it. Returns a query with all nodes migrated to the latest version.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns QueryUpgradeResponse
     * @throws ApiError
     */
    public queryUpgradeCreate(
        projectId: string,
        requestBody: QueryUpgradeRequest,
    ): CancelablePromise<QueryUpgradeResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/query/upgrade/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
