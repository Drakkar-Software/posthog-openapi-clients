/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorTrackingGroup } from './ErrorTrackingGroup';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryTiming } from './QueryTiming';
export type QueryResponseAlternative21 = {
    columns?: (Array<string> | null);
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: (string | null);
    hasMore?: (boolean | null);
    /**
     * Generated HogQL query.
     */
    hogql?: (string | null);
    limit?: (number | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    offset?: (number | null);
    results: Array<ErrorTrackingGroup>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
};

