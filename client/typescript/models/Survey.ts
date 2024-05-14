/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
import type { Type7baEnum } from './Type7baEnum';
import type { UserBasic } from './UserBasic';
export type Survey = {
    readonly id: string;
    name: string;
    description?: string;
    type: Type7baEnum;
    readonly linked_flag: MinimalFeatureFlag;
    linked_flag_id?: number | null;
    readonly targeting_flag: MinimalFeatureFlag;
    questions?: any;
    conditions?: any;
    appearance?: any;
    readonly created_at: string;
    readonly created_by: UserBasic;
    start_date?: string | null;
    end_date?: string | null;
    archived?: boolean;
    responses_limit?: number | null;
};

