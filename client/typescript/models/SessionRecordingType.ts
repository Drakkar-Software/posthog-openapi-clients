/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MatchedRecording } from './MatchedRecording';
import type { PersonType } from './PersonType';
import type { SnapshotSource } from './SnapshotSource';
import type { Storage } from './Storage';
export type SessionRecordingType = {
    active_seconds?: number | null;
    /**
     * calculated on the backend so that we can sort by it, definition may change over time
     */
    activity_score?: number | null;
    click_count?: number | null;
    console_error_count?: number | null;
    console_log_count?: number | null;
    console_warn_count?: number | null;
    distinct_id?: string | null;
    email?: string | null;
    /**
     * When the recording ends in ISO format.
     */
    end_time: string;
    /**
     * When the recording expires, in ISO format.
     */
    expiry_time?: string | null;
    id: string;
    inactive_seconds?: number | null;
    keypress_count?: number | null;
    /**
     * List of matching events. *
     */
    matching_events?: Array<MatchedRecording> | null;
    /**
     * count of all mouse activity in the recording, not just clicks
     */
    mouse_activity_count?: number | null;
    /**
     * whether we have received data for this recording in the last 5 minutes (assumes the recording was loaded from ClickHouse)
     * *
     */
    ongoing?: boolean | null;
    person?: PersonType | null;
    /**
     * Length of recording in seconds.
     */
    recording_duration: number;
    /**
     * Number of whole days left until the recording expires.
     */
    recording_ttl?: number | null;
    /**
     * retention period for this recording
     */
    retention_period_days?: number | null;
    snapshot_source: SnapshotSource;
    /**
     * When the recording starts in ISO format.
     */
    start_time: string;
    start_url?: string | null;
    /**
     * Where this recording information was loaded from
     */
    storage?: Storage | null;
    summary?: string | null;
    /**
     * Whether this recording has been viewed by you already.
     */
    viewed: boolean;
    /**
     * user ids of other users who have viewed this recording
     */
    viewers: Array<string>;
};

