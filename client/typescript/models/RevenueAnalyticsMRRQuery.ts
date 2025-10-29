/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { RevenueAnalyticsBreakdown } from './RevenueAnalyticsBreakdown';
import type { RevenueAnalyticsMRRQueryResponse } from './RevenueAnalyticsMRRQueryResponse';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { SimpleIntervalType } from './SimpleIntervalType';
export type RevenueAnalyticsMRRQuery = {
    breakdown: Array<RevenueAnalyticsBreakdown>;
    dateRange?: DateRange | null;
    interval: SimpleIntervalType;
    kind?: RevenueAnalyticsMRRQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    properties: Array<RevenueAnalyticsPropertyFilter>;
    response?: RevenueAnalyticsMRRQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace RevenueAnalyticsMRRQuery {
    export enum kind {
        REVENUE_ANALYTICS_MRRQUERY = 'RevenueAnalyticsMRRQuery',
    }
}

