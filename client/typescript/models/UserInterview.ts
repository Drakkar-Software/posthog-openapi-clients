/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type UserInterview = {
    readonly id: string;
    readonly created_by: UserBasic;
    readonly created_at: string;
    interviewee_emails?: Array<string>;
    readonly transcript: string;
    summary?: string;
    audio: string;
};

