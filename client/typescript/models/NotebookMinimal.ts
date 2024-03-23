/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type NotebookMinimal = {
    readonly id: string;
    readonly short_id: string;
    readonly title: string | null;
    readonly deleted: boolean;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly last_modified_at: string;
    readonly last_modified_by: UserBasic;
};

