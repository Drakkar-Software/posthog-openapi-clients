/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EffectiveMembershipLevelEnum } from './EffectiveMembershipLevelEnum';
import type { NullEnum } from './NullEnum';
import type { TimezoneEnum } from './TimezoneEnum';
import type { WeekStartDayEnum } from './WeekStartDayEnum';
export type PatchedTeam = {
    readonly id?: number;
    readonly uuid?: string;
    readonly organization?: string;
    readonly api_token?: string;
    app_urls?: Array<string | null>;
    name?: string;
    slack_incoming_webhook?: string | null;
    readonly created_at?: string;
    readonly updated_at?: string;
    anonymize_ips?: boolean;
    completed_snippet_onboarding?: boolean;
    readonly ingested_event?: boolean;
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
    autocapture_exceptions_errors_to_ignore?: any;
    capture_console_log_opt_in?: boolean | null;
    capture_performance_opt_in?: boolean | null;
    session_recording_opt_in?: boolean;
    session_recording_sample_rate?: string | null;
    session_recording_minimum_duration_milliseconds?: number | null;
    session_recording_linked_flag?: any;
    session_recording_network_payload_capture_config?: any;
    session_replay_config?: any;
    readonly effective_membership_level?: EffectiveMembershipLevelEnum | null;
    access_control?: boolean;
    week_start_day?: (WeekStartDayEnum | NullEnum) | null;
    readonly has_group_types?: boolean;
    primary_dashboard?: number | null;
    live_events_columns?: Array<string> | null;
    recording_domains?: Array<string | null> | null;
    readonly person_on_events_querying_enabled?: boolean;
    readonly groups_on_events_querying_enabled?: boolean;
    inject_web_apps?: boolean | null;
    extra_settings?: any;
    modifiers?: any;
    readonly default_modifiers?: Record<string, any>;
    has_completed_onboarding_for?: any;
    surveys_opt_in?: boolean | null;
    heatmaps_opt_in?: boolean | null;
};

