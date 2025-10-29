/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { FunnelPathsFilter } from './FunnelPathsFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { PathsFilter } from './PathsFilter';
import type { PathsQueryResponse } from './PathsQueryResponse';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
export type PathsQuery = {
    /**
     * Groups aggregation
     */
    aggregation_group_type_index?: number | null;
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
    /**
     * Used for displaying paths in relation to funnel steps.
     */
    funnelPathsFilter?: FunnelPathsFilter | null;
    kind?: PathsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Properties specific to the paths insight
     */
    pathsFilter: PathsFilter;
    /**
     * Property filters for all series
     */
    properties?: PropertyGroupFilter | null;
    response?: PathsQueryResponse | null;
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
export namespace PathsQuery {
    export enum kind {
        PATHS_QUERY = 'PathsQuery',
    }
}

