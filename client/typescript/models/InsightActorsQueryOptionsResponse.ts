/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BreakdownItem } from './BreakdownItem';
import type { CompareItem } from './CompareItem';
import type { DayItem } from './DayItem';
import type { IntervalItem } from './IntervalItem';
import type { Series } from './Series';
import type { StatusItem } from './StatusItem';
export type InsightActorsQueryOptionsResponse = {
    breakdown?: (Array<BreakdownItem> | null);
    compare?: (Array<CompareItem> | null);
    day?: (Array<DayItem> | null);
    interval?: (Array<IntervalItem> | null);
    series?: (Array<Series> | null);
    status?: (Array<StatusItem> | null);
};

