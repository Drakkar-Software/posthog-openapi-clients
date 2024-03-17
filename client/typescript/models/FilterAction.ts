/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MathEnum } from './MathEnum';
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
     *
     * * `total` - total
     * * `dau` - dau
     * * `weekly_active` - weekly_active
     * * `monthly_active` - monthly_active
     * * `unique_group` - unique_group
     * * `unique_session` - unique_session
     * * `sum` - sum
     * * `min` - min
     * * `max` - max
     * * `avg` - avg
     * * `median` - median
     * * `p90` - p90
     * * `p95` - p95
     * * `p99` - p99
     * * `min_count_per_actor` - min_count_per_actor
     * * `max_count_per_actor` - max_count_per_actor
     * * `avg_count_per_actor` - avg_count_per_actor
     * * `median_count_per_actor` - median_count_per_actor
     * * `p90_count_per_actor` - p90_count_per_actor
     * * `p95_count_per_actor` - p95_count_per_actor
     * * `p99_count_per_actor` - p99_count_per_actor
     * * `hogql` - hogql
     */
    math?: MathEnum;
};

