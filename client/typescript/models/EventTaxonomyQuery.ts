/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventTaxonomyQueryResponse } from './EventTaxonomyQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type EventTaxonomyQuery = {
    actionId?: number | null;
    event?: string | null;
    kind?: EventTaxonomyQuery.kind;
    maxPropertyValues?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    properties?: Array<string> | null;
    response?: EventTaxonomyQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace EventTaxonomyQuery {
    export enum kind {
        EVENT_TAXONOMY_QUERY = 'EventTaxonomyQuery',
    }
}

