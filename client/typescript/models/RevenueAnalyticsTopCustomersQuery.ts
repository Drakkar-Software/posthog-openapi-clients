/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { RevenueAnalyticsTopCustomersGroupBy } from './RevenueAnalyticsTopCustomersGroupBy';
import type { RevenueAnalyticsTopCustomersQueryResponse } from './RevenueAnalyticsTopCustomersQueryResponse';
export type RevenueAnalyticsTopCustomersQuery = {
    dateRange?: DateRange | null;
    groupBy: RevenueAnalyticsTopCustomersGroupBy;
    kind?: RevenueAnalyticsTopCustomersQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    properties: Array<RevenueAnalyticsPropertyFilter>;
    response?: RevenueAnalyticsTopCustomersQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace RevenueAnalyticsTopCustomersQuery {
    export enum kind {
        REVENUE_ANALYTICS_TOP_CUSTOMERS_QUERY = 'RevenueAnalyticsTopCustomersQuery',
    }
}

