/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelTimeToConvertResults } from './FunnelTimeToConvertResults';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryTiming } from './QueryTiming';
export type QueryResponseAlternative23 = {
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
    results: FunnelTimeToConvertResults;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
};

