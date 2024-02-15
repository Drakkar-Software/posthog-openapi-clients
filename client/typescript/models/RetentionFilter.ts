/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetentionEntity } from './RetentionEntity';
import type { RetentionPeriod } from './RetentionPeriod';
import type { RetentionReference } from './RetentionReference';
import type { RetentionType } from './RetentionType';
export type RetentionFilter = {
    period?: (RetentionPeriod | null);
    retentionReference?: (RetentionReference | null);
    retentionType?: (RetentionType | null);
    returningEntity?: (RetentionEntity | null);
    targetEntity?: (RetentionEntity | null);
    totalIntervals?: (number | null);
};

