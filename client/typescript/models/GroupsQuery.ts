/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupPropertyFilter } from './GroupPropertyFilter';
import type { GroupsQueryResponse } from './GroupsQueryResponse';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type GroupsQuery = {
    group_type_index: number;
    kind?: GroupsQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    orderBy?: Array<string> | null;
    properties?: Array<(GroupPropertyFilter | HogQLPropertyFilter)> | null;
    response?: GroupsQueryResponse | null;
    search?: string | null;
    select?: Array<string> | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace GroupsQuery {
    export enum kind {
        GROUPS_QUERY = 'GroupsQuery',
    }
}

