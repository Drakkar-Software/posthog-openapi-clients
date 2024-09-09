/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BounceRatePageViewMode } from './BounceRatePageViewMode';
import type { DataWarehouseEventsModifier } from './DataWarehouseEventsModifier';
import type { InCohortVia } from './InCohortVia';
import type { MaterializationMode } from './MaterializationMode';
import type { PersonsArgMaxVersion } from './PersonsArgMaxVersion';
import type { PersonsJoinMode } from './PersonsJoinMode';
import type { PersonsOnEventsMode } from './PersonsOnEventsMode';
import type { PropertyGroupsMode } from './PropertyGroupsMode';
import type { SessionTableVersion } from './SessionTableVersion';
export type HogQLQueryModifiers = {
    bounceRatePageViewMode?: (BounceRatePageViewMode | null);
    dataWarehouseEventsModifiers?: (Array<DataWarehouseEventsModifier> | null);
    debug?: (boolean | null);
    inCohortVia?: (InCohortVia | null);
    materializationMode?: (MaterializationMode | null);
    optimizeJoinedFilters?: (boolean | null);
    personsArgMaxVersion?: (PersonsArgMaxVersion | null);
    personsJoinMode?: (PersonsJoinMode | null);
    personsOnEventsMode?: (PersonsOnEventsMode | null);
    propertyGroupsMode?: (PropertyGroupsMode | null);
    s3TableUseInvalidColumns?: (boolean | null);
    sessionTableVersion?: (SessionTableVersion | null);
};

