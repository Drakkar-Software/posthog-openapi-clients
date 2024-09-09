/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentResultFunnelQueryResponse } from './ExperimentResultFunnelQueryResponse';
import type { ExperimentResultTrendQueryResponse } from './ExperimentResultTrendQueryResponse';
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { TrendsQuery } from './TrendsQuery';
export type ExperimentResultQuery = {
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    response?: (ExperimentResultTrendQueryResponse | ExperimentResultFunnelQueryResponse | null);
    source: (TrendsQuery | FunnelsQuery);
    variants: Array<string>;
};

