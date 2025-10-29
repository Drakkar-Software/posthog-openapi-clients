/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CohortPropertyFilter } from './CohortPropertyFilter';
import type { DataWarehousePersonPropertyFilter } from './DataWarehousePersonPropertyFilter';
import type { DataWarehousePropertyFilter } from './DataWarehousePropertyFilter';
import type { ElementPropertyFilter } from './ElementPropertyFilter';
import type { EmptyPropertyFilter } from './EmptyPropertyFilter';
import type { ErrorTrackingIssueFilter } from './ErrorTrackingIssueFilter';
import type { EventMetadataPropertyFilter } from './EventMetadataPropertyFilter';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { EventsQueryResponse } from './EventsQueryResponse';
import type { FeaturePropertyFilter } from './FeaturePropertyFilter';
import type { FlagPropertyFilter } from './FlagPropertyFilter';
import type { GroupPropertyFilter } from './GroupPropertyFilter';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { LogEntryPropertyFilter } from './LogEntryPropertyFilter';
import type { LogPropertyFilter } from './LogPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { PropertyGroupFilterValue } from './PropertyGroupFilterValue';
import type { QueryLogTags } from './QueryLogTags';
import type { RecordingPropertyFilter } from './RecordingPropertyFilter';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
export type EventsQuery = {
    /**
     * Show events matching a given action
     */
    actionId?: number | null;
    /**
     * Only fetch events that happened after this timestamp
     */
    after?: string | null;
    /**
     * Only fetch events that happened before this timestamp
     */
    before?: string | null;
    /**
     * Limit to events matching this string
     */
    event?: string | null;
    /**
     * Filter test accounts
     */
    filterTestAccounts?: boolean | null;
    /**
     * Fixed properties in the query, can't be edited in the interface (e.g. scoping down by person)
     */
    fixedProperties?: Array<(PropertyGroupFilter | PropertyGroupFilterValue | EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    kind?: EventsQuery.kind;
    /**
     * Number of rows to return
     */
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Number of rows to skip before returning rows
     */
    offset?: number | null;
    /**
     * Columns to order by
     */
    orderBy?: Array<string> | null;
    /**
     * Show events for a given person
     */
    personId?: string | null;
    /**
     * Properties configurable in the interface
     */
    properties?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    response?: EventsQueryResponse | null;
    /**
     * Return a limited set of data. Required.
     */
    select: Array<string>;
    /**
     * source for querying events for insights
     */
    source?: InsightActorsQuery | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
    /**
     * HogQL filters to apply on returned data
     */
    where?: Array<string> | null;
};
export namespace EventsQuery {
    export enum kind {
        EVENTS_QUERY = 'EventsQuery',
    }
}

