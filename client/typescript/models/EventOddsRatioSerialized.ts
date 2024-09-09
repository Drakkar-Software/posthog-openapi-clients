/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CorrelationType } from './CorrelationType';
import type { EventDefinition } from './EventDefinition';
export type EventOddsRatioSerialized = {
    correlation_type: CorrelationType;
    event: EventDefinition;
    failure_count: number;
    odds_ratio: number;
    success_count: number;
};

