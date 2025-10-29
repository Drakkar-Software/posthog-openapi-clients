/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { BreakdownFilter } from './BreakdownFilter';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { DateRange } from './DateRange';
import type { EventsNode } from './EventsNode';
import type { FunnelsFilter } from './FunnelsFilter';
import type { FunnelsQueryResponse } from './FunnelsQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { IntervalType } from './IntervalType';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
export type FunnelsQuery = {
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
    /**
     * Properties specific to the funnels insight
     */
    funnelsFilter?: FunnelsFilter | null;
    /**
     * Granularity of the response. Can be one of `hour`, `day`, `week` or `month`
     */
    interval?: IntervalType | null;
    kind?: FunnelsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Property filters for all series
     */
    properties?: PropertyGroupFilter | null;
    response?: FunnelsQueryResponse | null;
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
export namespace FunnelsQuery {
    export enum kind {
        FUNNELS_QUERY = 'FunnelsQuery',
    }
}

