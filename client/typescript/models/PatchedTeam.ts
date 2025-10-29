/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseCurrencyEnum } from './BaseCurrencyEnum';
import type { CookielessServerHashModeEnum } from './CookielessServerHashModeEnum';
import type { EffectiveMembershipLevelEnum } from './EffectiveMembershipLevelEnum';
import type { NullEnum } from './NullEnum';
import type { SessionRecordingRetentionPeriodEnum } from './SessionRecordingRetentionPeriodEnum';
import type { TeamMarketingAnalyticsConfig } from './TeamMarketingAnalyticsConfig';
import type { TeamRevenueAnalyticsConfig } from './TeamRevenueAnalyticsConfig';
import type { TimezoneEnum } from './TimezoneEnum';
import type { WeekStartDayEnum } from './WeekStartDayEnum';
export type PatchedTeam = {
    readonly id?: number;
    readonly uuid?: string;
    name?: string;
    access_control?: boolean;
    readonly organization?: string;
    readonly project_id?: number;
    readonly api_token?: string;
    readonly secret_api_token?: string | null;
    readonly secret_api_token_backup?: string | null;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly ingested_event?: boolean;
    readonly default_modifiers?: Record<string, any>;
    readonly person_on_events_querying_enabled?: boolean;
    /**
     * The effective access level the user has for this object
     */
    readonly user_access_level?: string | null;
    app_urls?: Array<string | null>;
    slack_incoming_webhook?: string | null;
    anonymize_ips?: boolean;
    completed_snippet_onboarding?: boolean;
    test_account_filters?: any;
    test_account_filters_default_checked?: boolean | null;
    path_cleaning_filters?: any;
    is_demo?: boolean;
    timezone?: TimezoneEnum;
    data_attributes?: any;
    person_display_name_properties?: Array<string> | null;
    correlation_config?: any;
    autocapture_opt_out?: boolean | null;
    autocapture_exceptions_opt_in?: boolean | null;
    autocapture_web_vitals_opt_in?: boolean | null;
    autocapture_web_vitals_allowed_metrics?: any;
    autocapture_exceptions_errors_to_ignore?: any;
    capture_console_log_opt_in?: boolean | null;
    capture_performance_opt_in?: boolean | null;
    session_recording_opt_in?: boolean;
    session_recording_sample_rate?: string | null;
    session_recording_minimum_duration_milliseconds?: number | null;
    session_recording_linked_flag?: any;
    session_recording_network_payload_capture_config?: any;
    session_recording_masking_config?: any;
    session_recording_url_trigger_config?: Array<any> | null;
    session_recording_url_blocklist_config?: Array<any> | null;
    session_recording_event_trigger_config?: Array<string | null> | null;
    session_recording_trigger_match_type_config?: string | null;
    session_recording_retention_period?: SessionRecordingRetentionPeriodEnum;
    session_replay_config?: any;
    survey_config?: any;
    week_start_day?: (WeekStartDayEnum | NullEnum) | null;
    primary_dashboard?: number | null;
    live_events_columns?: Array<string> | null;
    recording_domains?: Array<string | null> | null;
    cookieless_server_hash_mode?: (CookielessServerHashModeEnum | NullEnum) | null;
    human_friendly_comparison_periods?: boolean | null;
    inject_web_apps?: boolean | null;
    extra_settings?: any;
    modifiers?: any;
    has_completed_onboarding_for?: any;
    surveys_opt_in?: boolean | null;
    heatmaps_opt_in?: boolean | null;
    flags_persistence_default?: boolean | null;
    feature_flag_confirmation_enabled?: boolean | null;
    feature_flag_confirmation_message?: string | null;
    /**
     * Whether to automatically apply default evaluation environments to new feature flags
     */
    default_evaluation_environments_enabled?: boolean | null;
    capture_dead_clicks?: boolean | null;
    default_data_theme?: number | null;
    revenue_analytics_config?: TeamRevenueAnalyticsConfig;
    marketing_analytics_config?: TeamMarketingAnalyticsConfig;
    onboarding_tasks?: any;
    base_currency?: BaseCurrencyEnum;
    web_analytics_pre_aggregated_tables_enabled?: boolean | null;
    /**
     * Time of day (UTC) when experiment metrics should be recalculated. If not set, uses the default recalculation time.
     */
    experiment_recalculation_time?: string | null;
    readonly effective_membership_level?: EffectiveMembershipLevelEnum | null;
    readonly has_group_types?: boolean;
    readonly group_types?: Array<Record<string, any>>;
    readonly live_events_token?: string | null;
    readonly product_intents?: string;
    readonly managed_viewsets?: string;
};

