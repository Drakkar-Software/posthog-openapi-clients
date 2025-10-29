/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Key } from './Key';
import type { PropertyOperator } from './PropertyOperator';
export type ElementPropertyFilter = {
    key: Key;
    label?: string | null;
    operator: PropertyOperator;
    type?: ElementPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace ElementPropertyFilter {
    export enum type {
        ELEMENT = 'element',
    }
}

