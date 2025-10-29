/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsPropertyTaxonomyQuery } from './ActorsPropertyTaxonomyQuery';
import type { ActorsQuery } from './ActorsQuery';
import type { DashboardFilter } from './DashboardFilter';
import type { DatabaseSchemaQuery } from './DatabaseSchemaQuery';
import type { DataTableNode } from './DataTableNode';
import type { DataVisualizationNode } from './DataVisualizationNode';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { DocumentSimilarityQuery } from './DocumentSimilarityQuery';
import type { ErrorTrackingIssueCorrelationQuery } from './ErrorTrackingIssueCorrelationQuery';
import type { ErrorTrackingQuery } from './ErrorTrackingQuery';
import type { ErrorTrackingSimilarIssuesQuery } from './ErrorTrackingSimilarIssuesQuery';
import type { EventsNode } from './EventsNode';
import type { EventsQuery } from './EventsQuery';
import type { EventTaxonomyQuery } from './EventTaxonomyQuery';
import type { ExperimentExposureQuery } from './ExperimentExposureQuery';
import type { ExperimentFunnelsQuery } from './ExperimentFunnelsQuery';
import type { ExperimentQuery } from './ExperimentQuery';
import type { ExperimentTrendsQuery } from './ExperimentTrendsQuery';
import type { FunnelCorrelationQuery } from './FunnelCorrelationQuery';
import type { FunnelsQuery } from './FunnelsQuery';
import type { GroupsQuery } from './GroupsQuery';
import type { HogQLASTQuery } from './HogQLASTQuery';
import type { HogQLAutocomplete } from './HogQLAutocomplete';
import type { HogQLMetadata } from './HogQLMetadata';
import type { HogQLQuery } from './HogQLQuery';
import type { HogQuery } from './HogQuery';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { InsightActorsQueryOptions } from './InsightActorsQueryOptions';
import type { InsightVizNode } from './InsightVizNode';
import type { LifecycleQuery } from './LifecycleQuery';
import type { LogsQuery } from './LogsQuery';
import type { MarketingAnalyticsAggregatedQuery } from './MarketingAnalyticsAggregatedQuery';
import type { MarketingAnalyticsTableQuery } from './MarketingAnalyticsTableQuery';
import type { PathsQuery } from './PathsQuery';
import type { PersonsNode } from './PersonsNode';
import type { RefreshType } from './RefreshType';
import type { RetentionQuery } from './RetentionQuery';
import type { RevenueAnalyticsGrossRevenueQuery } from './RevenueAnalyticsGrossRevenueQuery';
import type { RevenueAnalyticsMetricsQuery } from './RevenueAnalyticsMetricsQuery';
import type { RevenueAnalyticsMRRQuery } from './RevenueAnalyticsMRRQuery';
import type { RevenueAnalyticsOverviewQuery } from './RevenueAnalyticsOverviewQuery';
import type { RevenueAnalyticsTopCustomersQuery } from './RevenueAnalyticsTopCustomersQuery';
import type { RevenueExampleDataWarehouseTablesQuery } from './RevenueExampleDataWarehouseTablesQuery';
import type { RevenueExampleEventsQuery } from './RevenueExampleEventsQuery';
import type { SavedInsightNode } from './SavedInsightNode';
import type { SessionAttributionExplorerQuery } from './SessionAttributionExplorerQuery';
import type { SessionsTimelineQuery } from './SessionsTimelineQuery';
import type { StickinessQuery } from './StickinessQuery';
import type { SuggestedQuestionsQuery } from './SuggestedQuestionsQuery';
import type { TeamTaxonomyQuery } from './TeamTaxonomyQuery';
import type { TraceQuery } from './TraceQuery';
import type { TracesQuery } from './TracesQuery';
import type { TrendsQuery } from './TrendsQuery';
import type { UsageMetricsQuery } from './UsageMetricsQuery';
import type { VectorSearchQuery } from './VectorSearchQuery';
import type { WebAnalyticsExternalSummaryQuery } from './WebAnalyticsExternalSummaryQuery';
import type { WebExternalClicksTableQuery } from './WebExternalClicksTableQuery';
import type { WebGoalsQuery } from './WebGoalsQuery';
import type { WebOverviewQuery } from './WebOverviewQuery';
import type { WebPageURLSearchQuery } from './WebPageURLSearchQuery';
import type { WebStatsTableQuery } from './WebStatsTableQuery';
import type { WebVitalsPathBreakdownQuery } from './WebVitalsPathBreakdownQuery';
import type { WebVitalsQuery } from './WebVitalsQuery';
export type QueryRequest = {
    async?: boolean | null;
    /**
     * Client provided query ID. Can be used to retrieve the status or cancel the query.
     */
    client_query_id?: string | null;
    filters_override?: DashboardFilter | null;
    /**
     * Name given to a query. It's used to identify the query in the UI. Up to 128 characters for a name.
     */
    name?: string | null;
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
    query: (EventsNode | ActionsNode | PersonsNode | DataWarehouseNode | EventsQuery | ActorsQuery | GroupsQuery | InsightActorsQuery | InsightActorsQueryOptions | SessionsTimelineQuery | HogQuery | HogQLQuery | HogQLMetadata | HogQLAutocomplete | HogQLASTQuery | SessionAttributionExplorerQuery | RevenueExampleEventsQuery | RevenueExampleDataWarehouseTablesQuery | ErrorTrackingQuery | ErrorTrackingSimilarIssuesQuery | ErrorTrackingIssueCorrelationQuery | ExperimentFunnelsQuery | ExperimentTrendsQuery | ExperimentQuery | ExperimentExposureQuery | DocumentSimilarityQuery | WebOverviewQuery | WebStatsTableQuery | WebExternalClicksTableQuery | WebGoalsQuery | WebVitalsQuery | WebVitalsPathBreakdownQuery | WebPageURLSearchQuery | WebAnalyticsExternalSummaryQuery | RevenueAnalyticsGrossRevenueQuery | RevenueAnalyticsMetricsQuery | RevenueAnalyticsMRRQuery | RevenueAnalyticsOverviewQuery | RevenueAnalyticsTopCustomersQuery | MarketingAnalyticsTableQuery | MarketingAnalyticsAggregatedQuery | DataVisualizationNode | DataTableNode | SavedInsightNode | InsightVizNode | TrendsQuery | FunnelsQuery | RetentionQuery | PathsQuery | StickinessQuery | LifecycleQuery | FunnelCorrelationQuery | DatabaseSchemaQuery | LogsQuery | SuggestedQuestionsQuery | TeamTaxonomyQuery | EventTaxonomyQuery | ActorsPropertyTaxonomyQuery | TracesQuery | TraceQuery | VectorSearchQuery | UsageMetricsQuery);
    /**
     * Whether results should be calculated sync or async, and how much to rely on the cache:
     * - `'blocking'` - calculate synchronously (returning only when the query is done), UNLESS there are very fresh results in the cache
     * - `'async'` - kick off background calculation (returning immediately with a query status), UNLESS there are very fresh results in the cache
     * - `'lazy_async'` - kick off background calculation, UNLESS there are somewhat fresh results in the cache
     * - `'force_blocking'` - calculate synchronously, even if fresh results are already cached
     * - `'force_async'` - kick off background calculation, even if fresh results are already cached
     * - `'force_cache'` - return cached data or a cache miss; always completes immediately as it never calculates Background calculation can be tracked using the `query_status` response field.
     */
    refresh?: RefreshType | null;
    variables_override?: Record<string, Record<string, any>> | null;
};

