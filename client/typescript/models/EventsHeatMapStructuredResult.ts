/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventsHeatMapColumnAggregationResult } from './EventsHeatMapColumnAggregationResult';
import type { EventsHeatMapDataResult } from './EventsHeatMapDataResult';
import type { EventsHeatMapRowAggregationResult } from './EventsHeatMapRowAggregationResult';
export type EventsHeatMapStructuredResult = {
    allAggregations: number;
    columnAggregations: Array<EventsHeatMapColumnAggregationResult>;
    data: Array<EventsHeatMapDataResult>;
    rowAggregations: Array<EventsHeatMapRowAggregationResult>;
};

