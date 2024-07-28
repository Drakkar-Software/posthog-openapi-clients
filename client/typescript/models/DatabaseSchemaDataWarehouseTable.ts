/* generated using openapi-typescript-codegen -- do no edit */
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
    schema?: (DatabaseSchemaSchema | null);
    source?: (DatabaseSchemaSource | null);
    type?: any;
    url_pattern: string;
};

