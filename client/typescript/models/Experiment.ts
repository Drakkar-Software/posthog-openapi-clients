/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { ConclusionEnum } from './ConclusionEnum';
import type { ExperimentHoldout } from './ExperimentHoldout';
import type { ExperimentToSavedMetric } from './ExperimentToSavedMetric';
import type { ExperimentTypeEnum } from './ExperimentTypeEnum';
import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
import type { NullEnum } from './NullEnum';
import type { UserBasic } from './UserBasic';
/**
 * Mixin for serializers to add user access control fields
 */
export type Experiment = {
    readonly id: number;
    name: string;
    description?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    feature_flag_key: string;
    readonly feature_flag: MinimalFeatureFlag;
    readonly holdout: ExperimentHoldout;
    holdout_id?: number | null;
    readonly exposure_cohort: number | null;
    parameters?: any;
    secondary_metrics?: any;
    readonly saved_metrics: Array<ExperimentToSavedMetric>;
    saved_metrics_ids?: Array<any> | null;
    filters?: any;
    archived?: boolean;
    deleted?: boolean | null;
    readonly created_by: UserBasic;
    readonly created_at: string;
    readonly updated_at: string;
    type?: (ExperimentTypeEnum | BlankEnum | NullEnum) | null;
    exposure_criteria?: any;
    metrics?: any;
    metrics_secondary?: any;
    stats_config?: any;
    _create_in_folder?: string;
    conclusion?: (ConclusionEnum | BlankEnum | NullEnum) | null;
    conclusion_comment?: string | null;
    primary_metrics_ordered_uuids?: any;
    secondary_metrics_ordered_uuids?: any;
    /**
     * The effective access level the user has for this object
     */
    readonly user_access_level: string | null;
};

