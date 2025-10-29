/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQuery } from './ActorsQuery';
import type { DataTableNodeViewPropsContext } from './DataTableNodeViewPropsContext';
import type { ErrorTrackingIssueCorrelationQuery } from './ErrorTrackingIssueCorrelationQuery';
import type { ErrorTrackingQuery } from './ErrorTrackingQuery';
import type { EventsNode } from './EventsNode';
import type { EventsQuery } from './EventsQuery';
import type { ExperimentFunnelsQuery } from './ExperimentFunnelsQuery';
import type { ExperimentTrendsQuery } from './ExperimentTrendsQuery';
import type { GroupsQuery } from './GroupsQuery';
import type { HogQLQuery } from './HogQLQuery';
import type { MarketingAnalyticsAggregatedQuery } from './MarketingAnalyticsAggregatedQuery';
import type { MarketingAnalyticsTableQuery } from './MarketingAnalyticsTableQuery';
import type { PersonsNode } from './PersonsNode';
import type { QueryLogTags } from './QueryLogTags';
import type { Response } from './Response';
import type { Response1 } from './Response1';
import type { Response10 } from './Response10';
import type { Response11 } from './Response11';
import type { Response12 } from './Response12';
import type { Response13 } from './Response13';
import type { Response14 } from './Response14';
import type { Response15 } from './Response15';
import type { Response17 } from './Response17';
import type { Response18 } from './Response18';
import type { Response19 } from './Response19';
import type { Response2 } from './Response2';
import type { Response20 } from './Response20';
import type { Response21 } from './Response21';
import type { Response22 } from './Response22';
import type { Response23 } from './Response23';
import type { Response3 } from './Response3';
import type { Response4 } from './Response4';
import type { Response5 } from './Response5';
import type { Response6 } from './Response6';
import type { Response8 } from './Response8';
import type { Response9 } from './Response9';
import type { RevenueAnalyticsGrossRevenueQuery } from './RevenueAnalyticsGrossRevenueQuery';
import type { RevenueAnalyticsMetricsQuery } from './RevenueAnalyticsMetricsQuery';
import type { RevenueAnalyticsMRRQuery } from './RevenueAnalyticsMRRQuery';
import type { RevenueAnalyticsOverviewQuery } from './RevenueAnalyticsOverviewQuery';
import type { RevenueAnalyticsTopCustomersQuery } from './RevenueAnalyticsTopCustomersQuery';
import type { RevenueExampleDataWarehouseTablesQuery } from './RevenueExampleDataWarehouseTablesQuery';
import type { RevenueExampleEventsQuery } from './RevenueExampleEventsQuery';
import type { SessionAttributionExplorerQuery } from './SessionAttributionExplorerQuery';
import type { TaxonomicFilterGroupType } from './TaxonomicFilterGroupType';
import type { TraceQuery } from './TraceQuery';
import type { TracesQuery } from './TracesQuery';
import type { WebExternalClicksTableQuery } from './WebExternalClicksTableQuery';
import type { WebGoalsQuery } from './WebGoalsQuery';
import type { WebOverviewQuery } from './WebOverviewQuery';
import type { WebStatsTableQuery } from './WebStatsTableQuery';
import type { WebVitalsPathBreakdownQuery } from './WebVitalsPathBreakdownQuery';
import type { WebVitalsQuery } from './WebVitalsQuery';
export type DataTableNode = {
    /**
     * Can the user click on column headers to sort the table? (default: true)
     */
    allowSorting?: boolean | null;
    /**
     * Columns shown in the table, unless the `source` provides them.
     */
    columns?: Array<string> | null;
    /**
     * Context for the table, used by components like ColumnConfigurator
     */
    context?: DataTableNodeViewPropsContext | null;
    /**
     * Default columns to use when resetting column configuration
     */
    defaultColumns?: Array<string> | null;
    /**
     * Uses the embedded version of LemonTable
     */
    embedded?: boolean | null;
    /**
     * Can expand row to show raw event data (default: true)
     */
    expandable?: boolean | null;
    /**
     * Show with most visual options enabled. Used in scenes.
     */
    full?: boolean | null;
    /**
     * Columns that aren't shown in the table, even if in columns or returned data
     */
    hiddenColumns?: Array<string> | null;
    kind?: DataTableNode.kind;
    /**
     * Columns that are sticky when scrolling horizontally
     */
    pinnedColumns?: Array<string> | null;
    /**
     * Link properties via the URL (default: false)
     */
    propertiesViaUrl?: boolean | null;
    response?: (Record<string, any> | Response | Response1 | Response2 | Response3 | Response4 | Response5 | Response6 | Response8 | Response9 | Response10 | Response11 | Response12 | Response13 | Response14 | Response15 | Response17 | Response18 | Response19 | Response20 | Response21 | Response22 | Response23) | null;
    /**
     * Show the kebab menu at the end of the row
     */
    showActions?: boolean | null;
    /**
     * Show a button to configure the table's columns if possible
     */
    showColumnConfigurator?: boolean | null;
    /**
     * Show date range selector
     */
    showDateRange?: boolean | null;
    /**
     * Show the time it takes to run a query
     */
    showElapsedTime?: boolean | null;
    /**
     * Include an event filter above the table (EventsNode only)
     */
    showEventFilter?: boolean | null;
    /**
     * Show the export button
     */
    showExport?: boolean | null;
    /**
     * Include a HogQL query editor above HogQL tables
     */
    showHogQLEditor?: boolean | null;
    /**
     * Show a button to open the current query as a new insight. (default: true)
     */
    showOpenEditorButton?: boolean | null;
    /**
     * Show a button to configure and persist the table's default columns if possible
     */
    showPersistentColumnConfigurator?: boolean | null;
    /**
     * Include a property filter above the table
     */
    showPropertyFilter?: (boolean | Array<TaxonomicFilterGroupType>) | null;
    /**
     * Show a reload button
     */
    showReload?: boolean | null;
    /**
     * Show a results table
     */
    showResultsTable?: boolean | null;
    /**
     * Show saved filters feature for this table (requires uniqueKey)
     */
    showSavedFilters?: boolean | null;
    /**
     * Shows a list of saved queries
     */
    showSavedQueries?: boolean | null;
    /**
     * Include a free text search field (PersonsNode only)
     */
    showSearch?: boolean | null;
    /**
     * Show filter to exclude test accounts
     */
    showTestAccountFilters?: boolean | null;
    /**
     * Show a detailed query timing breakdown
     */
    showTimings?: boolean | null;
    /**
     * Source of the events
     */
    source: (EventsNode | EventsQuery | PersonsNode | ActorsQuery | GroupsQuery | HogQLQuery | WebOverviewQuery | WebStatsTableQuery | WebExternalClicksTableQuery | WebGoalsQuery | WebVitalsQuery | WebVitalsPathBreakdownQuery | SessionAttributionExplorerQuery | RevenueAnalyticsGrossRevenueQuery | RevenueAnalyticsMetricsQuery | RevenueAnalyticsMRRQuery | RevenueAnalyticsOverviewQuery | RevenueAnalyticsTopCustomersQuery | RevenueExampleEventsQuery | RevenueExampleDataWarehouseTablesQuery | MarketingAnalyticsTableQuery | MarketingAnalyticsAggregatedQuery | ErrorTrackingQuery | ErrorTrackingIssueCorrelationQuery | ExperimentFunnelsQuery | ExperimentTrendsQuery | TracesQuery | TraceQuery);
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace DataTableNode {
    export enum kind {
        DATA_TABLE_NODE = 'DataTableNode',
    }
}

