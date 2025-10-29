/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { RevenueAnalyticsOverviewQueryResponse } from './RevenueAnalyticsOverviewQueryResponse';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
export type RevenueAnalyticsOverviewQuery = {
    dateRange?: DateRange | null;
    kind?: RevenueAnalyticsOverviewQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    properties: Array<RevenueAnalyticsPropertyFilter>;
    response?: RevenueAnalyticsOverviewQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace RevenueAnalyticsOverviewQuery {
    export enum kind {
        REVENUE_ANALYTICS_OVERVIEW_QUERY = 'RevenueAnalyticsOverviewQuery',
    }
}

