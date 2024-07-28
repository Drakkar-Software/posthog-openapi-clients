/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryTiming } from './QueryTiming';
import type { SamplingRate } from './SamplingRate';
export type Response5 = {
    columns?: null;
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
    results: Array<any>;
    samplingRate?: (SamplingRate | null);
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
    types?: null;
};

