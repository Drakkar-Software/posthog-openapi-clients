/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLFilters } from './HogQLFilters';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { HogQLQueryResponse } from './HogQLQueryResponse';
import type { HogQLVariable } from './HogQLVariable';
import type { QueryLogTags } from './QueryLogTags';
export type HogQLQuery = {
    explain?: boolean | null;
    filters?: HogQLFilters | null;
    kind?: HogQLQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Client provided name of the query
     */
    name?: string | null;
    query: string;
    response?: HogQLQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * Constant values that can be referenced with the {placeholder} syntax in the query
     */
    values?: Record<string, any> | null;
    /**
     * Variables to be substituted into the query
     */
    variables?: Record<string, HogQLVariable> | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace HogQLQuery {
    export enum kind {
        HOG_QLQUERY = 'HogQLQuery',
    }
}

