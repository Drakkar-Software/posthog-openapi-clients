/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChartDisplayType } from './ChartDisplayType';
import type { MeanRetentionCalculation } from './MeanRetentionCalculation';
import type { RetentionDashboardDisplayType } from './RetentionDashboardDisplayType';
import type { RetentionEntity } from './RetentionEntity';
import type { RetentionPeriod } from './RetentionPeriod';
import type { RetentionReference } from './RetentionReference';
import type { RetentionType } from './RetentionType';
import type { TimeWindowMode } from './TimeWindowMode';
export type RetentionFilter = {
    cumulative?: boolean | null;
    dashboardDisplay?: RetentionDashboardDisplayType | null;
    /**
     * controls the display of the retention graph
     */
    display?: ChartDisplayType | null;
    meanRetentionCalculation?: MeanRetentionCalculation | null;
    minimumOccurrences?: number | null;
    period?: RetentionPeriod | null;
    /**
     * Whether retention is with regard to initial cohort size, or that of the previous period.
     */
    retentionReference?: RetentionReference | null;
    retentionType?: RetentionType | null;
    returningEntity?: RetentionEntity | null;
    showTrendLines?: boolean | null;
    targetEntity?: RetentionEntity | null;
    /**
     * The time window mode to use for retention calculations
     */
    timeWindowMode?: TimeWindowMode | null;
    totalIntervals?: number | null;
};

