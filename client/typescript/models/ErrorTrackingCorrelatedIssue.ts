/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorTrackingExternalReference } from './ErrorTrackingExternalReference';
import type { ErrorTrackingIssueAssignee } from './ErrorTrackingIssueAssignee';
import type { Population } from './Population';
import type { Status } from './Status';
export type ErrorTrackingCorrelatedIssue = {
    assignee?: ErrorTrackingIssueAssignee | null;
    description?: string | null;
    event: string;
    external_issues?: Array<ErrorTrackingExternalReference> | null;
    first_seen: string;
    id: string;
    last_seen: string;
    library?: string | null;
    name?: string | null;
    odds_ratio: number;
    population: Population;
    status: Status;
};

