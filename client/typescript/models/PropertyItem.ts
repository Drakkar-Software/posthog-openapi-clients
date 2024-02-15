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
    /**
     * * `exact` - exact
     * * `is_not` - is_not
     * * `icontains` - icontains
     * * `not_icontains` - not_icontains
     * * `regex` - regex
     * * `not_regex` - not_regex
     * * `gt` - gt
     * * `lt` - lt
     * * `gte` - gte
     * * `lte` - lte
     * * `is_set` - is_set
     * * `is_not_set` - is_not_set
     * * `is_date_exact` - is_date_exact
     * * `is_date_after` - is_date_after
     * * `is_date_before` - is_date_before
     */
    operator?: PropertyItem.operator | null;
    /**
     * * `event` - event
     * * `person` - person
     * * `cohort` - cohort
     * * `element` - element
     * * `static-cohort` - static-cohort
     * * `precalculated-cohort` - precalculated-cohort
     * * `group` - group
     * * `recording` - recording
     * * `behavioral` - behavioral
     * * `session` - session
     * * `hogql` - hogql
     */
    type?: PropertyItem.type;
};
export namespace PropertyItem {
    /**
     * * `exact` - exact
     * * `is_not` - is_not
     * * `icontains` - icontains
     * * `not_icontains` - not_icontains
     * * `regex` - regex
     * * `not_regex` - not_regex
     * * `gt` - gt
     * * `lt` - lt
     * * `gte` - gte
     * * `lte` - lte
     * * `is_set` - is_set
     * * `is_not_set` - is_not_set
     * * `is_date_exact` - is_date_exact
     * * `is_date_after` - is_date_after
     * * `is_date_before` - is_date_before
     */
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
        
    }
    /**
     * * `event` - event
     * * `person` - person
     * * `cohort` - cohort
     * * `element` - element
     * * `static-cohort` - static-cohort
     * * `precalculated-cohort` - precalculated-cohort
     * * `group` - group
     * * `recording` - recording
     * * `behavioral` - behavioral
     * * `session` - session
     * * `hogql` - hogql
     */
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

