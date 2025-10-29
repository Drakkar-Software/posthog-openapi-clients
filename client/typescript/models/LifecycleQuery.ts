/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { DateRange } from './DateRange';
import type { EventsNode } from './EventsNode';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { IntervalType } from './IntervalType';
import type { LifecycleFilter } from './LifecycleFilter';
import type { LifecycleQueryResponse } from './LifecycleQueryResponse';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
export type LifecycleQuery = {
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
     * Granularity of the response. Can be one of `hour`, `day`, `week` or `month`
     */
    interval?: IntervalType | null;
    kind?: LifecycleQuery.kind;
    /**
     * Properties specific to the lifecycle insight
     */
    lifecycleFilter?: LifecycleFilter | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Property filters for all series
     */
    properties?: PropertyGroupFilter | null;
    response?: LifecycleQueryResponse | null;
    /**
     * Sampling rate
     */
    samplingFactor?: number | null;
    /**
     * Events and actions to include
     */
    series: Array<(EventsNode | ActionsNode | DataWarehouseNode)>;
    /**
     * Tags that will be added to the Query log comment
     */
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace LifecycleQuery {
    export enum kind {
        LIFECYCLE_QUERY = 'LifecycleQuery',
    }
}

