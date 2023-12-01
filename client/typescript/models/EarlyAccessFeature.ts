/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MinimalFeatureFlag } from './MinimalFeatureFlag';

export type EarlyAccessFeature = {
    readonly id: string;
    readonly feature_flag: MinimalFeatureFlag;
    name: string;
    description?: string;
    stage: EarlyAccessFeature.stage;
    documentation_url?: string;
    readonly created_at: string;
};

export namespace EarlyAccessFeature {

    export enum stage {
        DRAFT = 'draft',
        CONCEPT = 'concept',
        ALPHA = 'alpha',
        BETA = 'beta',
        GENERAL_AVAILABILITY = 'general-availability',
        ARCHIVED = 'archived',
    }


}

