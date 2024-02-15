/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryTiming } from './QueryTiming';
export type EventsQueryResponse = {
    columns: Array<any>;
    hasMore?: (boolean | null);
    hogql: string;
    limit?: (number | null);
    offset?: (number | null);
    results: Array<Array<any>>;
    timings?: (Array<QueryTiming> | null);
    types: Array<string>;
};

