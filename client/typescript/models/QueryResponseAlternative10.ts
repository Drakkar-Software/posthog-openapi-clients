/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryTiming } from './QueryTiming';
import type { SamplingRate } from './SamplingRate';
import type { WebOverviewItem } from './WebOverviewItem';
export type QueryResponseAlternative10 = {
    hogql?: (string | null);
    is_cached?: (boolean | null);
    last_refresh?: (string | null);
    next_allowed_client_refresh?: (string | null);
    results: Array<WebOverviewItem>;
    samplingRate?: (SamplingRate | null);
    timings?: (Array<QueryTiming> | null);
};

