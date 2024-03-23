/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelsQuery } from './FunnelsQuery';
import type { LifecycleQuery } from './LifecycleQuery';
import type { PathsQuery } from './PathsQuery';
import type { RetentionQuery } from './RetentionQuery';
import type { StickinessQuery } from './StickinessQuery';
import type { TrendsQuery } from './TrendsQuery';
import type { VizSpecificOptions } from './VizSpecificOptions';
export type InsightVizNode = {
    /**
     * Query is embedded inside another bordered component
     */
    embedded?: (boolean | null);
    /**
     * Show with most visual options enabled. Used in insight scene.
     */
    full?: (boolean | null);
    hidePersonsModal?: (boolean | null);
    kind?: any;
    showCorrelationTable?: (boolean | null);
    showFilters?: (boolean | null);
    showHeader?: (boolean | null);
    showLastComputation?: (boolean | null);
    showLastComputationRefresh?: (boolean | null);
    showResults?: (boolean | null);
    showTable?: (boolean | null);
    source: (TrendsQuery | FunnelsQuery | RetentionQuery | PathsQuery | StickinessQuery | LifecycleQuery);
    suppressSessionAnalysisWarning?: (boolean | null);
    vizSpecificOptions?: (VizSpecificOptions | null);
};

