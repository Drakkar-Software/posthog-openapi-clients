/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PropertyItem = {
    /**
     * Key of the property you're filtering on. For example `email` or `$current_url`
     */
    key: string;
    /**
     * Value of your filter. For example `test@example.com` or `https://example.com/test/`. Can be an array for an OR query, like `["test@example.com","ok@example.com"]`
     */
    value: string;
    operator?: PropertyItem.operator | null;
    type?: PropertyItem.type;
};

export namespace PropertyItem {

    export enum operator {
        EXACT = 'exact',
        IS_NOT = 'is_not',
        ICONTAINS = 'icontains',
        NOT_ICONTAINS = 'not_icontains',
        REGEX = 'regex',
        NOT_REGEX = 'not_regex',
        GT = 'gt',
        LT = 'lt',
        GTE = 'gte',
        LTE = 'lte',
        IS_SET = 'is_set',
        IS_NOT_SET = 'is_not_set',
        IS_DATE_EXACT = 'is_date_exact',
        IS_DATE_AFTER = 'is_date_after',
        IS_DATE_BEFORE = 'is_date_before',
        IS_RELATIVE_DATE_AFTER = 'is_relative_date_after',
        IS_RELATIVE_DATE_BEFORE = 'is_relative_date_before',
    }

    export enum type {
        EVENT = 'event',
        PERSON = 'person',
        COHORT = 'cohort',
        ELEMENT = 'element',
        STATIC_COHORT = 'static-cohort',
        PRECALCULATED_COHORT = 'precalculated-cohort',
        GROUP = 'group',
        RECORDING = 'recording',
        BEHAVIORAL = 'behavioral',
        SESSION = 'session',
        HOGQL = 'hogql',
    }


}

