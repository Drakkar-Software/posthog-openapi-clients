/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionConversionGoal } from './ActionConversionGoal';
import type { ActionsNode } from './ActionsNode';
import type { CalendarHeatmapFilter } from './CalendarHeatmapFilter';
import type { CalendarHeatmapResponse } from './CalendarHeatmapResponse';
import type { CustomEventConversionGoal } from './CustomEventConversionGoal';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { DateRange } from './DateRange';
import type { EventsNode } from './EventsNode';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { IntervalType } from './IntervalType';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
export type CalendarHeatmapQuery = {
    /**
     * Groups aggregation
     */
    aggregation_group_type_index?: number | null;
    /**
     * Properties specific to the trends insight
     */
    calendarHeatmapFilter?: CalendarHeatmapFilter | null;
    /**
     * Whether we should be comparing against a specific conversion goal
     */
    conversionGoal?: (ActionConversionGoal | CustomEventConversionGoal) | null;
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
    kind?: CalendarHeatmapQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Property filters for all series
     */
    properties?: PropertyGroupFilter | null;
    response?: CalendarHeatmapResponse | null;
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
export namespace CalendarHeatmapQuery {
    export enum kind {
        CALENDAR_HEATMAP_QUERY = 'CalendarHeatmapQuery',
    }
}

