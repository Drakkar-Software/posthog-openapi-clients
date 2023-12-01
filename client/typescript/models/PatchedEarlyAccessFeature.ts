/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MinimalFeatureFlag } from './MinimalFeatureFlag';

export type PatchedEarlyAccessFeature = {
    readonly id?: string;
    readonly feature_flag?: MinimalFeatureFlag;
    name?: string;
    description?: string;
    stage?: PatchedEarlyAccessFeature.stage;
    documentation_url?: string;
    readonly created_at?: string;
};

export namespace PatchedEarlyAccessFeature {

    export enum stage {
        DRAFT = 'draft',
        CONCEPT = 'concept',
        ALPHA = 'alpha',
        BETA = 'beta',
        GENERAL_AVAILABILITY = 'general-availability',
        ARCHIVED = 'archived',
    }


}

