/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChartDisplayType } from './ChartDisplayType';
import type { ChartSettings } from './ChartSettings';
import type { HogQLQuery } from './HogQLQuery';
export type DataVisualizationNode = {
    chartSettings?: (ChartSettings | null);
    display?: (ChartDisplayType | null);
    kind?: any;
    source: HogQLQuery;
};

