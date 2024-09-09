/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CohortPropertyFilter } from './CohortPropertyFilter';
import type { DataWarehousePersonPropertyFilter } from './DataWarehousePersonPropertyFilter';
import type { DataWarehousePropertyFilter } from './DataWarehousePropertyFilter';
import type { ElementPropertyFilter } from './ElementPropertyFilter';
import type { EmptyPropertyFilter } from './EmptyPropertyFilter';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { FeaturePropertyFilter } from './FeaturePropertyFilter';
import type { FilterLogicalOperator } from './FilterLogicalOperator';
import type { GroupPropertyFilter } from './GroupPropertyFilter';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { LogEntryPropertyFilter } from './LogEntryPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { RecordingPropertyFilter } from './RecordingPropertyFilter';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
export type PropertyGroupFilterValue = {
    type: FilterLogicalOperator;
    values: Array<(PropertyGroupFilterValue | EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter)>;
};

