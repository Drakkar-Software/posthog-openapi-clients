/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
export type FunnelsActorsQuery = {
    /**
     * Index of the step for which we want to get the timestamp for, per person. Positive for converted persons, negative for dropped of persons.
     */
    funnelStep?: number | null;
    /**
     * The breakdown value for which to get persons for. This is an array for person and event properties, a string for groups and an integer for cohorts.
     */
    funnelStepBreakdown?: (number | string) | null;
    funnelTrendsDropOff?: boolean | null;
    /**
     * Used together with `funnelTrendsDropOff` for funnels time conversion date for the persons modal.
     */
    funnelTrendsEntrancePeriodStart?: string | null;
    includeRecordings?: boolean | null;
    kind?: FunnelsActorsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: ActorsQueryResponse | null;
    source: FunnelsQuery;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace FunnelsActorsQuery {
    export enum kind {
        FUNNELS_ACTORS_QUERY = 'FunnelsActorsQuery',
    }
}

