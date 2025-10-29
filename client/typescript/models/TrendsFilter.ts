/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AggregationAxisFormat } from './AggregationAxisFormat';
import type { ChartDisplayType } from './ChartDisplayType';
import type { DetailedResultsAggregationType } from './DetailedResultsAggregationType';
import type { GoalLine } from './GoalLine';
import type { ResultCustomizationBy } from './ResultCustomizationBy';
import type { ResultCustomizationByPosition } from './ResultCustomizationByPosition';
import type { ResultCustomizationByValue } from './ResultCustomizationByValue';
import type { TrendsFormulaNode } from './TrendsFormulaNode';
import type { YAxisScaleType } from './YAxisScaleType';
export type TrendsFilter = {
    aggregationAxisFormat?: AggregationAxisFormat | null;
    aggregationAxisPostfix?: string | null;
    aggregationAxisPrefix?: string | null;
    breakdown_histogram_bin_count?: number | null;
    confidenceLevel?: number | null;
    decimalPlaces?: number | null;
    /**
     * detailed results table
     */
    detailedResultsAggregationType?: DetailedResultsAggregationType | null;
    display?: ChartDisplayType | null;
    formula?: string | null;
    /**
     * List of formulas with optional custom names. Takes precedence over formula/formulas if set.
     */
    formulaNodes?: Array<TrendsFormulaNode> | null;
    formulas?: Array<string> | null;
    /**
     * Goal Lines
     */
    goalLines?: Array<GoalLine> | null;
    hiddenLegendIndexes?: Array<number> | null;
    minDecimalPlaces?: number | null;
    movingAverageIntervals?: number | null;
    /**
     * Wether result datasets are associated by their values or by their order.
     */
    resultCustomizationBy?: ResultCustomizationBy | null;
    /**
     * Customizations for the appearance of result datasets.
     */
    resultCustomizations?: (Record<string, ResultCustomizationByValue> | Record<string, ResultCustomizationByPosition>) | null;
    showAlertThresholdLines?: boolean | null;
    showConfidenceIntervals?: boolean | null;
    showLabelsOnSeries?: boolean | null;
    showLegend?: boolean | null;
    showMovingAverage?: boolean | null;
    showMultipleYAxes?: boolean | null;
    showPercentStackView?: boolean | null;
    showTrendLines?: boolean | null;
    showValuesOnSeries?: boolean | null;
    smoothingIntervals?: number | null;
    yAxisScaleType?: YAxisScaleType | null;
};

