/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardFilter } from './DashboardFilter';
import type { RefreshType } from './RefreshType';
export type EndpointRunRequest = {
    /**
     * Client provided query ID. Can be used to retrieve the status or cancel the query.
     */
    client_query_id?: string | null;
    filters_override?: DashboardFilter | null;
    query_override?: Record<string, any> | null;
    /**
     * Whether results should be calculated sync or async, and how much to rely on the cache:
     * - `'blocking'` - calculate synchronously (returning only when the query is done), UNLESS there are very fresh results in the cache
     * - `'async'` - kick off background calculation (returning immediately with a query status), UNLESS there are very fresh results in the cache
     * - `'lazy_async'` - kick off background calculation, UNLESS there are somewhat fresh results in the cache
     * - `'force_blocking'` - calculate synchronously, even if fresh results are already cached
     * - `'force_async'` - kick off background calculation, even if fresh results are already cached
     * - `'force_cache'` - return cached data or a cache miss; always completes immediately as it never calculates Background calculation can be tracked using the `query_status` response field.
     */
    refresh?: RefreshType | null;
    variables_override?: Record<string, Record<string, any>> | null;
    variables_values?: Record<string, any> | null;
};

