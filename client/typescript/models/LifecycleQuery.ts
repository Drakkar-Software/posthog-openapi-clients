/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { EventsNode } from './EventsNode';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightDateRange } from './InsightDateRange';
import type { IntervalType } from './IntervalType';
import type { LifecycleFilter } from './LifecycleFilter';
import type { LifecycleQueryResponse } from './LifecycleQueryResponse';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
export type LifecycleQuery = {
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
     * Granularity of the response. Can be one of `hour`, `day`, `week` or `month`
     */
    interval?: (IntervalType | null);
    kind?: any;
    /**
     * Properties specific to the lifecycle insight
     */
    lifecycleFilter?: (LifecycleFilter | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    /**
     * Property filters for all series
     */
    properties?: (PropertyGroupFilter | null);
    response?: (LifecycleQueryResponse | null);
    /**
     * Sampling rate
     */
    samplingFactor?: (number | null);
    /**
     * Events and actions to include
     */
    series: Array<(EventsNode | ActionsNode | DataWarehouseNode)>;
};

