/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsQuery } from './ActorsQuery';
import type { CalendarHeatmapQuery } from './CalendarHeatmapQuery';
import type { ErrorTrackingIssueCorrelationQuery } from './ErrorTrackingIssueCorrelationQuery';
import type { ErrorTrackingQuery } from './ErrorTrackingQuery';
import type { ErrorTrackingSimilarIssuesQuery } from './ErrorTrackingSimilarIssuesQuery';
import type { EventsNode } from './EventsNode';
import type { EventsQuery } from './EventsQuery';
import type { ExperimentFunnelsQuery } from './ExperimentFunnelsQuery';
import type { ExperimentTrendsQuery } from './ExperimentTrendsQuery';
import type { GroupsQuery } from './GroupsQuery';
import type { HogLanguage } from './HogLanguage';
import type { HogQLAutocompleteResponse } from './HogQLAutocompleteResponse';
import type { HogQLFilters } from './HogQLFilters';
import type { HogQLMetadata } from './HogQLMetadata';
import type { HogQLQuery } from './HogQLQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { HogQuery } from './HogQuery';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { InsightActorsQueryOptions } from './InsightActorsQueryOptions';
import type { LogsQuery } from './LogsQuery';
import type { MarketingAnalyticsAggregatedQuery } from './MarketingAnalyticsAggregatedQuery';
import type { MarketingAnalyticsTableQuery } from './MarketingAnalyticsTableQuery';
import type { PersonsNode } from './PersonsNode';
import type { QueryLogTags } from './QueryLogTags';
import type { RecordingsQuery } from './RecordingsQuery';
import type { RevenueAnalyticsGrossRevenueQuery } from './RevenueAnalyticsGrossRevenueQuery';
import type { RevenueAnalyticsMetricsQuery } from './RevenueAnalyticsMetricsQuery';
import type { RevenueAnalyticsMRRQuery } from './RevenueAnalyticsMRRQuery';
import type { RevenueAnalyticsOverviewQuery } from './RevenueAnalyticsOverviewQuery';
import type { RevenueAnalyticsTopCustomersQuery } from './RevenueAnalyticsTopCustomersQuery';
import type { RevenueExampleDataWarehouseTablesQuery } from './RevenueExampleDataWarehouseTablesQuery';
import type { RevenueExampleEventsQuery } from './RevenueExampleEventsQuery';
import type { SessionAttributionExplorerQuery } from './SessionAttributionExplorerQuery';
import type { SessionsTimelineQuery } from './SessionsTimelineQuery';
import type { TraceQuery } from './TraceQuery';
import type { TracesQuery } from './TracesQuery';
import type { UsageMetricsQuery } from './UsageMetricsQuery';
import type { VectorSearchQuery } from './VectorSearchQuery';
import type { WebAnalyticsExternalSummaryQuery } from './WebAnalyticsExternalSummaryQuery';
import type { WebExternalClicksTableQuery } from './WebExternalClicksTableQuery';
import type { WebGoalsQuery } from './WebGoalsQuery';
import type { WebOverviewQuery } from './WebOverviewQuery';
import type { WebPageURLSearchQuery } from './WebPageURLSearchQuery';
import type { WebStatsTableQuery } from './WebStatsTableQuery';
import type { WebTrendsQuery } from './WebTrendsQuery';
import type { WebVitalsPathBreakdownQuery } from './WebVitalsPathBreakdownQuery';
import type { WebVitalsQuery } from './WebVitalsQuery';
export type HogQLAutocomplete = {
    /**
     * End position of the editor word
     */
    endPosition: number;
    /**
     * Table to validate the expression against
     */
    filters?: HogQLFilters | null;
    /**
     * Global values in scope
     */
    globals?: Record<string, any> | null;
    kind?: HogQLAutocomplete.kind;
    /**
     * Language to validate
     */
    language: HogLanguage;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Query to validate
     */
    query: string;
    response?: HogQLAutocompleteResponse | null;
    /**
     * Query in whose context to validate.
     */
    sourceQuery?: (EventsNode | ActionsNode | PersonsNode | EventsQuery | ActorsQuery | GroupsQuery | InsightActorsQuery | InsightActorsQueryOptions | SessionsTimelineQuery | HogQuery | HogQLQuery | HogQLMetadata | HogQLAutocomplete | RevenueAnalyticsGrossRevenueQuery | RevenueAnalyticsMetricsQuery | RevenueAnalyticsMRRQuery | RevenueAnalyticsOverviewQuery | RevenueAnalyticsTopCustomersQuery | MarketingAnalyticsTableQuery | MarketingAnalyticsAggregatedQuery | WebOverviewQuery | WebStatsTableQuery | WebExternalClicksTableQuery | WebGoalsQuery | WebVitalsQuery | WebVitalsPathBreakdownQuery | WebPageURLSearchQuery | WebTrendsQuery | WebAnalyticsExternalSummaryQuery | SessionAttributionExplorerQuery | RevenueExampleEventsQuery | RevenueExampleDataWarehouseTablesQuery | ErrorTrackingQuery | ErrorTrackingSimilarIssuesQuery | ErrorTrackingIssueCorrelationQuery | LogsQuery | ExperimentFunnelsQuery | ExperimentTrendsQuery | CalendarHeatmapQuery | RecordingsQuery | TracesQuery | TraceQuery | VectorSearchQuery | UsageMetricsQuery) | null;
    /**
     * Start position of the editor word
     */
    startPosition: number;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace HogQLAutocomplete {
    export enum kind {
        HOG_QLAUTOCOMPLETE = 'HogQLAutocomplete',
    }
}

