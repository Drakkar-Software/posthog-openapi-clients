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
import type { HogQLAutocompleteResponse } from './HogQLAutocompleteResponse';
import type { HogQLFilters } from './HogQLFilters';
import type { HogQLMetadata } from './HogQLMetadata';
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
export type HogQLAutocomplete = {
    /**
     * End position of the editor word
     */
    endPosition: number;
    /**
     * Table to validate the expression against
     */
    filters?: (HogQLFilters | null);
    /**
     * Global values in scope
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
    response?: (HogQLAutocompleteResponse | null);
    /**
     * Query in whose context to validate.
     */
    sourceQuery?: (EventsNode | ActionsNode | PersonsNode | EventsQuery | ActorsQuery | InsightActorsQuery | InsightActorsQueryOptions | SessionsTimelineQuery | HogQuery | HogQLQuery | HogQLMetadata | HogQLAutocomplete | WebOverviewQuery | WebStatsTableQuery | WebExternalClicksTableQuery | WebTopClicksQuery | WebGoalsQuery | SessionAttributionExplorerQuery | ErrorTrackingQuery | ExperimentResultQuery | null);
    /**
     * Start position of the editor word
     */
    startPosition: number;
};

