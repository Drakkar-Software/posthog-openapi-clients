/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsPropertyTaxonomyQueryResponse } from './ActorsPropertyTaxonomyQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type ActorsPropertyTaxonomyQuery = {
    groupTypeIndex?: number | null;
    kind?: ActorsPropertyTaxonomyQuery.kind;
    maxPropertyValues?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    properties: Array<string>;
    response?: ActorsPropertyTaxonomyQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ActorsPropertyTaxonomyQuery {
    export enum kind {
        ACTORS_PROPERTY_TAXONOMY_QUERY = 'ActorsPropertyTaxonomyQuery',
    }
}

