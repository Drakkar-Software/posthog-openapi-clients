/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryTiming } from './QueryTiming';
import type { TimelineEntry } from './TimelineEntry';
export type QueryResponseAlternative4 = {
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: (string | null);
    hasMore?: (boolean | null);
    /**
     * Generated HogQL query.
     */
    hogql?: (string | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    results: Array<TimelineEntry>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
};

