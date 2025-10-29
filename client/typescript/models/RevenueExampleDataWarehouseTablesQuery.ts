/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { RevenueExampleDataWarehouseTablesQueryResponse } from './RevenueExampleDataWarehouseTablesQueryResponse';
export type RevenueExampleDataWarehouseTablesQuery = {
    kind?: RevenueExampleDataWarehouseTablesQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    response?: RevenueExampleDataWarehouseTablesQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace RevenueExampleDataWarehouseTablesQuery {
    export enum kind {
        REVENUE_EXAMPLE_DATA_WAREHOUSE_TABLES_QUERY = 'RevenueExampleDataWarehouseTablesQuery',
    }
}

