/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaField } from './DatabaseSchemaField';
import type { HogQLQuery } from './HogQLQuery';
export type DatabaseSchemaMaterializedViewTable = {
    fields: Record<string, DatabaseSchemaField>;
    id: string;
    last_run_at?: string | null;
    name: string;
    query: HogQLQuery;
    row_count?: number | null;
    status?: string | null;
    type?: DatabaseSchemaMaterializedViewTable.type;
};
export namespace DatabaseSchemaMaterializedViewTable {
    export enum type {
        MATERIALIZED_VIEW = 'materialized_view',
    }
}

