/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionConversionGoal } from './ActionConversionGoal';
import type { CompareFilter } from './CompareFilter';
import type { ConversionGoalFilter1 } from './ConversionGoalFilter1';
import type { ConversionGoalFilter2 } from './ConversionGoalFilter2';
import type { ConversionGoalFilter3 } from './ConversionGoalFilter3';
import type { CustomEventConversionGoal } from './CustomEventConversionGoal';
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { IntegrationFilter } from './IntegrationFilter';
import type { MarketingAnalyticsOrderByEnum } from './MarketingAnalyticsOrderByEnum';
import type { MarketingAnalyticsTableQueryResponse } from './MarketingAnalyticsTableQueryResponse';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
import type { WebAnalyticsSampling } from './WebAnalyticsSampling';
export type MarketingAnalyticsTableQuery = {
    /**
     * Compare to date range
     */
    compareFilter?: CompareFilter | null;
    conversionGoal?: (ActionConversionGoal | CustomEventConversionGoal) | null;
    dateRange?: DateRange | null;
    doPathCleaning?: boolean | null;
    /**
     * Draft conversion goal that can be set in the UI without saving
     */
    draftConversionGoal?: (ConversionGoalFilter1 | ConversionGoalFilter2 | ConversionGoalFilter3) | null;
    /**
     * Filter test accounts
     */
    filterTestAccounts?: boolean | null;
    /**
     * Include conversion goal rows even when they don't match campaign costs table
     */
    includeAllConversions?: boolean | null;
    includeRevenue?: boolean | null;
    /**
     * Filter by integration type
     */
    integrationFilter?: IntegrationFilter | null;
    kind?: MarketingAnalyticsTableQuery.kind;
    /**
     * Number of rows to return
     */
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Number of rows to skip before returning rows
     */
    offset?: number | null;
    /**
     * Columns to order by - similar to EventsQuery format
     */
    orderBy?: Array<Array<(string | MarketingAnalyticsOrderByEnum)>> | null;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: MarketingAnalyticsTableQueryResponse | null;
    sampling?: WebAnalyticsSampling | null;
    /**
     * Return a limited set of data. Will use default columns if empty.
     */
    select?: Array<string> | null;
    tags?: QueryLogTags | null;
    useSessionsTable?: boolean | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace MarketingAnalyticsTableQuery {
    export enum kind {
        MARKETING_ANALYTICS_TABLE_QUERY = 'MarketingAnalyticsTableQuery',
    }
}

