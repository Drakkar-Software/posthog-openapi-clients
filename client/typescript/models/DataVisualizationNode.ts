/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChartDisplayType } from './ChartDisplayType';
import type { ChartSettings } from './ChartSettings';
import type { HogQLQuery } from './HogQLQuery';
import type { TableSettings } from './TableSettings';
export type DataVisualizationNode = {
    chartSettings?: ChartSettings | null;
    display?: ChartDisplayType | null;
    kind?: DataVisualizationNode.kind;
    source: HogQLQuery;
    tableSettings?: TableSettings | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace DataVisualizationNode {
    export enum kind {
        DATA_VISUALIZATION_NODE = 'DataVisualizationNode',
    }
}

