/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type RevenueAnalyticsPropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: RevenueAnalyticsPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace RevenueAnalyticsPropertyFilter {
    export enum type {
        REVENUE_ANALYTICS = 'revenue_analytics',
    }
}

