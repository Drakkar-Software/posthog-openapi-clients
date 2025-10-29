/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebAnalyticsBreakdownResponse } from '../models/WebAnalyticsBreakdownResponse';
import type { WebAnalyticsOverviewResponse } from '../models/WebAnalyticsOverviewResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WebAnalyticsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * This endpoint is in Concept state, please join the feature preview to try it out when it's ready. Get a breakdown by a property (e.g. browser, device type, country, etc.).
     * @param breakdownBy Property to break down by
     *
     * * `DeviceType` - DeviceType
     * * `Browser` - Browser
     * * `OS` - OS
     * * `Viewport` - Viewport
     * * `InitialReferringDomain` - InitialReferringDomain
     * * `InitialUTMSource` - InitialUTMSource
     * * `InitialUTMMedium` - InitialUTMMedium
     * * `InitialUTMCampaign` - InitialUTMCampaign
     * * `InitialUTMTerm` - InitialUTMTerm
     * * `InitialUTMContent` - InitialUTMContent
     * * `Country` - Country
     * * `Region` - Region
     * * `City` - City
     * * `InitialPage` - InitialPage
     * * `Page` - Page
     * * `ExitPage` - ExitPage
     * * `InitialChannelType` - InitialChannelType
     * @param dateFrom Start date for the query (format: YYYY-MM-DD)
     * @param dateTo End date for the query (format: YYYY-MM-DD)
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param applyPathCleaning Apply URL path cleaning
     * @param filterTestAccounts Filter out test accounts
     * @param host Host to filter by (e.g. example.com)
     * @param limit Number of results to return
     * @param offset Number of results to skip
     * @returns WebAnalyticsBreakdownResponse Get a breakdown of web analytics data by supported properties.
     * @throws ApiError
     */
    public webAnalyticsBreakdownRetrieve(
        breakdownBy: 'DeviceType' | 'Browser' | 'OS' | 'Viewport' | 'InitialReferringDomain' | 'InitialUTMSource' | 'InitialUTMMedium' | 'InitialUTMCampaign' | 'InitialUTMTerm' | 'InitialUTMContent' | 'Country' | 'Region' | 'City' | 'InitialPage' | 'Page' | 'ExitPage' | 'InitialChannelType',
        dateFrom: string,
        dateTo: string,
        projectId: string,
        applyPathCleaning: boolean = true,
        filterTestAccounts: boolean = true,
        host?: string | null,
        limit: number = 100,
        offset?: number,
    ): CancelablePromise<WebAnalyticsBreakdownResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/web_analytics/breakdown/',
            path: {
                'project_id': projectId,
            },
            query: {
                'apply_path_cleaning': applyPathCleaning,
                'breakdown_by': breakdownBy,
                'date_from': dateFrom,
                'date_to': dateTo,
                'filter_test_accounts': filterTestAccounts,
                'host': host,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * This endpoint is in Concept state, please join the feature preview to try it out when it's ready. Get an overview of web analytics data including visitors, views, sessions, bounce rate, and session duration.
     * @param dateFrom Start date for the query (format: YYYY-MM-DD)
     * @param dateTo End date for the query (format: YYYY-MM-DD)
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param filterTestAccounts Filter out test accounts
     * @param host Host to filter by (e.g. example.com)
     * @returns WebAnalyticsOverviewResponse Get simple overview metrics: visitors, views, sessions, bounce rate, session duration
     * @throws ApiError
     */
    public webAnalyticsOverviewRetrieve(
        dateFrom: string,
        dateTo: string,
        projectId: string,
        filterTestAccounts: boolean = true,
        host?: string | null,
    ): CancelablePromise<WebAnalyticsOverviewResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/web_analytics/overview/',
            path: {
                'project_id': projectId,
            },
            query: {
                'date_from': dateFrom,
                'date_to': dateTo,
                'filter_test_accounts': filterTestAccounts,
                'host': host,
            },
        });
    }
}
