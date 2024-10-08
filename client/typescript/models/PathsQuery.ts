/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelPathsFilter } from './FunnelPathsFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightDateRange } from './InsightDateRange';
import type { PathsFilter } from './PathsFilter';
import type { PathsQueryResponse } from './PathsQueryResponse';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
export type PathsQuery = {
    /**
     * Groups aggregation
     */
    aggregation_group_type_index?: (number | null);
    /**
     * Date range for the query
     */
    dateRange?: (InsightDateRange | null);
    /**
     * Exclude internal and test users by applying the respective filters
     */
    filterTestAccounts?: (boolean | null);
    /**
     * Used for displaying paths in relation to funnel steps.
     */
    funnelPathsFilter?: (FunnelPathsFilter | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    /**
     * Properties specific to the paths insight
     */
    pathsFilter: PathsFilter;
    /**
     * Property filters for all series
     */
    properties?: (PropertyGroupFilter | null);
    response?: (PathsQueryResponse | null);
    /**
     * Sampling rate
     */
    samplingFactor?: (number | null);
};

