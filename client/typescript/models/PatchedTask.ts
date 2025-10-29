/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OriginProductEnum } from './OriginProductEnum';
import type { UserBasic } from './UserBasic';
export type PatchedTask = {
    readonly id?: string;
    readonly task_number?: number | null;
    readonly slug?: string;
    title?: string;
    description?: string;
    origin_product?: OriginProductEnum;
    position?: number;
    /**
     * GitHub integration for this task
     */
    github_integration?: number | null;
    /**
     * Repository configuration with organization and repository fields
     */
    repository_config?: any;
    readonly repository_list?: string;
    readonly primary_repository?: string;
    readonly latest_run?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly created_by?: UserBasic;
};

