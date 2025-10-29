/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BounceRatePageViewMode } from './BounceRatePageViewMode';
import type { CustomChannelRule } from './CustomChannelRule';
import type { DataWarehouseEventsModifier } from './DataWarehouseEventsModifier';
import type { InCohortVia } from './InCohortVia';
import type { MaterializationMode } from './MaterializationMode';
import type { PersonsArgMaxVersion } from './PersonsArgMaxVersion';
import type { PersonsJoinMode } from './PersonsJoinMode';
import type { PersonsOnEventsMode } from './PersonsOnEventsMode';
import type { PropertyGroupsMode } from './PropertyGroupsMode';
import type { SessionsV2JoinMode } from './SessionsV2JoinMode';
import type { SessionTableVersion } from './SessionTableVersion';
export type HogQLQueryModifiers = {
    bounceRateDurationSeconds?: number | null;
    bounceRatePageViewMode?: BounceRatePageViewMode | null;
    convertToProjectTimezone?: boolean | null;
    customChannelTypeRules?: Array<CustomChannelRule> | null;
    dataWarehouseEventsModifiers?: Array<DataWarehouseEventsModifier> | null;
    debug?: boolean | null;
    formatCsvAllowDoubleQuotes?: boolean | null;
    inCohortVia?: InCohortVia | null;
    materializationMode?: MaterializationMode | null;
    optimizeJoinedFilters?: boolean | null;
    optimizeProjections?: boolean | null;
    personsArgMaxVersion?: PersonsArgMaxVersion | null;
    personsJoinMode?: PersonsJoinMode | null;
    personsOnEventsMode?: PersonsOnEventsMode | null;
    propertyGroupsMode?: PropertyGroupsMode | null;
    s3TableUseInvalidColumns?: boolean | null;
    sessionTableVersion?: SessionTableVersion | null;
    sessionsV2JoinMode?: SessionsV2JoinMode | null;
    timings?: boolean | null;
    useMaterializedViews?: boolean | null;
    /**
     * Try to automatically convert HogQL queries to use preaggregated tables at the AST level *
     */
    usePreaggregatedTableTransforms?: boolean | null;
    usePresortedEventsTable?: boolean | null;
    useWebAnalyticsPreAggregatedTables?: boolean | null;
};

