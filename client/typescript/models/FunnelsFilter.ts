/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BreakdownAttributionType } from './BreakdownAttributionType';
import type { FunnelConversionWindowTimeUnit } from './FunnelConversionWindowTimeUnit';
import type { FunnelExclusionActionsNode } from './FunnelExclusionActionsNode';
import type { FunnelExclusionEventsNode } from './FunnelExclusionEventsNode';
import type { FunnelLayout } from './FunnelLayout';
import type { FunnelStepReference } from './FunnelStepReference';
import type { FunnelVizType } from './FunnelVizType';
import type { GoalLine } from './GoalLine';
import type { ResultCustomizationByValue } from './ResultCustomizationByValue';
import type { StepOrderValue } from './StepOrderValue';
export type FunnelsFilter = {
    binCount?: number | null;
    breakdownAttributionType?: BreakdownAttributionType | null;
    breakdownAttributionValue?: number | null;
    exclusions?: Array<(FunnelExclusionEventsNode | FunnelExclusionActionsNode)> | null;
    funnelAggregateByHogQL?: string | null;
    funnelFromStep?: number | null;
    funnelOrderType?: StepOrderValue | null;
    funnelStepReference?: FunnelStepReference | null;
    /**
     * To select the range of steps for trends & time to convert funnels, 0-indexed
     */
    funnelToStep?: number | null;
    funnelVizType?: FunnelVizType | null;
    funnelWindowInterval?: number | null;
    funnelWindowIntervalUnit?: FunnelConversionWindowTimeUnit | null;
    /**
     * Goal Lines
     */
    goalLines?: Array<GoalLine> | null;
    hiddenLegendBreakdowns?: Array<string> | null;
    layout?: FunnelLayout | null;
    /**
     * Customizations for the appearance of result datasets.
     */
    resultCustomizations?: Record<string, ResultCustomizationByValue> | null;
    showValuesOnSeries?: boolean | null;
    useUdf?: boolean | null;
};

