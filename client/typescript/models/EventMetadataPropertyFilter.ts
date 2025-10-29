/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type EventMetadataPropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: EventMetadataPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace EventMetadataPropertyFilter {
    export enum type {
        EVENT_METADATA = 'event_metadata',
    }
}

