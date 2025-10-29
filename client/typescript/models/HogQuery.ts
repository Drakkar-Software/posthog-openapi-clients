/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { HogQueryResponse } from './HogQueryResponse';
import type { QueryLogTags } from './QueryLogTags';
export type HogQuery = {
    code?: string | null;
    kind?: HogQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: HogQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace HogQuery {
    export enum kind {
        HOG_QUERY = 'HogQuery',
    }
}

