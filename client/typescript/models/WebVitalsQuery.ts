/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionConversionGoal } from './ActionConversionGoal';
import type { CompareFilter } from './CompareFilter';
import type { CustomEventConversionGoal } from './CustomEventConversionGoal';
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { LifecycleQuery } from './LifecycleQuery';
import type { PathsQuery } from './PathsQuery';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { RetentionQuery } from './RetentionQuery';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
import type { StickinessQuery } from './StickinessQuery';
import type { TrendsQuery } from './TrendsQuery';
import type { WebAnalyticsOrderByDirection } from './WebAnalyticsOrderByDirection';
import type { WebAnalyticsOrderByFields } from './WebAnalyticsOrderByFields';
import type { WebAnalyticsSampling } from './WebAnalyticsSampling';
import type { WebGoalsQueryResponse } from './WebGoalsQueryResponse';
export type WebVitalsQuery = {
    compareFilter?: CompareFilter | null;
    conversionGoal?: (ActionConversionGoal | CustomEventConversionGoal) | null;
    dateRange?: DateRange | null;
    doPathCleaning?: boolean | null;
    filterTestAccounts?: boolean | null;
    includeRevenue?: boolean | null;
    kind?: WebVitalsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    orderBy?: Array<(WebAnalyticsOrderByFields | WebAnalyticsOrderByDirection)> | null;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: WebGoalsQueryResponse | null;
    sampling?: WebAnalyticsSampling | null;
    source: (TrendsQuery | FunnelsQuery | RetentionQuery | PathsQuery | StickinessQuery | LifecycleQuery);
    tags?: QueryLogTags | null;
    useSessionsTable?: boolean | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace WebVitalsQuery {
    export enum kind {
        WEB_VITALS_QUERY = 'WebVitalsQuery',
    }
}

