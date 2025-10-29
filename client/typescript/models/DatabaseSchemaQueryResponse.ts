/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaBatchExportTable } from './DatabaseSchemaBatchExportTable';
import type { DatabaseSchemaDataWarehouseTable } from './DatabaseSchemaDataWarehouseTable';
import type { DatabaseSchemaManagedViewTable } from './DatabaseSchemaManagedViewTable';
import type { DatabaseSchemaMaterializedViewTable } from './DatabaseSchemaMaterializedViewTable';
import type { DatabaseSchemaPostHogTable } from './DatabaseSchemaPostHogTable';
import type { DatabaseSchemaSystemTable } from './DatabaseSchemaSystemTable';
import type { DatabaseSchemaViewTable } from './DatabaseSchemaViewTable';
import type { DataWarehouseViewLink } from './DataWarehouseViewLink';
export type DatabaseSchemaQueryResponse = {
    joins: Array<DataWarehouseViewLink>;
    tables: Record<string, (DatabaseSchemaPostHogTable | DatabaseSchemaSystemTable | DatabaseSchemaDataWarehouseTable | DatabaseSchemaViewTable | DatabaseSchemaManagedViewTable | DatabaseSchemaBatchExportTable | DatabaseSchemaMaterializedViewTable)>;
};

