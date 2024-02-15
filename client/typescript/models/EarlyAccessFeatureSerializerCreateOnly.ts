/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
export type EarlyAccessFeatureSerializerCreateOnly = {
    readonly id: string;
    name: string;
    description?: string;
    /**
     * * `draft` - draft
     * * `concept` - concept
     * * `alpha` - alpha
     * * `beta` - beta
     * * `general-availability` - general availability
     * * `archived` - archived
     */
    stage: EarlyAccessFeatureSerializerCreateOnly.stage;
    documentation_url?: string;
    readonly created_at: string;
    feature_flag_id?: number;
    readonly feature_flag: MinimalFeatureFlag;
};
export namespace EarlyAccessFeatureSerializerCreateOnly {
    /**
     * * `draft` - draft
     * * `concept` - concept
     * * `alpha` - alpha
     * * `beta` - beta
     * * `general-availability` - general availability
     * * `archived` - archived
     */
    export enum stage {
        DRAFT = 'draft',
        CONCEPT = 'concept',
        ALPHA = 'alpha',
        BETA = 'beta',
        GENERAL_AVAILABILITY = 'general-availability',
        ARCHIVED = 'archived',
    }
}

