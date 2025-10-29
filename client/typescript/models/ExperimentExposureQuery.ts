/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentExposureCriteria } from './ExperimentExposureCriteria';
import type { ExperimentExposureQueryResponse } from './ExperimentExposureQueryResponse';
import type { ExperimentHoldoutType } from './ExperimentHoldoutType';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type ExperimentExposureQuery = {
    end_date?: string | null;
    experiment_id?: number | null;
    experiment_name: string;
    exposure_criteria?: ExperimentExposureCriteria | null;
    feature_flag: Record<string, any>;
    holdout?: ExperimentHoldoutType | null;
    kind?: ExperimentExposureQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: ExperimentExposureQueryResponse | null;
    start_date?: string | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentExposureQuery {
    export enum kind {
        EXPERIMENT_EXPOSURE_QUERY = 'ExperimentExposureQuery',
    }
}

