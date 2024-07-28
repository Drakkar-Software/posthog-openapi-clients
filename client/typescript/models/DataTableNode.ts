/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQuery } from './ActorsQuery';
import type { ErrorTrackingQuery } from './ErrorTrackingQuery';
import type { EventsNode } from './EventsNode';
import type { EventsQuery } from './EventsQuery';
import type { HogQLQuery } from './HogQLQuery';
import type { PersonsNode } from './PersonsNode';
import type { Response } from './Response';
import type { Response1 } from './Response1';
import type { Response2 } from './Response2';
import type { Response3 } from './Response3';
import type { Response4 } from './Response4';
import type { Response5 } from './Response5';
import type { Response6 } from './Response6';
import type { Response7 } from './Response7';
import type { SessionAttributionExplorerQuery } from './SessionAttributionExplorerQuery';
import type { TaxonomicFilterGroupType } from './TaxonomicFilterGroupType';
import type { WebOverviewQuery } from './WebOverviewQuery';
import type { WebStatsTableQuery } from './WebStatsTableQuery';
import type { WebTopClicksQuery } from './WebTopClicksQuery';
export type DataTableNode = {
    /**
     * Can the user click on column headers to sort the table? (default: true)
     */
    allowSorting?: (boolean | null);
    /**
     * Columns shown in the table, unless the `source` provides them.
     */
    columns?: (Array<string> | null);
    /**
     * Uses the embedded version of LemonTable
     */
    embedded?: (boolean | null);
    /**
     * Can expand row to show raw event data (default: true)
     */
    expandable?: (boolean | null);
    /**
     * Show with most visual options enabled. Used in scenes.
     */
    full?: (boolean | null);
    /**
     * Columns that aren't shown in the table, even if in columns or returned data
     */
    hiddenColumns?: (Array<string> | null);
    kind?: any;
    /**
     * Link properties via the URL (default: false)
     */
    propertiesViaUrl?: (boolean | null);
    response?: (Record<string, any> | Response | Response1 | Response2 | Response3 | Response4 | Response5 | Response6 | Response7 | null);
    /**
     * Show the kebab menu at the end of the row
     */
    showActions?: (boolean | null);
    /**
     * Show a button to configure the table's columns if possible
     */
    showColumnConfigurator?: (boolean | null);
    /**
     * Show date range selector
     */
    showDateRange?: (boolean | null);
    /**
     * Show the time it takes to run a query
     */
    showElapsedTime?: (boolean | null);
    /**
     * Include an event filter above the table (EventsNode only)
     */
    showEventFilter?: (boolean | null);
    /**
     * Show the export button
     */
    showExport?: (boolean | null);
    /**
     * Include a HogQL query editor above HogQL tables
     */
    showHogQLEditor?: (boolean | null);
    /**
     * Show a button to open the current query as a new insight. (default: true)
     */
    showOpenEditorButton?: (boolean | null);
    /**
     * Show a button to configure and persist the table's default columns if possible
     */
    showPersistentColumnConfigurator?: (boolean | null);
    /**
     * Include a property filter above the table
     */
    showPropertyFilter?: (boolean | Array<TaxonomicFilterGroupType> | null);
    /**
     * Show a reload button
     */
    showReload?: (boolean | null);
    /**
     * Show a results table
     */
    showResultsTable?: (boolean | null);
    /**
     * Shows a list of saved queries
     */
    showSavedQueries?: (boolean | null);
    /**
     * Include a free text search field (PersonsNode only)
     */
    showSearch?: (boolean | null);
    /**
     * Show filter to exclude test accounts
     */
    showTestAccountFilters?: (boolean | null);
    /**
     * Show a detailed query timing breakdown
     */
    showTimings?: (boolean | null);
    /**
     * Source of the events
     */
    source: (EventsNode | EventsQuery | PersonsNode | ActorsQuery | HogQLQuery | WebOverviewQuery | WebStatsTableQuery | WebTopClicksQuery | SessionAttributionExplorerQuery | ErrorTrackingQuery);
};

