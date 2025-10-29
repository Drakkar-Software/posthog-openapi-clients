/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type LogPropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: LogPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace LogPropertyFilter {
    export enum type {
        LOG = 'log',
    }
}

