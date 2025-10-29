/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { CohortTypeEnum } from './CohortTypeEnum';
import type { NullEnum } from './NullEnum';
import type { UserBasic } from './UserBasic';
export type PatchedCohort = {
    readonly id?: number;
    name?: string | null;
    description?: string;
    groups?: any;
    deleted?: boolean;
    /**
     * Filters for the cohort. Examples:
     *
     * # Behavioral filter (performed event)
     * {
         * "properties": {
             * "type": "OR",
             * "values": [{
                 * "type": "OR",
                 * "values": [{
                     * "key": "address page viewed",
                     * "type": "behavioral",
                     * "value": "performed_event",
                     * "negation": false,
                     * "event_type": "events",
                     * "time_value": "30",
                     * "time_interval": "day"
                     * }]
                     * }]
                     * }
                     * }
                     *
                     * # Person property filter
                     * {
                         * "properties": {
                             * "type": "OR",
                             * "values": [{
                                 * "type": "AND",
                                 * "values": [{
                                     * "key": "promoCodes",
                                     * "type": "person",
                                     * "value": ["1234567890"],
                                     * "negation": false,
                                     * "operator": "exact"
                                     * }]
                                     * }]
                                     * }
                                     * }
                                     *
                                     * # Cohort filter
                                     * {
                                         * "properties": {
                                             * "type": "OR",
                                             * "values": [{
                                                 * "type": "AND",
                                                 * "values": [{
                                                     * "key": "id",
                                                     * "type": "cohort",
                                                     * "value": 8814,
                                                     * "negation": false
                                                     * }]
                                                     * }]
                                                     * }
                                                     * }
                                                     */
                                                    filters?: any;
                                                    query?: any;
                                                    readonly is_calculating?: boolean;
                                                    readonly created_by?: UserBasic;
                                                    readonly created_at?: string | null;
                                                    readonly last_calculation?: string | null;
                                                    readonly errors_calculating?: number;
                                                    readonly count?: number | null;
                                                    is_static?: boolean;
                                                    /**
                                                     * Type of cohort based on filter complexity
                                                     *
                                                     * * `static` - static
                                                     * * `person_property` - person_property
                                                     * * `behavioral` - behavioral
                                                     * * `analytical` - analytical
                                                     */
                                                    cohort_type?: (CohortTypeEnum | BlankEnum | NullEnum) | null;
                                                    readonly experiment_set?: Array<number>;
                                                    _create_in_folder?: string;
                                                    _create_static_person_ids?: Array<string>;
                                                };

