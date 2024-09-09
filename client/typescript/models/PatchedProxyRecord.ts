/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProxyRecordStatusEnum } from './ProxyRecordStatusEnum';
export type PatchedProxyRecord = {
    readonly id?: string;
    domain?: string;
    readonly target_cname?: string;
    readonly status?: ProxyRecordStatusEnum;
    readonly message?: string | null;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly created_by?: number | null;
};

