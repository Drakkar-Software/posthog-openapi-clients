/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryStatus } from './QueryStatus';
import type { QueryTiming } from './QueryTiming';
export type StickinessQueryResponse = {
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: (string | null);
    /**
     * Generated HogQL query.
     */
    hogql?: (string | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    /**
     * Query status indicates whether next to the provided data, a query is still running.
     */
    query_status?: (QueryStatus | null);
    results: Array<Record<string, any>>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
};

