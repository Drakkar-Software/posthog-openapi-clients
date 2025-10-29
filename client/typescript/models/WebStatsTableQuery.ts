/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionConversionGoal } from './ActionConversionGoal';
import type { CompareFilter } from './CompareFilter';
import type { CustomEventConversionGoal } from './CustomEventConversionGoal';
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
import type { WebAnalyticsOrderByDirection } from './WebAnalyticsOrderByDirection';
import type { WebAnalyticsOrderByFields } from './WebAnalyticsOrderByFields';
import type { WebAnalyticsSampling } from './WebAnalyticsSampling';
import type { WebStatsBreakdown } from './WebStatsBreakdown';
import type { WebStatsTableQueryResponse } from './WebStatsTableQueryResponse';
export type WebStatsTableQuery = {
    breakdownBy: WebStatsBreakdown;
    compareFilter?: CompareFilter | null;
    conversionGoal?: (ActionConversionGoal | CustomEventConversionGoal) | null;
    dateRange?: DateRange | null;
    doPathCleaning?: boolean | null;
    filterTestAccounts?: boolean | null;
    includeBounceRate?: boolean | null;
    includeRevenue?: boolean | null;
    includeScrollDepth?: boolean | null;
    kind?: WebStatsTableQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    orderBy?: Array<(WebAnalyticsOrderByFields | WebAnalyticsOrderByDirection)> | null;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: WebStatsTableQueryResponse | null;
    sampling?: WebAnalyticsSampling | null;
    tags?: QueryLogTags | null;
    useSessionsTable?: boolean | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace WebStatsTableQuery {
    export enum kind {
        WEB_STATS_TABLE_QUERY = 'WebStatsTableQuery',
    }
}

