/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UsageMetricDisplay } from './UsageMetricDisplay';
import type { UsageMetricFormat } from './UsageMetricFormat';
export type UsageMetric = {
    change_from_previous_pct?: number | null;
    display: UsageMetricDisplay;
    format: UsageMetricFormat;
    id: string;
    interval: number;
    name: string;
    previous: number;
    value: number;
};

