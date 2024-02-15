/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type FeaturePropertyFilter = {
    key: string;
    label?: (string | null);
    operator: PropertyOperator;
    /**
     * Event property with "$feature/" prepended
     */
    type?: any;
    value?: (string | number | null);
};

