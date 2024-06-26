/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataWarehouseEventsModifier } from './DataWarehouseEventsModifier';
import type { InCohortVia } from './InCohortVia';
import type { MaterializationMode } from './MaterializationMode';
import type { PersonsArgMaxVersion } from './PersonsArgMaxVersion';
import type { PersonsOnEventsMode } from './PersonsOnEventsMode';
export type HogQLQueryModifiers = {
    dataWarehouseEventsModifiers?: (Array<DataWarehouseEventsModifier> | null);
    debug?: (boolean | null);
    inCohortVia?: (InCohortVia | null);
    materializationMode?: (MaterializationMode | null);
    personsArgMaxVersion?: (PersonsArgMaxVersion | null);
    personsOnEventsMode?: (PersonsOnEventsMode | null);
    s3TableUseInvalidColumns?: (boolean | null);
};

