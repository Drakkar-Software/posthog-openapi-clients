/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsQuery } from './ActorsQuery';
import type { EventsNode } from './EventsNode';
import type { EventsQuery } from './EventsQuery';
import type { HogQLAutocomplete } from './HogQLAutocomplete';
import type { HogQLFilters } from './HogQLFilters';
import type { HogQLMetadataResponse } from './HogQLMetadataResponse';
import type { HogQLQuery } from './HogQLQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { InsightActorsQueryOptions } from './InsightActorsQueryOptions';
import type { PersonsNode } from './PersonsNode';
import type { SessionsTimelineQuery } from './SessionsTimelineQuery';
import type { TimeToSeeDataSessionsQuery } from './TimeToSeeDataSessionsQuery';
import type { WebOverviewQuery } from './WebOverviewQuery';
import type { WebStatsTableQuery } from './WebStatsTableQuery';
import type { WebTopClicksQuery } from './WebTopClicksQuery';
export type HogQLMetadata = {
    /**
     * Enable more verbose output, usually run from the /debug page
     */
    debug?: (boolean | null);
    /**
     * HogQL expression to validate (use `select` or `expr`, but not both)
     */
    expr?: (string | null);
    /**
     * Query within which "expr" is validated. Defaults to "select * from events"
     */
    exprSource?: (EventsNode | ActionsNode | PersonsNode | TimeToSeeDataSessionsQuery | EventsQuery | ActorsQuery | InsightActorsQuery | InsightActorsQueryOptions | SessionsTimelineQuery | HogQLQuery | HogQLMetadata | HogQLAutocomplete | WebOverviewQuery | WebStatsTableQuery | WebTopClicksQuery | null);
    /**
     * Extra filters applied to query via {filters}
     */
    filters?: (HogQLFilters | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    response?: (HogQLMetadataResponse | null);
    /**
     * Full select query to validate (use `select` or `expr`, but not both)
     */
    select?: (string | null);
    /**
     * Table to validate the expression against
     */
    table?: (string | null);
};

