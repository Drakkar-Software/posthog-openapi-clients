/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentTrendsQueryResponse } from './ExperimentTrendsQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { TrendsQuery } from './TrendsQuery';
export type ExperimentTrendsQuery = {
    count_query: TrendsQuery;
    experiment_id?: number | null;
    exposure_query?: TrendsQuery | null;
    fingerprint?: string | null;
    kind?: ExperimentTrendsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    name?: string | null;
    response?: ExperimentTrendsQueryResponse | null;
    tags?: QueryLogTags | null;
    uuid?: string | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentTrendsQuery {
    export enum kind {
        EXPERIMENT_TRENDS_QUERY = 'ExperimentTrendsQuery',
    }
}

