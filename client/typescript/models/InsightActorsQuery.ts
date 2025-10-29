/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { Compare } from './Compare';
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { LifecycleQuery } from './LifecycleQuery';
import type { PathsQuery } from './PathsQuery';
import type { QueryLogTags } from './QueryLogTags';
import type { RetentionQuery } from './RetentionQuery';
import type { StickinessQuery } from './StickinessQuery';
import type { TrendsQuery } from './TrendsQuery';
export type InsightActorsQuery = {
    breakdown?: (string | Array<string> | number) | null;
    compare?: Compare | null;
    day?: (string | number) | null;
    includeRecordings?: boolean | null;
    /**
     * An interval selected out of available intervals in source query.
     */
    interval?: number | null;
    kind?: InsightActorsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: ActorsQueryResponse | null;
    series?: number | null;
    source: (TrendsQuery | FunnelsQuery | RetentionQuery | PathsQuery | StickinessQuery | LifecycleQuery);
    status?: string | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace InsightActorsQuery {
    export enum kind {
        INSIGHT_ACTORS_QUERY = 'InsightActorsQuery',
    }
}

