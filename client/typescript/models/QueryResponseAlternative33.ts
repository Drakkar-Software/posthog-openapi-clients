/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { MarketingAnalyticsItem } from './MarketingAnalyticsItem';
import type { QueryStatus } from './QueryStatus';
import type { QueryTiming } from './QueryTiming';
import type { ResolvedDateRangeResponse } from './ResolvedDateRangeResponse';
import type { SamplingRate } from './SamplingRate';
export type QueryResponseAlternative33 = {
    columns?: Array<any> | null;
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: string | null;
    hasMore?: boolean | null;
    /**
     * Generated HogQL query.
     */
    hogql?: string | null;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    /**
     * Query status indicates whether next to the provided data, a query is still running.
     */
    query_status?: QueryStatus | null;
    /**
     * The date range used for the query
     */
    resolved_date_range?: ResolvedDateRangeResponse | null;
    results: Array<Array<MarketingAnalyticsItem>>;
    samplingRate?: SamplingRate | null;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: Array<QueryTiming> | null;
    types?: Array<any> | null;
};

