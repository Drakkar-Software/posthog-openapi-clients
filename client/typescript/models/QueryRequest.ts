/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsQuery } from './ActorsQuery';
import type { DatabaseSchemaQuery } from './DatabaseSchemaQuery';
import type { DataTableNode } from './DataTableNode';
import type { DataVisualizationNode } from './DataVisualizationNode';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { ErrorTrackingQuery } from './ErrorTrackingQuery';
import type { EventsNode } from './EventsNode';
import type { EventsQuery } from './EventsQuery';
import type { ExperimentResultQuery } from './ExperimentResultQuery';
import type { FunnelCorrelationQuery } from './FunnelCorrelationQuery';
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLAutocomplete } from './HogQLAutocomplete';
import type { HogQLMetadata } from './HogQLMetadata';
import type { HogQLQuery } from './HogQLQuery';
import type { HogQuery } from './HogQuery';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { InsightActorsQueryOptions } from './InsightActorsQueryOptions';
import type { InsightVizNode } from './InsightVizNode';
import type { LifecycleQuery } from './LifecycleQuery';
import type { PathsQuery } from './PathsQuery';
import type { PersonsNode } from './PersonsNode';
import type { RetentionQuery } from './RetentionQuery';
import type { SavedInsightNode } from './SavedInsightNode';
import type { SessionAttributionExplorerQuery } from './SessionAttributionExplorerQuery';
import type { SessionsTimelineQuery } from './SessionsTimelineQuery';
import type { StickinessQuery } from './StickinessQuery';
import type { TrendsQuery } from './TrendsQuery';
import type { WebExternalClicksTableQuery } from './WebExternalClicksTableQuery';
import type { WebGoalsQuery } from './WebGoalsQuery';
import type { WebOverviewQuery } from './WebOverviewQuery';
import type { WebStatsTableQuery } from './WebStatsTableQuery';
import type { WebTopClicksQuery } from './WebTopClicksQuery';
export type QueryRequest = {
    /**
     * (Experimental) Whether to run the query asynchronously. Defaults to False. If True, the `id` of the query can be used to check the status and to cancel it.
     */
    async?: (boolean | null);
    /**
     * Client provided query ID. Can be used to retrieve the status or cancel the query.
     */
    client_query_id?: (string | null);
    /**
     * Submit a JSON string representing a query for PostHog data analysis, for example a HogQL query.
     *
     * Example payload:
     *
     * ```
     *
     * {"query": {"kind": "HogQLQuery", "query": "select * from events limit 100"}}
     *
     * ```
     *
     * For more details on HogQL queries, see the [PostHog HogQL documentation](/docs/hogql#api-access).
     */
    query: (EventsNode | ActionsNode | PersonsNode | DataWarehouseNode | EventsQuery | ActorsQuery | InsightActorsQuery | InsightActorsQueryOptions | SessionsTimelineQuery | HogQuery | HogQLQuery | HogQLMetadata | HogQLAutocomplete | WebOverviewQuery | WebStatsTableQuery | WebExternalClicksTableQuery | WebTopClicksQuery | WebGoalsQuery | SessionAttributionExplorerQuery | ErrorTrackingQuery | ExperimentResultQuery | DataVisualizationNode | DataTableNode | SavedInsightNode | InsightVizNode | TrendsQuery | FunnelsQuery | RetentionQuery | PathsQuery | StickinessQuery | LifecycleQuery | FunnelCorrelationQuery | DatabaseSchemaQuery);
    refresh?: (boolean | string | null);
};

