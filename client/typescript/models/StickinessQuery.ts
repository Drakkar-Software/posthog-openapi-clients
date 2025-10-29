/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { CompareFilter } from './CompareFilter';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { DateRange } from './DateRange';
import type { EventsNode } from './EventsNode';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { IntervalType } from './IntervalType';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { StickinessFilter } from './StickinessFilter';
import type { StickinessQueryResponse } from './StickinessQueryResponse';
export type StickinessQuery = {
    /**
     * Compare to date range
     */
    compareFilter?: CompareFilter | null;
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
    /**
     * How many intervals comprise a period. Only used for cohorts, otherwise default 1.
     */
    intervalCount?: number | null;
    kind?: StickinessQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Property filters for all series
     */
    properties?: PropertyGroupFilter | null;
    response?: StickinessQueryResponse | null;
    /**
     * Sampling rate
     */
    samplingFactor?: number | null;
    /**
     * Events and actions to include
     */
    series: Array<(EventsNode | ActionsNode | DataWarehouseNode)>;
    /**
     * Properties specific to the stickiness insight
     */
    stickinessFilter?: StickinessFilter | null;
    /**
     * Tags that will be added to the Query log comment
     */
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace StickinessQuery {
    export enum kind {
        STICKINESS_QUERY = 'StickinessQuery',
    }
}

