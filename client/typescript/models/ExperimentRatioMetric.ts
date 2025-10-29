/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { EventsNode } from './EventsNode';
import type { ExperimentDataWarehouseNode } from './ExperimentDataWarehouseNode';
import type { ExperimentMetricGoal } from './ExperimentMetricGoal';
import type { FunnelConversionWindowTimeUnit } from './FunnelConversionWindowTimeUnit';
export type ExperimentRatioMetric = {
    conversion_window?: number | null;
    conversion_window_unit?: FunnelConversionWindowTimeUnit | null;
    denominator: (EventsNode | ActionsNode | ExperimentDataWarehouseNode);
    fingerprint?: string | null;
    goal?: ExperimentMetricGoal | null;
    isSharedMetric?: boolean | null;
    kind?: ExperimentRatioMetric.kind;
    metric_type?: ExperimentRatioMetric.metric_type;
    name?: string | null;
    numerator: (EventsNode | ActionsNode | ExperimentDataWarehouseNode);
    response?: Record<string, any> | null;
    sharedMetricId?: number | null;
    uuid?: string | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentRatioMetric {
    export enum kind {
        EXPERIMENT_METRIC = 'ExperimentMetric',
    }
    export enum metric_type {
        RATIO = 'ratio',
    }
}

