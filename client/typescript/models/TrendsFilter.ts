/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregationAxisFormat } from './AggregationAxisFormat';
import type { ChartDisplayType } from './ChartDisplayType';
export type TrendsFilter = {
    aggregationAxisFormat?: (AggregationAxisFormat | null);
    aggregationAxisPostfix?: (string | null);
    aggregationAxisPrefix?: (string | null);
    breakdown_histogram_bin_count?: (number | null);
    compare?: (boolean | null);
    decimalPlaces?: (number | null);
    display?: (ChartDisplayType | null);
    formula?: (string | null);
    hidden_legend_indexes?: (Array<number> | null);
    showLabelsOnSeries?: (boolean | null);
    showLegend?: (boolean | null);
    showPercentStackView?: (boolean | null);
    showValuesOnSeries?: (boolean | null);
    smoothingIntervals?: (number | null);
};

