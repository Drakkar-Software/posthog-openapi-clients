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
import type { LogEntryPropertyFilter } from './LogEntryPropertyFilter';
import type { LogPropertyFilter } from './LogPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { RecordingPropertyFilter } from './RecordingPropertyFilter';
import type { RevenueAnalyticsPropertyFilter } from './RevenueAnalyticsPropertyFilter';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
export type ExperimentEventExposureConfig = {
    event: string;
    kind?: ExperimentEventExposureConfig.kind;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | ElementPropertyFilter | EventMetadataPropertyFilter | SessionPropertyFilter | CohortPropertyFilter | RecordingPropertyFilter | LogEntryPropertyFilter | GroupPropertyFilter | FeaturePropertyFilter | FlagPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter | DataWarehousePropertyFilter | DataWarehousePersonPropertyFilter | ErrorTrackingIssueFilter | LogPropertyFilter | RevenueAnalyticsPropertyFilter)>;
    response?: Record<string, any> | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentEventExposureConfig {
    export enum kind {
        EXPERIMENT_EVENT_EXPOSURE_CONFIG = 'ExperimentEventExposureConfig',
    }
}

