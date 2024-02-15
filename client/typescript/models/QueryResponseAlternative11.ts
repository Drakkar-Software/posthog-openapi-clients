/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryTiming } from './QueryTiming';
import type { SamplingRate } from './SamplingRate';
export type QueryResponseAlternative11 = {
    columns?: null;
    hasMore?: (boolean | null);
    hogql?: (string | null);
    is_cached?: (boolean | null);
    last_refresh?: (string | null);
    limit?: (number | null);
    next_allowed_client_refresh?: (string | null);
    offset?: (number | null);
    results: Array<any>;
    samplingRate?: (SamplingRate | null);
    timings?: (Array<QueryTiming> | null);
    types?: null;
};

