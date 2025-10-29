/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type FlagPropertyFilter = {
    /**
     * The key should be the flag ID
     */
    key: string;
    label?: string | null;
    /**
     * Only flag_evaluates_to operator is allowed for flag dependencies
     */
    operator?: FlagPropertyFilter.operator;
    /**
     * Feature flag dependency
     */
    type?: FlagPropertyFilter.type;
    /**
     * The value can be true, false, or a variant name
     */
    value: (boolean | string);
};
export namespace FlagPropertyFilter {
    /**
     * Only flag_evaluates_to operator is allowed for flag dependencies
     */
    export enum operator {
        FLAG_EVALUATES_TO = 'flag_evaluates_to',
    }
    /**
     * Feature flag dependency
     */
    export enum type {
        FLAG = 'flag',
    }
}

