/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type Notebook = {
    readonly id: string;
    readonly short_id: string;
    title?: string | null;
    content?: any;
    text_content?: string | null;
    version?: number;
    deleted?: boolean;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly last_modified_at: string;
    readonly last_modified_by: UserBasic;
};

