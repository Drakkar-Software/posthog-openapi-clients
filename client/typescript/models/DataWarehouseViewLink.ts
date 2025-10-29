/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataWarehouseViewLinkConfiguration } from './DataWarehouseViewLinkConfiguration';
import type { UserBasicType } from './UserBasicType';
export type DataWarehouseViewLink = {
    configuration?: DataWarehouseViewLinkConfiguration | null;
    created_at?: string | null;
    created_by?: UserBasicType | null;
    field_name?: string | null;
    id: string;
    joining_table_key?: string | null;
    joining_table_name?: string | null;
    source_table_key?: string | null;
    source_table_name?: string | null;
};

