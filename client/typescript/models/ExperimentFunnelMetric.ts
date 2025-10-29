/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { EventsNode } from './EventsNode';
import type { ExperimentMetricGoal } from './ExperimentMetricGoal';
import type { FunnelConversionWindowTimeUnit } from './FunnelConversionWindowTimeUnit';
import type { StepOrderValue } from './StepOrderValue';
export type ExperimentFunnelMetric = {
    conversion_window?: number | null;
    conversion_window_unit?: FunnelConversionWindowTimeUnit | null;
    fingerprint?: string | null;
    funnel_order_type?: StepOrderValue | null;
    goal?: ExperimentMetricGoal | null;
    isSharedMetric?: boolean | null;
    kind?: ExperimentFunnelMetric.kind;
    metric_type?: ExperimentFunnelMetric.metric_type;
    name?: string | null;
    response?: Record<string, any> | null;
    series: Array<(EventsNode | ActionsNode)>;
    sharedMetricId?: number | null;
    uuid?: string | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentFunnelMetric {
    export enum kind {
        EXPERIMENT_METRIC = 'ExperimentMetric',
    }
    export enum metric_type {
        FUNNEL = 'funnel',
    }
}

