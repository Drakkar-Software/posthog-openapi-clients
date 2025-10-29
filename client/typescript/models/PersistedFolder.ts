/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersistedFolderTypeEnum } from './PersistedFolderTypeEnum';
export type PersistedFolder = {
    readonly id: string;
    type: PersistedFolderTypeEnum;
    protocol?: string;
    path?: string;
    readonly created_at: string;
    readonly updated_at: string;
};

