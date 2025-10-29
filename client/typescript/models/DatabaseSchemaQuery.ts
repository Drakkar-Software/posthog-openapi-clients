/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaQueryResponse } from './DatabaseSchemaQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type DatabaseSchemaQuery = {
    kind?: DatabaseSchemaQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: DatabaseSchemaQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace DatabaseSchemaQuery {
    export enum kind {
        DATABASE_SCHEMA_QUERY = 'DatabaseSchemaQuery',
    }
}

