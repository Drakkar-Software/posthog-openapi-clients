/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type LogEntryPropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: LogEntryPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace LogEntryPropertyFilter {
    export enum type {
        LOG_ENTRY = 'log_entry',
    }
}

