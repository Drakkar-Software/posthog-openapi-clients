/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaField } from './DatabaseSchemaField';
import type { DatabaseSchemaSchema } from './DatabaseSchemaSchema';
import type { DatabaseSchemaSource } from './DatabaseSchemaSource';
export type DatabaseSchemaDataWarehouseTable = {
    fields: Record<string, DatabaseSchemaField>;
    format: string;
    id: string;
    name: string;
    row_count?: number | null;
    schema?: DatabaseSchemaSchema | null;
    source?: DatabaseSchemaSource | null;
    type?: DatabaseSchemaDataWarehouseTable.type;
    url_pattern: string;
};
export namespace DatabaseSchemaDataWarehouseTable {
    export enum type {
        DATA_WAREHOUSE = 'data_warehouse',
    }
}

