/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { DateRange } from './DateRange';
import type { EventsNode } from './EventsNode';
import type { IntervalType } from './IntervalType';
import type { LifecycleFilter } from './LifecycleFilter';
import type { LifecycleQueryResponse } from './LifecycleQueryResponse';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
export type LifecycleQuery = {
    /**
     * Date range for the query
     */
    dateRange?: (DateRange | null);
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
    series: Array<(EventsNode | ActionsNode)>;
};

