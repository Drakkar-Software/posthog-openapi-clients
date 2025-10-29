/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DisplayEnum } from './DisplayEnum';
import type { GroupUsageMetricFormatEnum } from './GroupUsageMetricFormatEnum';
export type GroupUsageMetric = {
    readonly id: string;
    name: string;
    format?: GroupUsageMetricFormatEnum;
    /**
     * In days
     */
    interval?: number;
    display?: DisplayEnum;
    filters: any;
};

