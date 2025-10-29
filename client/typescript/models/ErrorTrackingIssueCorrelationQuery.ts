/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorTrackingIssueCorrelationQueryResponse } from './ErrorTrackingIssueCorrelationQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type ErrorTrackingIssueCorrelationQuery = {
    events: Array<string>;
    kind?: ErrorTrackingIssueCorrelationQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: ErrorTrackingIssueCorrelationQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ErrorTrackingIssueCorrelationQuery {
    export enum kind {
        ERROR_TRACKING_ISSUE_CORRELATION_QUERY = 'ErrorTrackingIssueCorrelationQuery',
    }
}

