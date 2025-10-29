/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { Compare } from './Compare';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { StickinessOperator } from './StickinessOperator';
import type { StickinessQuery } from './StickinessQuery';
export type StickinessActorsQuery = {
    compare?: Compare | null;
    day?: (string | number) | null;
    includeRecordings?: boolean | null;
    kind?: StickinessActorsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    operator?: StickinessOperator | null;
    response?: ActorsQueryResponse | null;
    series?: number | null;
    source: StickinessQuery;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace StickinessActorsQuery {
    export enum kind {
        STICKINESS_ACTORS_QUERY = 'StickinessActorsQuery',
    }
}

