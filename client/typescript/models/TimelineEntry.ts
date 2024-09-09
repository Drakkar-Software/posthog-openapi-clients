/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventType } from './EventType';
export type TimelineEntry = {
    events: Array<EventType>;
    /**
     * Duration of the recording in seconds.
     */
    recording_duration_s?: (number | null);
    /**
     * Session ID. None means out-of-session events
     */
    sessionId?: (string | null);
};

