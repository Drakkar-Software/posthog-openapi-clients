/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChartDisplayType } from './ChartDisplayType';
import type { ResultCustomizationBy } from './ResultCustomizationBy';
import type { ResultCustomizationByPosition } from './ResultCustomizationByPosition';
import type { ResultCustomizationByValue } from './ResultCustomizationByValue';
import type { StickinessComputationMode } from './StickinessComputationMode';
import type { StickinessCriteria } from './StickinessCriteria';
export type StickinessFilter = {
    computedAs?: StickinessComputationMode | null;
    display?: ChartDisplayType | null;
    hiddenLegendIndexes?: Array<number> | null;
    /**
     * Whether result datasets are associated by their values or by their order.
     */
    resultCustomizationBy?: ResultCustomizationBy | null;
    /**
     * Customizations for the appearance of result datasets.
     */
    resultCustomizations?: (Record<string, ResultCustomizationByValue> | Record<string, ResultCustomizationByPosition>) | null;
    showLegend?: boolean | null;
    showMultipleYAxes?: boolean | null;
    showValuesOnSeries?: boolean | null;
    stickinessCriteria?: StickinessCriteria | null;
};

