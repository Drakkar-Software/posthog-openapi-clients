/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EffectiveMembershipLevelEnum } from './EffectiveMembershipLevelEnum';
import type { NullEnum } from './NullEnum';
import type { TimezoneEnum } from './TimezoneEnum';
import type { WeekStartDayEnum } from './WeekStartDayEnum';
/**
 * Like `ProjectBasicSerializer`, but also works as a drop-in replacement for `TeamBasicSerializer` by way of
 * passthrough fields. This allows the meaning of `Team` to change from "project" to "environment" without breaking
 * backward compatibility of the REST API.
 * Do not use this in greenfield endpoints!
 */
export type ProjectBackwardCompat = {
    readonly id: number;
    readonly organization: string;
    name?: string;
    product_description?: string | null;
    readonly created_at: string;
    readonly effective_membership_level: EffectiveMembershipLevelEnum | null;
    readonly has_group_types: boolean;
    readonly group_types: Array<Record<string, any>>;
    readonly live_events_token: string | null;
    readonly updated_at: string;
    readonly uuid: string;
    readonly api_token: string;
    app_urls?: Array<string | null>;
    slack_incoming_webhook?: string | null;
    anonymize_ips?: boolean;
    completed_snippet_onboarding?: boolean;
    readonly ingested_event: boolean;
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
    session_replay_config?: any;
    survey_config?: any;
    access_control?: boolean;
    week_start_day?: (WeekStartDayEnum | NullEnum) | null;
    primary_dashboard?: number | null;
    live_events_columns?: Array<string> | null;
    recording_domains?: Array<string | null> | null;
    readonly person_on_events_querying_enabled: string;
    inject_web_apps?: boolean | null;
    extra_settings?: any;
    modifiers?: any;
    readonly default_modifiers: string;
    has_completed_onboarding_for?: any;
    surveys_opt_in?: boolean | null;
    heatmaps_opt_in?: boolean | null;
    readonly product_intents: string;
    flags_persistence_default?: boolean | null;
    readonly secret_api_token: string | null;
    readonly secret_api_token_backup: string | null;
};

