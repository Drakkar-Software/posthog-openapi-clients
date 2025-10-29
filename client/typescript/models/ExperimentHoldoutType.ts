/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureFlagGroupType } from './FeatureFlagGroupType';
import type { UserBasicType } from './UserBasicType';
export type ExperimentHoldoutType = {
    created_at?: string | null;
    created_by?: UserBasicType | null;
    description?: string | null;
    filters: Array<FeatureFlagGroupType>;
    id?: number | null;
    name: string;
    updated_at?: string | null;
};

