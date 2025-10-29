/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentStatsValidationFailure } from './ExperimentStatsValidationFailure';
import type { SessionData } from './SessionData';
export type ExperimentStatsBaseValidated = {
    denominator_sum?: number | null;
    denominator_sum_squares?: number | null;
    key: string;
    number_of_samples: number;
    numerator_denominator_sum_product?: number | null;
    step_counts?: Array<number> | null;
    step_sessions?: Array<Array<SessionData>> | null;
    sum: number;
    sum_squares: number;
    validation_failures?: Array<ExperimentStatsValidationFailure> | null;
};

