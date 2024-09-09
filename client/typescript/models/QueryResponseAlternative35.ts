/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaBatchExportTable } from './DatabaseSchemaBatchExportTable';
import type { DatabaseSchemaDataWarehouseTable } from './DatabaseSchemaDataWarehouseTable';
import type { DatabaseSchemaPostHogTable } from './DatabaseSchemaPostHogTable';
import type { DatabaseSchemaViewTable } from './DatabaseSchemaViewTable';
export type QueryResponseAlternative35 = {
    tables: Record<string, (DatabaseSchemaPostHogTable | DatabaseSchemaDataWarehouseTable | DatabaseSchemaViewTable | DatabaseSchemaBatchExportTable)>;
};

