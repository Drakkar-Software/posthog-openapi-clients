/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { CohortPropertyFilter } from './CohortPropertyFilter';
import type { EmptyPropertyFilter } from './EmptyPropertyFilter';
import type { FunnelCorrelationActorsQuery } from './FunnelCorrelationActorsQuery';
import type { FunnelsActorsQuery } from './FunnelsActorsQuery';
import type { HogQLPropertyFilter } from './HogQLPropertyFilter';
import type { HogQLQuery } from './HogQLQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { PropertyGroupFilterValue } from './PropertyGroupFilterValue';
import type { QueryLogTags } from './QueryLogTags';
import type { StickinessActorsQuery } from './StickinessActorsQuery';
export type ActorsQuery = {
    /**
     * Currently only person filters supported. No filters for querying groups. See `filter_conditions()` in actor_strategies.py.
     */
    fixedProperties?: Array<(PersonPropertyFilter | CohortPropertyFilter | HogQLPropertyFilter | EmptyPropertyFilter)> | null;
    kind?: ActorsQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    orderBy?: Array<string> | null;
    /**
     * Currently only person filters supported. No filters for querying groups. See `filter_conditions()` in actor_strategies.py.
     */
    properties?: PropertyGroupFilterValue | null;
    response?: ActorsQueryResponse | null;
    search?: string | null;
    select?: Array<string> | null;
    source?: (InsightActorsQuery | FunnelsActorsQuery | FunnelCorrelationActorsQuery | StickinessActorsQuery | HogQLQuery) | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace ActorsQuery {
    export enum kind {
        ACTORS_QUERY = 'ActorsQuery',
    }
}

