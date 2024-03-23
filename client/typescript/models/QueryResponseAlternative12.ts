/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryTiming } from './QueryTiming';
import type { SamplingRate } from './SamplingRate';
export type QueryResponseAlternative12 = {
    columns?: null;
    hogql?: (string | null);
    is_cached?: (boolean | null);
    last_refresh?: (string | null);
    next_allowed_client_refresh?: (string | null);
    results: Array<any>;
    samplingRate?: (SamplingRate | null);
    timings?: (Array<QueryTiming> | null);
    types?: null;
};

