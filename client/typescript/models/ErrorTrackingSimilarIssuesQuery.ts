/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { EmbeddingModelName } from './EmbeddingModelName';
import type { ErrorTrackingSimilarIssuesQueryResponse } from './ErrorTrackingSimilarIssuesQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type ErrorTrackingSimilarIssuesQuery = {
    dateRange?: DateRange | null;
    issueId: string;
    kind?: ErrorTrackingSimilarIssuesQuery.kind;
    limit?: number | null;
    maxDistance?: number | null;
    modelName?: EmbeddingModelName | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    rendering?: string | null;
    response?: ErrorTrackingSimilarIssuesQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ErrorTrackingSimilarIssuesQuery {
    export enum kind {
        ERROR_TRACKING_SIMILAR_ISSUES_QUERY = 'ErrorTrackingSimilarIssuesQuery',
    }
}

