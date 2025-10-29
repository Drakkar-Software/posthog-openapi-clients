/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentFunnelMetric } from './ExperimentFunnelMetric';
import type { ExperimentMeanMetric } from './ExperimentMeanMetric';
import type { ExperimentQueryResponse } from './ExperimentQueryResponse';
import type { ExperimentRatioMetric } from './ExperimentRatioMetric';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type ExperimentQuery = {
    experiment_id?: number | null;
    kind?: ExperimentQuery.kind;
    metric: (ExperimentMeanMetric | ExperimentFunnelMetric | ExperimentRatioMetric);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    name?: string | null;
    response?: ExperimentQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentQuery {
    export enum kind {
        EXPERIMENT_QUERY = 'ExperimentQuery',
    }
}

