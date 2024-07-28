/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryTiming } from './QueryTiming';
export type QueryResponseAlternative15 = {
    columns: Array<any>;
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: (string | null);
    hasMore?: (boolean | null);
    /**
     * Generated HogQL query.
     */
    hogql: string;
    limit: number;
    missing_actors_count?: (number | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    offset: number;
    results: Array<Array<any>>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
    types: Array<string>;
};

