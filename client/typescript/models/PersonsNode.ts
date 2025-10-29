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
import type { FeaturePropertyFilter } from './FeaturePropertyFilter';
import type { FlagPropertyFilter } from './FlagPropertyFilter';
import type { GroupPropertyFilter } from './GroupPropertyFilter';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { LogEntryPropertyFilter } from './LogEntryPropertyFilter';
import type { LogPropertyFilter } from './LogPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { RecordingPropertyFilter } from './RecordingPropertyFilter';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
export type PersonsNode = {
    cohort?: number | null;
    distinctId?: string | null;
    /**
     * Fixed properties in the query, can't be edited in the interface (e.g. scoping down by person)
     */
    fixedProperties?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    kind?: PersonsNode.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    /**
     * Properties configurable in the interface
     */
    properties?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    response?: Record<string, any> | null;
    search?: string | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace PersonsNode {
    export enum kind {
        PERSONS_NODE = 'PersonsNode',
    }
}

