/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { RevenueAnalyticsBreakdown } from './RevenueAnalyticsBreakdown';
import type { RevenueAnalyticsMetricsQueryResponse } from './RevenueAnalyticsMetricsQueryResponse';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { SimpleIntervalType } from './SimpleIntervalType';
export type RevenueAnalyticsMetricsQuery = {
    breakdown: Array<RevenueAnalyticsBreakdown>;
    dateRange?: DateRange | null;
    interval: SimpleIntervalType;
    kind?: RevenueAnalyticsMetricsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    properties: Array<RevenueAnalyticsPropertyFilter>;
    response?: RevenueAnalyticsMetricsQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace RevenueAnalyticsMetricsQuery {
    export enum kind {
        REVENUE_ANALYTICS_METRICS_QUERY = 'RevenueAnalyticsMetricsQuery',
    }
}

