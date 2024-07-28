/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { CompareFilter } from './CompareFilter';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { EventsNode } from './EventsNode';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightDateRange } from './InsightDateRange';
import type { IntervalType } from './IntervalType';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { StickinessFilter } from './StickinessFilter';
import type { StickinessQueryResponse } from './StickinessQueryResponse';
export type StickinessQuery = {
    /**
     * Compare to date range
     */
    compareFilter?: (CompareFilter | null);
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
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    /**
     * Property filters for all series
     */
    properties?: (PropertyGroupFilter | null);
    response?: (StickinessQueryResponse | null);
    /**
     * Sampling rate
     */
    samplingFactor?: (number | null);
    /**
     * Events and actions to include
     */
    series: Array<(EventsNode | ActionsNode | DataWarehouseNode)>;
    /**
     * Properties specific to the stickiness insight
     */
    stickinessFilter?: (StickinessFilter | null);
};

