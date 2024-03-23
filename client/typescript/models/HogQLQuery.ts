/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLFilters } from './HogQLFilters';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { HogQLQueryResponse } from './HogQLQueryResponse';
export type HogQLQuery = {
    explain?: (boolean | null);
    filters?: (HogQLFilters | null);
    kind?: any;
    modifiers?: (HogQLQueryModifiers | null);
    query: string;
    /**
     * Cached query response
     */
    response?: (HogQLQueryResponse | null);
    /**
     * Constant values that can be referenced with the {placeholder} syntax in the query
     */
    values?: (Record<string, any> | null);
};

