/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type PersonPropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    /**
     * Person properties
     */
    type?: PersonPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace PersonPropertyFilter {
    /**
     * Person properties
     */
    export enum type {
        PERSON = 'person',
    }
}

