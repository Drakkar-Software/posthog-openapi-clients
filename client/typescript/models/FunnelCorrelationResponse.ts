/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelCorrelationResult } from './FunnelCorrelationResult';
import type { QueryTiming } from './QueryTiming';
export type FunnelCorrelationResponse = {
    columns?: null;
    hasMore?: (boolean | null);
    hogql?: (string | null);
    limit?: (number | null);
    offset?: (number | null);
    results: FunnelCorrelationResult;
    timings?: (Array<QueryTiming> | null);
    types?: null;
};

