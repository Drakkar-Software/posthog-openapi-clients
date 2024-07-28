/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaBatchExportTable } from './DatabaseSchemaBatchExportTable';
import type { DatabaseSchemaDataWarehouseTable } from './DatabaseSchemaDataWarehouseTable';
import type { DatabaseSchemaPostHogTable } from './DatabaseSchemaPostHogTable';
import type { DatabaseSchemaViewTable } from './DatabaseSchemaViewTable';
export type DatabaseSchemaQueryResponse = {
    tables: Record<string, (DatabaseSchemaPostHogTable | DatabaseSchemaDataWarehouseTable | DatabaseSchemaViewTable | DatabaseSchemaBatchExportTable)>;
};

