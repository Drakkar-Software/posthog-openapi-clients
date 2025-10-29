/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { CohortPropertyFilter } from './CohortPropertyFilter';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { DataWarehousePersonPropertyFilter } from './DataWarehousePersonPropertyFilter';
import type { DataWarehousePropertyFilter } from './DataWarehousePropertyFilter';
import type { ElementPropertyFilter } from './ElementPropertyFilter';
import type { EmptyPropertyFilter } from './EmptyPropertyFilter';
import type { ErrorTrackingIssueFilter } from './ErrorTrackingIssueFilter';
import type { EventMetadataPropertyFilter } from './EventMetadataPropertyFilter';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { EventsNode } from './EventsNode';
import type { FeaturePropertyFilter } from './FeaturePropertyFilter';
import type { FlagPropertyFilter } from './FlagPropertyFilter';
import type { FunnelCorrelationQuery } from './FunnelCorrelationQuery';
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
export type FunnelCorrelationActorsQuery = {
    funnelCorrelationPersonConverted?: boolean | null;
    funnelCorrelationPersonEntity?: (EventsNode | ActionsNode | DataWarehouseNode) | null;
    funnelCorrelationPropertyValues?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    includeRecordings?: boolean | null;
    kind?: FunnelCorrelationActorsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: ActorsQueryResponse | null;
    source: FunnelCorrelationQuery;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace FunnelCorrelationActorsQuery {
    export enum kind {
        FUNNEL_CORRELATION_ACTORS_QUERY = 'FunnelCorrelationActorsQuery',
    }
}

