/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryTiming } from './QueryTiming';
import type { TimelineEntry } from './TimelineEntry';
export type SessionsTimelineQueryResponse = {
    hasMore?: (boolean | null);
    hogql?: (string | null);
    results: Array<TimelineEntry>;
    timings?: (Array<QueryTiming> | null);
};

