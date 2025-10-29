/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentSignificanceCode } from './ExperimentSignificanceCode';
import type { ExperimentVariantTrendsBaseStats } from './ExperimentVariantTrendsBaseStats';
import type { TrendsQuery } from './TrendsQuery';
export type QueryResponseAlternative17 = {
    count_query?: TrendsQuery | null;
    credible_intervals: Record<string, Array<number>>;
    exposure_query?: TrendsQuery | null;
    insight: Array<Record<string, any>>;
    kind?: QueryResponseAlternative17.kind;
    p_value: number;
    probability: Record<string, number>;
    significance_code: ExperimentSignificanceCode;
    significant: boolean;
    stats_version?: number | null;
    variants: Array<ExperimentVariantTrendsBaseStats>;
};
export namespace QueryResponseAlternative17 {
    export enum kind {
        EXPERIMENT_TRENDS_QUERY = 'ExperimentTrendsQuery',
    }
}

