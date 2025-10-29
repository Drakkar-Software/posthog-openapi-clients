/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { ErrorTrackingIssueAssignee } from './ErrorTrackingIssueAssignee';
import type { ErrorTrackingQueryResponse } from './ErrorTrackingQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { OrderBy1 } from './OrderBy1';
import type { OrderDirection1 } from './OrderDirection1';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { RevenueEntity } from './RevenueEntity';
import type { RevenuePeriod } from './RevenuePeriod';
import type { Status2 } from './Status2';
export type ErrorTrackingQuery = {
    assignee?: ErrorTrackingIssueAssignee | null;
    dateRange: DateRange;
    filterGroup?: PropertyGroupFilter | null;
    filterTestAccounts?: boolean | null;
    issueId?: string | null;
    kind?: ErrorTrackingQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    orderBy: OrderBy1;
    orderDirection?: OrderDirection1 | null;
    personId?: string | null;
    response?: ErrorTrackingQueryResponse | null;
    revenueEntity?: RevenueEntity | null;
    revenuePeriod?: RevenuePeriod | null;
    searchQuery?: string | null;
    status?: Status2 | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
    volumeResolution: number;
    withAggregations?: boolean | null;
    withFirstEvent?: boolean | null;
    withLastEvent?: boolean | null;
};
export namespace ErrorTrackingQuery {
    export enum kind {
        ERROR_TRACKING_QUERY = 'ErrorTrackingQuery',
    }
}

