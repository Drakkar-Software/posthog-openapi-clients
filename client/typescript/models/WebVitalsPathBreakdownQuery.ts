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
import type { WebVitalsMetric } from './WebVitalsMetric';
import type { WebVitalsPathBreakdownQueryResponse } from './WebVitalsPathBreakdownQueryResponse';
import type { WebVitalsPercentile } from './WebVitalsPercentile';
export type WebVitalsPathBreakdownQuery = {
    compareFilter?: CompareFilter | null;
    conversionGoal?: (ActionConversionGoal | CustomEventConversionGoal) | null;
    dateRange?: DateRange | null;
    doPathCleaning?: boolean | null;
    filterTestAccounts?: boolean | null;
    includeRevenue?: boolean | null;
    kind?: WebVitalsPathBreakdownQuery.kind;
    metric: WebVitalsMetric;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    orderBy?: Array<(WebAnalyticsOrderByFields | WebAnalyticsOrderByDirection)> | null;
    percentile: WebVitalsPercentile;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: WebVitalsPathBreakdownQueryResponse | null;
    sampling?: WebAnalyticsSampling | null;
    tags?: QueryLogTags | null;
    thresholds: Array<number>;
    useSessionsTable?: boolean | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace WebVitalsPathBreakdownQuery {
    export enum kind {
        WEB_VITALS_PATH_BREAKDOWN_QUERY = 'WebVitalsPathBreakdownQuery',
    }
}

