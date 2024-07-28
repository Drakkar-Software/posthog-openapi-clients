/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BreakdownAttributionType } from './BreakdownAttributionType';
import type { FunnelConversionWindowTimeUnit } from './FunnelConversionWindowTimeUnit';
import type { FunnelLayout } from './FunnelLayout';
import type { FunnelStepReference } from './FunnelStepReference';
import type { FunnelVizType } from './FunnelVizType';
import type { StepOrderValue } from './StepOrderValue';
export type FunnelsFilter = {
    binCount?: (number | null);
    breakdownAttributionType?: (BreakdownAttributionType | null);
    breakdownAttributionValue?: (number | null);
    exclusions?: null;
    funnelAggregateByHogQL?: (string | null);
    funnelFromStep?: (number | null);
    funnelOrderType?: (StepOrderValue | null);
    funnelStepReference?: (FunnelStepReference | null);
    funnelToStep?: (number | null);
    funnelVizType?: (FunnelVizType | null);
    funnelWindowInterval?: (number | null);
    funnelWindowIntervalUnit?: (FunnelConversionWindowTimeUnit | null);
    hiddenLegendBreakdowns?: (Array<string> | null);
    layout?: (FunnelLayout | null);
};

