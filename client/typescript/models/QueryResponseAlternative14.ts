/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLMetadataResponse } from './HogQLMetadataResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryTiming } from './QueryTiming';
export type QueryResponseAlternative14 = {
    /**
     * Executed ClickHouse query
     */
    clickhouse?: (string | null);
    /**
     * Returned columns
     */
    columns?: null;
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: (string | null);
    /**
     * Query explanation output
     */
    explain?: (Array<string> | null);
    hasMore?: (boolean | null);
    /**
     * Generated HogQL query.
     */
    hogql?: (string | null);
    limit?: (number | null);
    /**
     * Query metadata output
     */
    metadata?: (HogQLMetadataResponse | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    offset?: (number | null);
    /**
     * Input query string
     */
    query?: (string | null);
    results: Array<any>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
    /**
     * Types of returned columns
     */
    types?: null;
};

