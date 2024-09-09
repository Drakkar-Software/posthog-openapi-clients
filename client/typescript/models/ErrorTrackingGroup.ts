/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Status } from './Status';
export type ErrorTrackingGroup = {
    assignee?: (number | null);
    description?: (string | null);
    exception_type?: (string | null);
    fingerprint: Array<string>;
    first_seen: string;
    last_seen: string;
    merged_fingerprints: Array<Array<string>>;
    occurrences: number;
    sessions: number;
    status: Status;
    users: number;
    volume?: null;
};

