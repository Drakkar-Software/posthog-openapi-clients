/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryStatus } from './QueryStatus';
import type { QueryTiming } from './QueryTiming';
import type { ResolvedDateRangeResponse } from './ResolvedDateRangeResponse';
export type GroupsQueryResponse = {
    columns: Array<any>;
    /**
     * Query error. Returned only if 'explain' or `modifiers.debug` is true. Throws an error otherwise.
     */
    error?: string | null;
    hasMore?: boolean | null;
    /**
     * Generated HogQL query.
     */
    hogql: string;
    kind?: GroupsQueryResponse.kind;
    limit: number;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset: number;
    /**
     * Query status indicates whether next to the provided data, a query is still running.
     */
    query_status?: QueryStatus | null;
    /**
     * The date range used for the query
     */
    resolved_date_range?: ResolvedDateRangeResponse | null;
    results: Array<Array<any>>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: Array<QueryTiming> | null;
    types: Array<string>;
};
export namespace GroupsQueryResponse {
    export enum kind {
        GROUPS_QUERY = 'GroupsQuery',
    }
}

