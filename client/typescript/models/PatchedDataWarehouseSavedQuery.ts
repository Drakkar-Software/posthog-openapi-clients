/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataWarehouseSavedQueryStatusEnum } from './DataWarehouseSavedQueryStatusEnum';
import type { NullEnum } from './NullEnum';
import type { UserBasic } from './UserBasic';
export type PatchedDataWarehouseSavedQuery = {
    readonly id?: string;
    deleted?: boolean | null;
    name?: string;
    /**
     * HogQL query
     */
    query?: any;
    readonly created_by?: UserBasic;
    readonly created_at?: string;
    readonly sync_frequency?: string;
    readonly columns?: string;
    /**
     * The status of when this SavedQuery last ran.
     *
     * * `Cancelled` - Cancelled
     * * `Modified` - Modified
     * * `Completed` - Completed
     * * `Failed` - Failed
     * * `Running` - Running
     */
    readonly status?: (DataWarehouseSavedQueryStatusEnum | NullEnum) | null;
    readonly last_run_at?: string | null;
    readonly latest_error?: string | null;
    edited_history_id?: string | null;
    readonly latest_history_id?: string;
    soft_update?: boolean | null;
    readonly is_materialized?: boolean | null;
};

