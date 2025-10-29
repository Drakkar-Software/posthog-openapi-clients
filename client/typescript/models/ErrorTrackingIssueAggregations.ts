/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VolumeBucket } from './VolumeBucket';
export type ErrorTrackingIssueAggregations = {
    occurrences: number;
    sessions: number;
    users: number;
    volumeRange?: Array<number> | null;
    volume_buckets: Array<VolumeBucket>;
};

