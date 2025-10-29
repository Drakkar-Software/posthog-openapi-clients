/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type DatasetItem = {
    readonly id: string;
    dataset: string;
    input?: any;
    output?: any;
    metadata?: any;
    ref_trace_id?: string | null;
    ref_timestamp?: string | null;
    ref_source_id?: string | null;
    deleted?: boolean | null;
    readonly created_at: string;
    readonly updated_at: string | null;
    readonly created_by: UserBasic;
    readonly team: number;
};

