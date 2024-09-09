/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
import type { UserBasic } from './UserBasic';
export type PatchedExperiment = {
    readonly id?: number;
    name?: string;
    description?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    feature_flag_key?: string;
    readonly feature_flag?: MinimalFeatureFlag;
    readonly exposure_cohort?: number | null;
    parameters?: any;
    secondary_metrics?: any;
    filters?: any;
    archived?: boolean;
    readonly created_by?: UserBasic;
    readonly created_at?: string;
    readonly updated_at?: string;
};

