/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Breakdown } from './Breakdown';
import type { BreakdownType } from './BreakdownType';
export type BreakdownFilter = {
    breakdown?: (string | number) | null;
    breakdown_group_type_index?: number | null;
    breakdown_hide_other_aggregation?: boolean | null;
    breakdown_histogram_bin_count?: number | null;
    breakdown_limit?: number | null;
    breakdown_normalize_url?: boolean | null;
    breakdown_type?: BreakdownType | null;
    breakdowns?: Array<Breakdown> | null;
};

