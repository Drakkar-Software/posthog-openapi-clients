/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
import type { WebAnalyticsExternalSummaryQueryResponse } from './WebAnalyticsExternalSummaryQueryResponse';
export type WebAnalyticsExternalSummaryQuery = {
    dateRange: DateRange;
    kind?: WebAnalyticsExternalSummaryQuery.kind;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: WebAnalyticsExternalSummaryQueryResponse | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace WebAnalyticsExternalSummaryQuery {
    export enum kind {
        WEB_ANALYTICS_EXTERNAL_SUMMARY_QUERY = 'WebAnalyticsExternalSummaryQuery',
    }
}

