/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RetentionValue } from './RetentionValue';
export type RetentionResult = {
    /**
     * Optional breakdown value for retention cohorts
     */
    breakdown_value?: (string | number) | null;
    date: string;
    label: string;
    values: Array<RetentionValue>;
};

