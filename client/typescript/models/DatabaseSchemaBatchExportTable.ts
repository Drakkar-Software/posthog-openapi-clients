/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaField } from './DatabaseSchemaField';
export type DatabaseSchemaBatchExportTable = {
    fields: Record<string, DatabaseSchemaField>;
    id: string;
    name: string;
    row_count?: number | null;
    type?: DatabaseSchemaBatchExportTable.type;
};
export namespace DatabaseSchemaBatchExportTable {
    export enum type {
        BATCH_EXPORT = 'batch_export',
    }
}

