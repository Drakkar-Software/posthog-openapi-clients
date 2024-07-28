/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightDateRange } from './InsightDateRange';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { RetentionFilter } from './RetentionFilter';
import type { RetentionQueryResponse } from './RetentionQueryResponse';
export type RetentionQuery = {
    /**
     * Groups aggregation
     */
    aggregation_group_type_index?: (number | null);
    /**
     * Date range for the query
     */
    dateRange?: (InsightDateRange | null);
    /**
     * Exclude internal and test users by applying the respective filters
     */
    filterTestAccounts?: (boolean | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    /**
     * Property filters for all series
     */
    properties?: (PropertyGroupFilter | null);
    response?: (RetentionQueryResponse | null);
    /**
     * Properties specific to the retention insight
     */
    retentionFilter: RetentionFilter;
    /**
     * Sampling rate
     */
    samplingFactor?: (number | null);
};

