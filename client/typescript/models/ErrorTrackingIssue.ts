/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorTrackingExternalReference } from './ErrorTrackingExternalReference';
import type { ErrorTrackingIssueAggregations } from './ErrorTrackingIssueAggregations';
import type { ErrorTrackingIssueAssignee } from './ErrorTrackingIssueAssignee';
import type { FirstEvent } from './FirstEvent';
import type { LastEvent } from './LastEvent';
import type { Status } from './Status';
export type ErrorTrackingIssue = {
    aggregations?: ErrorTrackingIssueAggregations | null;
    assignee?: ErrorTrackingIssueAssignee | null;
    description?: string | null;
    external_issues?: Array<ErrorTrackingExternalReference> | null;
    first_event?: FirstEvent | null;
    first_seen: string;
    id: string;
    last_event?: LastEvent | null;
    last_seen: string;
    library?: string | null;
    name?: string | null;
    revenue?: number | null;
    status: Status;
};

