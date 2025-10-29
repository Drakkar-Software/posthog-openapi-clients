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
import type { FilterLogicalOperator } from './FilterLogicalOperator';
import type { FlagPropertyFilter } from './FlagPropertyFilter';
import type { GroupPropertyFilter } from './GroupPropertyFilter';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { LogEntryPropertyFilter } from './LogEntryPropertyFilter';
import type { LogPropertyFilter } from './LogPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { QueryLogTags } from './QueryLogTags';
import type { RecordingOrder } from './RecordingOrder';
import type { RecordingOrderDirection } from './RecordingOrderDirection';
import type { RecordingPropertyFilter } from './RecordingPropertyFilter';
import type { RecordingsQueryResponse } from './RecordingsQueryResponse';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
export type RecordingsQuery = {
    actions?: Array<Record<string, any>> | null;
    comment_text?: RecordingPropertyFilter | null;
    console_log_filters?: Array<LogEntryPropertyFilter> | null;
    date_from?: string | null;
    date_to?: string | null;
    distinct_ids?: Array<string> | null;
    events?: Array<Record<string, any>> | null;
    filter_test_accounts?: boolean | null;
    having_predicates?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    kind?: RecordingsQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    operand?: FilterLogicalOperator | null;
    order?: RecordingOrder | null;
    /**
     * Replay originally had all ordering as descending by specifying the field name, this runs counter to Django behavior where the field name specifies ascending sorting (e.g. the_field_name) and -the_field_name would indicate descending order to avoid invalidating or migrating all existing filters we keep DESC as the default or allow specification of an explicit order direction here
     */
    order_direction?: RecordingOrderDirection | null;
    person_uuid?: string | null;
    properties?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    response?: RecordingsQueryResponse | null;
    session_ids?: Array<string> | null;
    tags?: QueryLogTags | null;
    user_modified_filters?: Record<string, any> | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace RecordingsQuery {
    export enum kind {
        RECORDINGS_QUERY = 'RecordingsQuery',
    }
}

