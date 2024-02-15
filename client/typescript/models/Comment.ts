/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type Comment = {
    readonly id: string;
    readonly created_by: UserBasic;
    content?: string | null;
    readonly version: number;
    readonly created_at: string;
    deleted?: boolean | null;
    item_id?: string | null;
    item_context?: any;
    scope: string;
    source_comment?: string | null;
};

