/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { UsageMetricsQueryResponse } from './UsageMetricsQueryResponse';
export type UsageMetricsQuery = {
    /**
     * Group key. Required with group_type_index for group queries.
     */
    group_key?: string | null;
    /**
     * Group type index. Required with group_key for group queries.
     */
    group_type_index?: number | null;
    kind?: UsageMetricsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Person ID to fetch metrics for. Mutually exclusive with group parameters.
     */
    person_id?: string | null;
    response?: UsageMetricsQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace UsageMetricsQuery {
    export enum kind {
        USAGE_METRICS_QUERY = 'UsageMetricsQuery',
    }
}

