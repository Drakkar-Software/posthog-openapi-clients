/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaField } from './DatabaseSchemaField';
import type { DatabaseSchemaManagedViewTableKind } from './DatabaseSchemaManagedViewTableKind';
import type { HogQLQuery } from './HogQLQuery';
export type DatabaseSchemaManagedViewTable = {
    fields: Record<string, DatabaseSchemaField>;
    id: string;
    kind: DatabaseSchemaManagedViewTableKind;
    name: string;
    query: HogQLQuery;
    row_count?: number | null;
    source_id?: string | null;
    type?: DatabaseSchemaManagedViewTable.type;
};
export namespace DatabaseSchemaManagedViewTable {
    export enum type {
        MANAGED_VIEW = 'managed_view',
    }
}

