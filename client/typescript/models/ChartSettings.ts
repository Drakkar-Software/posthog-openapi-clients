/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChartAxis } from './ChartAxis';
import type { GoalLine } from './GoalLine';
import type { YAxisSettings } from './YAxisSettings';
export type ChartSettings = {
    goalLines?: (Array<GoalLine> | null);
    leftYAxisSettings?: (YAxisSettings | null);
    rightYAxisSettings?: (YAxisSettings | null);
    /**
     * Whether we fill the bars to 100% in stacked mode
     */
    stackBars100?: (boolean | null);
    xAxis?: (ChartAxis | null);
    yAxis?: (Array<ChartAxis> | null);
    /**
     * Deprecated: use `[left|right]YAxisSettings`. Whether the Y axis should start at zero
     */
    yAxisAtZero?: (boolean | null);
};

