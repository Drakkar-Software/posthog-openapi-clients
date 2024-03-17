/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TimezoneEnum } from './TimezoneEnum';
/**
 * Serializer for `Team` model with minimal attributes to speeed up loading and transfer times.
 * Also used for nested serializers.
 */
export type TeamBasic = {
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

