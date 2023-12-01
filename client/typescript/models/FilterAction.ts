/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Property } from './Property';

export type FilterAction = {
    /**
     * ID of the action to filter on. For example `2841`.
     */
    id: string;
    properties?: Array<Property>;
    /**
     * How to aggregate results, shown as "counted by" in the interface.
     * - `total` (default): no aggregation, count by events
     * - `dau`: count by unique users. Despite the name, if you select the `interval` to be weekly or monthly, this will show weekly or monthly active users respectively
     * - `weekly_active`: rolling average of users of the last 7 days.
     * - `monthly_active`: rolling average of users of the last month.
     * - `unique_group`: count by group. Requires `math_group_type_index` to be sent. You can get the index by hitting `/api/projects/@current/groups_types/`.
     *
     * All of the below are property aggregations, and require `math_property` to be sent with an event property.
     * - `sum`: sum of a numeric property.
     * - `min`: min of a numeric property.
     * - `max`: max of a numeric property.
     * - `median`: median of a numeric property.
     * - `p90`: 90th percentile of a numeric property.
     * - `p95` 95th percentile of a numeric property.
     * - `p99`: 99th percentile of a numeric property.
     *
     */
    math?: FilterAction.math;
};

export namespace FilterAction {

    /**
     * How to aggregate results, shown as "counted by" in the interface.
     * - `total` (default): no aggregation, count by events
     * - `dau`: count by unique users. Despite the name, if you select the `interval` to be weekly or monthly, this will show weekly or monthly active users respectively
     * - `weekly_active`: rolling average of users of the last 7 days.
     * - `monthly_active`: rolling average of users of the last month.
     * - `unique_group`: count by group. Requires `math_group_type_index` to be sent. You can get the index by hitting `/api/projects/@current/groups_types/`.
     *
     * All of the below are property aggregations, and require `math_property` to be sent with an event property.
     * - `sum`: sum of a numeric property.
     * - `min`: min of a numeric property.
     * - `max`: max of a numeric property.
     * - `median`: median of a numeric property.
     * - `p90`: 90th percentile of a numeric property.
     * - `p95` 95th percentile of a numeric property.
     * - `p99`: 99th percentile of a numeric property.
     *
     */
    export enum math {
        TOTAL = 'total',
        DAU = 'dau',
        WEEKLY_ACTIVE = 'weekly_active',
        MONTHLY_ACTIVE = 'monthly_active',
        UNIQUE_GROUP = 'unique_group',
        UNIQUE_SESSION = 'unique_session',
        SUM = 'sum',
        MIN = 'min',
        MAX = 'max',
        AVG = 'avg',
        MEDIAN = 'median',
        P90 = 'p90',
        P95 = 'p95',
        P99 = 'p99',
        MIN_COUNT_PER_ACTOR = 'min_count_per_actor',
        MAX_COUNT_PER_ACTOR = 'max_count_per_actor',
        AVG_COUNT_PER_ACTOR = 'avg_count_per_actor',
        MEDIAN_COUNT_PER_ACTOR = 'median_count_per_actor',
        P90_COUNT_PER_ACTOR = 'p90_count_per_actor',
        P95_COUNT_PER_ACTOR = 'p95_count_per_actor',
        P99_COUNT_PER_ACTOR = 'p99_count_per_actor',
        HOGQL = 'hogql',
    }


}

