/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaField } from './DatabaseSchemaField';
export type DatabaseSchemaSystemTable = {
    fields: Record<string, DatabaseSchemaField>;
    id: string;
    name: string;
    row_count?: number | null;
    type?: DatabaseSchemaSystemTable.type;
};
export namespace DatabaseSchemaSystemTable {
    export enum type {
        SYSTEM = 'system',
    }
}

