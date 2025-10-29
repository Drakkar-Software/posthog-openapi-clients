/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BreakdownFilter } from './BreakdownFilter';
import type { DateRange } from './DateRange';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { RetentionFilter } from './RetentionFilter';
import type { RetentionQueryResponse } from './RetentionQueryResponse';
export type RetentionQuery = {
    /**
     * Groups aggregation
     */
    aggregation_group_type_index?: number | null;
    /**
     * Breakdown of the events and actions
     */
    breakdownFilter?: BreakdownFilter | null;
    /**
     * Colors used in the insight's visualization
     */
    dataColorTheme?: number | null;
    /**
     * Date range for the query
     */
    dateRange?: DateRange | null;
    /**
     * Exclude internal and test users by applying the respective filters
     */
    filterTestAccounts?: boolean | null;
    kind?: RetentionQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Property filters for all series
     */
    properties?: PropertyGroupFilter | null;
    response?: RetentionQueryResponse | null;
    /**
     * Properties specific to the retention insight
     */
    retentionFilter: RetentionFilter;
    /**
     * Sampling rate
     */
    samplingFactor?: number | null;
    /**
     * Tags that will be added to the Query log comment
     */
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace RetentionQuery {
    export enum kind {
        RETENTION_QUERY = 'RetentionQuery',
    }
}

