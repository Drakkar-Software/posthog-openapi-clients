/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Filters } from './Filters';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { SessionAttributionExplorerQueryResponse } from './SessionAttributionExplorerQueryResponse';
import type { SessionAttributionGroupBy } from './SessionAttributionGroupBy';
export type SessionAttributionExplorerQuery = {
    filters?: Filters | null;
    groupBy: Array<SessionAttributionGroupBy>;
    kind?: SessionAttributionExplorerQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    response?: SessionAttributionExplorerQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace SessionAttributionExplorerQuery {
    export enum kind {
        SESSION_ATTRIBUTION_EXPLORER_QUERY = 'SessionAttributionExplorerQuery',
    }
}

