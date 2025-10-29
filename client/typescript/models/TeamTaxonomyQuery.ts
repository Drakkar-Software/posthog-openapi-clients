/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { TeamTaxonomyQueryResponse } from './TeamTaxonomyQueryResponse';
export type TeamTaxonomyQuery = {
    kind?: TeamTaxonomyQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: TeamTaxonomyQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace TeamTaxonomyQuery {
    export enum kind {
        TEAM_TAXONOMY_QUERY = 'TeamTaxonomyQuery',
    }
}

