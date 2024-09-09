/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsQuery } from './ActorsQuery';
import type { ErrorTrackingQuery } from './ErrorTrackingQuery';
import type { EventsNode } from './EventsNode';
import type { EventsQuery } from './EventsQuery';
import type { ExperimentResultQuery } from './ExperimentResultQuery';
import type { HogLanguage } from './HogLanguage';
import type { HogQLAutocomplete } from './HogQLAutocomplete';
import type { HogQLFilters } from './HogQLFilters';
import type { HogQLMetadataResponse } from './HogQLMetadataResponse';
import type { HogQLQuery } from './HogQLQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { HogQuery } from './HogQuery';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { InsightActorsQueryOptions } from './InsightActorsQueryOptions';
import type { PersonsNode } from './PersonsNode';
import type { SessionAttributionExplorerQuery } from './SessionAttributionExplorerQuery';
import type { SessionsTimelineQuery } from './SessionsTimelineQuery';
import type { WebExternalClicksTableQuery } from './WebExternalClicksTableQuery';
import type { WebGoalsQuery } from './WebGoalsQuery';
import type { WebOverviewQuery } from './WebOverviewQuery';
import type { WebStatsTableQuery } from './WebStatsTableQuery';
import type { WebTopClicksQuery } from './WebTopClicksQuery';
export type HogQLMetadata = {
    /**
     * Enable more verbose output, usually run from the /debug page
     */
    debug?: (boolean | null);
    /**
     * Extra filters applied to query via {filters}
     */
    filters?: (HogQLFilters | null);
    /**
     * Extra globals for the query
     */
    globals?: (Record<string, any> | null);
    kind?: any;
    /**
     * Language to validate
     */
    language: HogLanguage;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    /**
     * Query to validate
     */
    query: string;
    response?: (HogQLMetadataResponse | null);
    /**
     * Query within which "expr" and "template" are validated. Defaults to "select * from events"
     */
    sourceQuery?: (EventsNode | ActionsNode | PersonsNode | EventsQuery | ActorsQuery | InsightActorsQuery | InsightActorsQueryOptions | SessionsTimelineQuery | HogQuery | HogQLQuery | HogQLMetadata | HogQLAutocomplete | WebOverviewQuery | WebStatsTableQuery | WebExternalClicksTableQuery | WebTopClicksQuery | WebGoalsQuery | SessionAttributionExplorerQuery | ErrorTrackingQuery | ExperimentResultQuery | null);
};

