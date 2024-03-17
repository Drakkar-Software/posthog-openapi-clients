/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelCorrelationResult } from './FunnelCorrelationResult';
import type { QueryTiming } from './QueryTiming';
export type QueryResponseAlternative17 = {
    columns?: null;
    hasMore?: (boolean | null);
    hogql?: (string | null);
    limit?: (number | null);
    offset?: (number | null);
    results: FunnelCorrelationResult;
    timings?: (Array<QueryTiming> | null);
    types?: null;
};

