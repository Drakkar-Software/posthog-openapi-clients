/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Funnel } from '../models/Funnel';
import type { FunnelStepsResults } from '../models/FunnelStepsResults';
import type { Insight } from '../models/Insight';
import type { PaginatedInsightList } from '../models/PaginatedInsightList';
import type { PatchedInsight } from '../models/PatchedInsight';
import type { SharingConfiguration } from '../models/SharingConfiguration';
import type { Trend } from '../models/Trend';
import type { TrendResults } from '../models/TrendResults';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class InsightsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param createdBy
     * @param format
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param refresh
     * Whether to refresh the retrieved insights and how aggressively. (The default `force_cache` value never refreshes.)
     * If an `_async` mode is chosen, this request kicks off a background query and returns immediately.
     * Background calculation can be tracked using the `query_status` response field.
     * @param shortId
     * @returns PaginatedInsightList
     * @throws ApiError
     */
    public insightsList(
        projectId: string,
        createdBy?: number,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        refresh: 'async' | 'blocking' | 'force_async' | 'force_blocking' | 'force_cache' | 'lazy_async' = 'force_cache',
        shortId?: string,
    ): CancelablePromise<PaginatedInsightList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/',
            path: {
                'project_id': projectId,
            },
            query: {
                'created_by': createdBy,
                'format': format,
                'limit': limit,
                'offset': offset,
                'refresh': refresh,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public insightsCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param insightId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public insightsSharingList(
        insightId: number,
        projectId: string,
    ): CancelablePromise<Array<SharingConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/{insight_id}/sharing/',
            path: {
                'insight_id': insightId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param fromDashboard
     * Only if loading an insight in the context of a dashboard: The relevant dashboard's ID.
     * When set, the specified dashboard's filters and date range override will be applied.
     * @param refresh
     * Whether to refresh the insight and how aggressively. (The default `force_cache` value never refreshes.)
     * If an `_async` mode is chosen, this request kicks off a background query and returns immediately.
     * Background calculation can be tracked using the `query_status` response field.
     * @returns Insight
     * @throws ApiError
     */
    public insightsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        fromDashboard?: number,
        refresh: 'async' | 'blocking' | 'force_async' | 'force_blocking' | 'force_cache' | 'lazy_async' = 'force_cache',
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
                'from_dashboard': fromDashboard,
                'refresh': refresh,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public insightsUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public insightsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: PatchedInsight,
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns void
     * @throws ApiError
     */
    public insightsDestroy(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsActivityRetrieve2(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public insightsViewedCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/{id}/viewed/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsActivityRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/activity/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public insightsCancelCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/cancel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsFunnelRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns FunnelStepsResults Note, if funnel_viz_type is set the response will be different.
     * @throws ApiError
     */
    public funnels(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Funnel,
    ): CancelablePromise<FunnelStepsResults> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsFunnelCorrelationRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public insightsFunnelCorrelationCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsMyLastViewedRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/my_last_viewed/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsPathRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/path/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public insightsPathCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/path/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsRetentionRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/retention/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public insightsRetentionCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/retention/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public insightsTimingCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/timing/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public insightsTrendRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/insights/trend/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns TrendResults
     * @throws ApiError
     */
    public trends(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Trend,
    ): CancelablePromise<TrendResults> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/insights/trend/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
