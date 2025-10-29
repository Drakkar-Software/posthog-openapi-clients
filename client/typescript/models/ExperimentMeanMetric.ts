/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { EventsNode } from './EventsNode';
import type { ExperimentDataWarehouseNode } from './ExperimentDataWarehouseNode';
import type { ExperimentMetricGoal } from './ExperimentMetricGoal';
import type { FunnelConversionWindowTimeUnit } from './FunnelConversionWindowTimeUnit';
export type ExperimentMeanMetric = {
    conversion_window?: number | null;
    conversion_window_unit?: FunnelConversionWindowTimeUnit | null;
    fingerprint?: string | null;
    goal?: ExperimentMetricGoal | null;
    ignore_zeros?: boolean | null;
    isSharedMetric?: boolean | null;
    kind?: ExperimentMeanMetric.kind;
    lower_bound_percentile?: number | null;
    metric_type?: ExperimentMeanMetric.metric_type;
    name?: string | null;
    response?: Record<string, any> | null;
    sharedMetricId?: number | null;
    source: (EventsNode | ActionsNode | ExperimentDataWarehouseNode);
    upper_bound_percentile?: number | null;
    uuid?: string | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentMeanMetric {
    export enum kind {
        EXPERIMENT_METRIC = 'ExperimentMetric',
    }
    export enum metric_type {
        MEAN = 'mean',
    }
}

