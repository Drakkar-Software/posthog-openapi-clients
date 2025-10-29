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
import type { MarketingAnalyticsAggregatedQueryResponse } from './MarketingAnalyticsAggregatedQueryResponse';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
import type { WebAnalyticsSampling } from './WebAnalyticsSampling';
export type MarketingAnalyticsAggregatedQuery = {
    compareFilter?: CompareFilter | null;
    conversionGoal?: (ActionConversionGoal | CustomEventConversionGoal) | null;
    dateRange?: DateRange | null;
    doPathCleaning?: boolean | null;
    /**
     * Draft conversion goal that can be set in the UI without saving
     */
    draftConversionGoal?: (ConversionGoalFilter1 | ConversionGoalFilter2 | ConversionGoalFilter3) | null;
    filterTestAccounts?: boolean | null;
    includeRevenue?: boolean | null;
    /**
     * Filter by integration IDs
     */
    integrationFilter?: IntegrationFilter | null;
    kind?: MarketingAnalyticsAggregatedQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: MarketingAnalyticsAggregatedQueryResponse | null;
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
export namespace MarketingAnalyticsAggregatedQuery {
    export enum kind {
        MARKETING_ANALYTICS_AGGREGATED_QUERY = 'MarketingAnalyticsAggregatedQuery',
    }
}

