/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExperimentFunnelsQueryResponse } from './ExperimentFunnelsQueryResponse';
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type ExperimentFunnelsQuery = {
    experiment_id?: number | null;
    fingerprint?: string | null;
    funnels_query: FunnelsQuery;
    kind?: ExperimentFunnelsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    name?: string | null;
    response?: ExperimentFunnelsQueryResponse | null;
    tags?: QueryLogTags | null;
    uuid?: string | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ExperimentFunnelsQuery {
    export enum kind {
        EXPERIMENT_FUNNELS_QUERY = 'ExperimentFunnelsQuery',
    }
}

