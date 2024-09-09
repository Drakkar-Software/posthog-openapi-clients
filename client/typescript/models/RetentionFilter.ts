/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetentionEntity } from './RetentionEntity';
import type { RetentionPeriod } from './RetentionPeriod';
import type { RetentionReference } from './RetentionReference';
import type { RetentionType } from './RetentionType';
export type RetentionFilter = {
    cumulative?: (boolean | null);
    period?: (RetentionPeriod | null);
    retentionReference?: (RetentionReference | null);
    retentionType?: (RetentionType | null);
    returningEntity?: (RetentionEntity | null);
    showMean?: (boolean | null);
    targetEntity?: (RetentionEntity | null);
    totalIntervals?: (number | null);
};

