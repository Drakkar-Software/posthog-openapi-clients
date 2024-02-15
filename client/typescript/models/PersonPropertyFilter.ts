/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type PersonPropertyFilter = {
    key: string;
    label?: (string | null);
    operator: PropertyOperator;
    /**
     * Person properties
     */
    type?: any;
    value?: (string | number | null);
};

