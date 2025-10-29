/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type HogQLPropertyFilter = {
    key: string;
    label?: string | null;
    type?: HogQLPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace HogQLPropertyFilter {
    export enum type {
        HOGQL = 'hogql',
    }
}

