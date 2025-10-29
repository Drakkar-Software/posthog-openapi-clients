/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { DefaultExperimentStatsMethodEnum } from './DefaultExperimentStatsMethodEnum';
import type { MembershipLevelEnum } from './MembershipLevelEnum';
import type { NullEnum } from './NullEnum';
import type { PluginsAccessLevelEnum } from './PluginsAccessLevelEnum';
export type Organization = {
    readonly id: string;
    name: string;
    readonly slug: string;
    logo_media_id?: string | null;
    readonly created_at: string;
    readonly updated_at: string;
    readonly membership_level: MembershipLevelEnum | null;
    readonly plugins_access_level: PluginsAccessLevelEnum;
    readonly teams: Array<Record<string, any>>;
    readonly projects: Array<Record<string, any>>;
    readonly available_product_features: Array<any> | null;
    is_member_join_email_enabled?: boolean;
    readonly metadata: string;
    readonly customer_id: string | null;
    enforce_2fa?: boolean | null;
    members_can_invite?: boolean | null;
    members_can_use_personal_api_keys?: boolean;
    allow_publicly_shared_resources?: boolean;
    readonly member_count: string;
    is_ai_data_processing_approved?: boolean | null;
    /**
     * Default statistical method for new experiments in this organization.
     *
     * * `bayesian` - Bayesian
     * * `frequentist` - Frequentist
     */
    default_experiment_stats_method?: (DefaultExperimentStatsMethodEnum | BlankEnum | NullEnum) | null;
    /**
     * ID of the role to automatically assign to new members joining the organization
     */
    default_role_id?: string | null;
};

