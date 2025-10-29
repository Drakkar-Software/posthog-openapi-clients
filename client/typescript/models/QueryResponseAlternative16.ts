/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentSignificanceCode } from './ExperimentSignificanceCode';
import type { ExperimentVariantFunnelsBaseStats } from './ExperimentVariantFunnelsBaseStats';
import type { FunnelsQuery } from './FunnelsQuery';
export type QueryResponseAlternative16 = {
    credible_intervals: Record<string, Array<number>>;
    expected_loss: number;
    funnels_query?: FunnelsQuery | null;
    insight: Array<Array<Record<string, any>>>;
    kind?: QueryResponseAlternative16.kind;
    probability: Record<string, number>;
    significance_code: ExperimentSignificanceCode;
    significant: boolean;
    stats_version?: number | null;
    variants: Array<ExperimentVariantFunnelsBaseStats>;
};
export namespace QueryResponseAlternative16 {
    export enum kind {
        EXPERIMENT_FUNNELS_QUERY = 'ExperimentFunnelsQuery',
    }
}

