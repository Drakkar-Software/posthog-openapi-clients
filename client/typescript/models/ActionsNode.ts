/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseMathType } from './BaseMathType';
import type { CalendarHeatmapMathType } from './CalendarHeatmapMathType';
import type { CohortPropertyFilter } from './CohortPropertyFilter';
import type { CountPerActorMathType } from './CountPerActorMathType';
import type { DataWarehousePersonPropertyFilter } from './DataWarehousePersonPropertyFilter';
import type { DataWarehousePropertyFilter } from './DataWarehousePropertyFilter';
import type { ElementPropertyFilter } from './ElementPropertyFilter';
import type { EmptyPropertyFilter } from './EmptyPropertyFilter';
import type { ErrorTrackingIssueFilter } from './ErrorTrackingIssueFilter';
import type { EventMetadataPropertyFilter } from './EventMetadataPropertyFilter';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { ExperimentMetricMathType } from './ExperimentMetricMathType';
import type { FeaturePropertyFilter } from './FeaturePropertyFilter';
import type { FlagPropertyFilter } from './FlagPropertyFilter';
import type { FunnelMathType } from './FunnelMathType';
import type { GroupPropertyFilter } from './GroupPropertyFilter';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { LogEntryPropertyFilter } from './LogEntryPropertyFilter';
import type { LogPropertyFilter } from './LogPropertyFilter';
import type { MathGroupTypeIndex } from './MathGroupTypeIndex';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { PropertyMathType } from './PropertyMathType';
import type { RecordingPropertyFilter } from './RecordingPropertyFilter';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { RevenueCurrencyPropertyConfig } from './RevenueCurrencyPropertyConfig';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
export type ActionsNode = {
    custom_name?: string | null;
    /**
     * Fixed properties in the query, can't be edited in the interface (e.g. scoping down by person)
     */
    fixedProperties?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    id: number;
    kind?: ActionsNode.kind;
    math?: (BaseMathType | FunnelMathType | PropertyMathType | CountPerActorMathType | ExperimentMetricMathType | CalendarHeatmapMathType | 'unique_group' | 'hogql') | null;
    math_group_type_index?: MathGroupTypeIndex | null;
    math_hogql?: string | null;
    math_multiplier?: number | null;
    math_property?: string | null;
    math_property_revenue_currency?: RevenueCurrencyPropertyConfig | null;
    math_property_type?: string | null;
    name?: string | null;
    optionalInFunnel?: boolean | null;
    /**
     * Properties configurable in the interface
     */
    properties?: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)> | null;
    response?: Record<string, any> | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ActionsNode {
    export enum kind {
        ACTIONS_NODE = 'ActionsNode',
    }
}

