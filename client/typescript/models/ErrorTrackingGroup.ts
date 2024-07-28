/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Status } from './Status';
export type ErrorTrackingGroup = {
    assignee?: (number | null);
    description?: (string | null);
    events?: null;
    exception_type?: (string | null);
    fingerprint: string;
    first_seen: string;
    last_seen: string;
    merged_fingerprints: Array<string>;
    occurrences: number;
    sessions: number;
    status: Status;
    users: number;
    volume?: null;
};

