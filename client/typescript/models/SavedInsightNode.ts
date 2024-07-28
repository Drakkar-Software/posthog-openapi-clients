/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaxonomicFilterGroupType } from './TaxonomicFilterGroupType';
import type { VizSpecificOptions } from './VizSpecificOptions';
export type SavedInsightNode = {
    /**
     * Can the user click on column headers to sort the table? (default: true)
     */
    allowSorting?: (boolean | null);
    /**
     * Query is embedded inside another bordered component
     */
    embedded?: (boolean | null);
    /**
     * Can expand row to show raw event data (default: true)
     */
    expandable?: (boolean | null);
    /**
     * Show with most visual options enabled. Used in insight scene.
     */
    full?: (boolean | null);
    hidePersonsModal?: (boolean | null);
    kind?: any;
    /**
     * Link properties via the URL (default: false)
     */
    propertiesViaUrl?: (boolean | null);
    shortId: string;
    /**
     * Show the kebab menu at the end of the row
     */
    showActions?: (boolean | null);
    /**
     * Show a button to configure the table's columns if possible
     */
    showColumnConfigurator?: (boolean | null);
    showCorrelationTable?: (boolean | null);
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
    showFilters?: (boolean | null);
    showHeader?: (boolean | null);
    /**
     * Include a HogQL query editor above HogQL tables
     */
    showHogQLEditor?: (boolean | null);
    showLastComputation?: (boolean | null);
    showLastComputationRefresh?: (boolean | null);
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
    showResults?: (boolean | null);
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
    showTable?: (boolean | null);
    /**
     * Show filter to exclude test accounts
     */
    showTestAccountFilters?: (boolean | null);
    /**
     * Show a detailed query timing breakdown
     */
    showTimings?: (boolean | null);
    suppressSessionAnalysisWarning?: (boolean | null);
    vizSpecificOptions?: (VizSpecificOptions | null);
};

