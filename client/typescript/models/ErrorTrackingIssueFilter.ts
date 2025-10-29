/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type ErrorTrackingIssueFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: ErrorTrackingIssueFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace ErrorTrackingIssueFilter {
    export enum type {
        ERROR_TRACKING_ISSUE = 'error_tracking_issue',
    }
}

