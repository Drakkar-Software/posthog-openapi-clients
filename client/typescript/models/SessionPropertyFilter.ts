/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type SessionPropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: SessionPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace SessionPropertyFilter {
    export enum type {
        SESSION = 'session',
    }
}

