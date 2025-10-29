/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type CohortPropertyFilter = {
    cohort_name?: string | null;
    key?: CohortPropertyFilter.key;
    label?: string | null;
    operator?: PropertyOperator | null;
    type?: CohortPropertyFilter.type;
    value: number;
};
export namespace CohortPropertyFilter {
    export enum key {
        ID = 'id',
    }
    export enum type {
        COHORT = 'cohort',
    }
}

