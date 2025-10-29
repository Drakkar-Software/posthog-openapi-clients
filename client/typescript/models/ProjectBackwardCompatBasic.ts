/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimezoneEnum } from './TimezoneEnum';
/**
 * Like `ProjectBasicSerializer`, but also works as a drop-in replacement for `TeamBasicSerializer` by way of
 * passthrough fields. This allows the meaning of `Team` to change from "project" to "environment" without breaking
 * backward compatibility of the REST API.
 * Do not use this in greenfield endpoints!
 */
export type ProjectBackwardCompatBasic = {
    readonly id: number;
    readonly uuid: string;
    readonly organization: string;
    readonly api_token: string;
    readonly name: string;
    readonly completed_snippet_onboarding: boolean;
    readonly has_completed_onboarding_for: any;
    readonly ingested_event: boolean;
    readonly is_demo: boolean;
    readonly timezone: TimezoneEnum;
    readonly access_control: boolean;
};

