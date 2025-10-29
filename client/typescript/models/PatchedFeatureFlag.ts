/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { CreationContextEnum } from './CreationContextEnum';
import type { EvaluationRuntimeEnum } from './EvaluationRuntimeEnum';
import type { NullEnum } from './NullEnum';
import type { UserBasic } from './UserBasic';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type PatchedFeatureFlag = {
    readonly id?: number;
    /**
     * contains the description for the flag (field name `name` is kept for backwards-compatibility)
     */
    name?: string;
    key?: string;
    filters?: Record<string, any>;
    deleted?: boolean;
    active?: boolean;
    readonly created_by?: UserBasic;
    created_at?: string;
    readonly updated_at?: string | null;
    version?: number;
    readonly last_modified_by?: UserBasic;
    readonly is_simple_flag?: boolean;
    readonly rollout_percentage?: number | null;
    ensure_experience_continuity?: boolean | null;
    readonly experiment_set?: string;
    readonly surveys?: Record<string, any>;
    readonly features?: Record<string, any>;
    rollback_conditions?: any;
    performed_rollback?: boolean | null;
    readonly can_edit?: boolean;
    tags?: Array<any>;
    evaluation_tags?: Array<any>;
    readonly usage_dashboard?: number;
    analytics_dashboards?: Array<number>;
    has_enriched_analytics?: boolean | null;
    /**
     * The effective access level the user has for this object
     */
    readonly user_access_level?: string | null;
    /**
     * Indicates the origin product of the feature flag. Choices: 'feature_flags', 'experiments', 'surveys', 'early_access_features', 'web_experiments'.
     *
     * * `feature_flags` - feature_flags
     * * `experiments` - experiments
     * * `surveys` - surveys
     * * `early_access_features` - early_access_features
     * * `web_experiments` - web_experiments
     */
    creation_context?: CreationContextEnum;
    is_remote_configuration?: boolean | null;
    has_encrypted_payloads?: boolean | null;
    readonly status?: string;
    /**
     * Specifies where this feature flag should be evaluated
     *
     * * `server` - Server
     * * `client` - Client
     * * `all` - All
     */
    evaluation_runtime?: (EvaluationRuntimeEnum | BlankEnum | NullEnum) | null;
    /**
     * Last time this feature flag was called (from $feature_flag_called events)
     */
    last_called_at?: string | null;
    _create_in_folder?: string;
    _should_create_usage_dashboard?: boolean;
};

