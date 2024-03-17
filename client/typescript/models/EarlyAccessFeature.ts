/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
import type { StageEnum } from './StageEnum';
export type EarlyAccessFeature = {
    readonly id: string;
    readonly feature_flag: MinimalFeatureFlag;
    name: string;
    description?: string;
    stage: StageEnum;
    documentation_url?: string;
    readonly created_at: string;
};

