/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentFunnelMetric } from './ExperimentFunnelMetric';
import type { ExperimentMeanMetric } from './ExperimentMeanMetric';
import type { ExperimentRatioMetric } from './ExperimentRatioMetric';
import type { ExperimentSignificanceCode } from './ExperimentSignificanceCode';
import type { ExperimentStatsBaseValidated } from './ExperimentStatsBaseValidated';
import type { ExperimentVariantFunnelsBaseStats } from './ExperimentVariantFunnelsBaseStats';
import type { ExperimentVariantResultBayesian } from './ExperimentVariantResultBayesian';
import type { ExperimentVariantResultFrequentist } from './ExperimentVariantResultFrequentist';
import type { ExperimentVariantTrendsBaseStats } from './ExperimentVariantTrendsBaseStats';
export type ExperimentQueryResponse = {
    baseline?: ExperimentStatsBaseValidated | null;
    credible_intervals?: Record<string, Array<number>> | null;
    insight?: Array<Record<string, any>> | null;
    kind?: ExperimentQueryResponse.kind;
    metric?: (ExperimentMeanMetric | ExperimentFunnelMetric | ExperimentRatioMetric) | null;
    p_value?: number | null;
    probability?: Record<string, number> | null;
    significance_code?: ExperimentSignificanceCode | null;
    significant?: boolean | null;
    stats_version?: number | null;
    variant_results?: (Array<ExperimentVariantResultFrequentist> | Array<ExperimentVariantResultBayesian>) | null;
    variants?: (Array<ExperimentVariantTrendsBaseStats> | Array<ExperimentVariantFunnelsBaseStats>) | null;
};
export namespace ExperimentQueryResponse {
    export enum kind {
        EXPERIMENT_QUERY = 'ExperimentQuery',
    }
}

