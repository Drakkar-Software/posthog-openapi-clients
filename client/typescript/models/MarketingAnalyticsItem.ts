/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebAnalyticsItemKind } from './WebAnalyticsItemKind';
export type MarketingAnalyticsItem = {
    changeFromPreviousPct?: number | null;
    hasComparison?: boolean | null;
    isIncreaseBad?: boolean | null;
    key: string;
    kind: WebAnalyticsItemKind;
    previous?: (number | string) | null;
    value?: (number | string) | null;
};

