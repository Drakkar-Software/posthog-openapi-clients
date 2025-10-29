/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type GroupPropertyFilter = {
    group_type_index?: number | null;
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: GroupPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace GroupPropertyFilter {
    export enum type {
        GROUP = 'group',
    }
}

