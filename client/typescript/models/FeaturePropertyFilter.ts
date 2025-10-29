/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type FeaturePropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    /**
     * Event property with "$feature/" prepended
     */
    type?: FeaturePropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace FeaturePropertyFilter {
    /**
     * Event property with "$feature/" prepended
     */
    export enum type {
        FEATURE = 'feature',
    }
}

