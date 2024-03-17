/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CohortPropertyFilter } from './CohortPropertyFilter';
import type { DataWarehousePropertyFilter } from './DataWarehousePropertyFilter';
import type { ElementPropertyFilter } from './ElementPropertyFilter';
import type { EmptyPropertyFilter } from './EmptyPropertyFilter';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { FeaturePropertyFilter } from './FeaturePropertyFilter';
import type { FilterLogicalOperator } from './FilterLogicalOperator';
import type { GroupPropertyFilter } from './GroupPropertyFilter';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { RecordingDurationFilter } from './RecordingDurationFilter';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
export type PropertyGroupFilterValue = {
    type: FilterLogicalOperator;
    values: Array<(PropertyGroupFilterValue | EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingDurationFilter | GroupPropertyFilter | FeaturePropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter)>;
};

