/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type EventPropertyFilter = {
    key: string;
    label?: string | null;
    operator?: PropertyOperator | null;
    /**
     * Event properties
     */
    type?: EventPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace EventPropertyFilter {
    /**
     * Event properties
     */
    export enum type {
        EVENT = 'event',
    }
}

