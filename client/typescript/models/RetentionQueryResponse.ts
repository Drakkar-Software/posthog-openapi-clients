/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryTiming } from './QueryTiming';
import type { RetentionResult } from './RetentionResult';
export type RetentionQueryResponse = {
    hogql?: (string | null);
    is_cached?: (boolean | null);
    last_refresh?: (string | null);
    next_allowed_client_refresh?: (string | null);
    results: Array<RetentionResult>;
    timings?: (Array<QueryTiming> | null);
};

