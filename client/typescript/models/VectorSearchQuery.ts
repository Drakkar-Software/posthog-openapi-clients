/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { VectorSearchQueryResponse } from './VectorSearchQueryResponse';
export type VectorSearchQuery = {
    embedding: Array<number>;
    embeddingVersion?: number | null;
    kind?: VectorSearchQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: VectorSearchQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace VectorSearchQuery {
    export enum kind {
        VECTOR_SEARCH_QUERY = 'VectorSearchQuery',
    }
}

