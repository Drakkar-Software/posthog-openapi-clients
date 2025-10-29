/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLMetadataResponse } from './HogQLMetadataResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryStatus } from './QueryStatus';
import type { QueryTiming } from './QueryTiming';
import type { ResolvedDateRangeResponse } from './ResolvedDateRangeResponse';
export type Response3 = {
    /**
     * Executed ClickHouse query
     */
    clickhouse?: string | null;
    /**
     * Returned columns
     */
    columns?: Array<any> | null;
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: string | null;
    /**
     * Query explanation output
     */
    explain?: Array<string> | null;
    hasMore?: boolean | null;
    /**
     * Generated HogQL query.
     */
    hogql?: string | null;
    limit?: number | null;
    /**
     * Query metadata output
     */
    metadata?: HogQLMetadataResponse | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    /**
     * Input query string
     */
    query?: string | null;
    /**
     * Query status indicates whether next to the provided data, a query is still running.
     */
    query_status?: QueryStatus | null;
    /**
     * The date range used for the query
     */
    resolved_date_range?: ResolvedDateRangeResponse | null;
    results: Array<any>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: Array<QueryTiming> | null;
    /**
     * Types of returned columns
     */
    types?: Array<any> | null;
};

