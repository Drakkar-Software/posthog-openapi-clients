/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type PatchedDataset = {
    readonly id?: string;
    name?: string;
    description?: string | null;
    metadata?: any;
    readonly created_at?: string;
    readonly updated_at?: string | null;
    deleted?: boolean | null;
    readonly created_by?: UserBasic;
    readonly team?: number;
};

