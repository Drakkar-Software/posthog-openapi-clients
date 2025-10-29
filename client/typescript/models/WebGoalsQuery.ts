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
import type { WebGoalsQueryResponse } from './WebGoalsQueryResponse';
export type WebGoalsQuery = {
    compareFilter?: CompareFilter | null;
    conversionGoal?: (ActionConversionGoal | CustomEventConversionGoal) | null;
    dateRange?: DateRange | null;
    doPathCleaning?: boolean | null;
    filterTestAccounts?: boolean | null;
    includeRevenue?: boolean | null;
    kind?: WebGoalsQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    orderBy?: Array<(WebAnalyticsOrderByFields | WebAnalyticsOrderByDirection)> | null;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: WebGoalsQueryResponse | null;
    sampling?: WebAnalyticsSampling | null;
    tags?: QueryLogTags | null;
    useSessionsTable?: boolean | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace WebGoalsQuery {
    export enum kind {
        WEB_GOALS_QUERY = 'WebGoalsQuery',
    }
}

