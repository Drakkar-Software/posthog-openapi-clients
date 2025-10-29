/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelCorrelationActorsQuery } from './FunnelCorrelationActorsQuery';
import type { FunnelsActorsQuery } from './FunnelsActorsQuery';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { InsightActorsQueryOptionsResponse } from './InsightActorsQueryOptionsResponse';
import type { StickinessActorsQuery } from './StickinessActorsQuery';
export type InsightActorsQueryOptions = {
    kind?: InsightActorsQueryOptions.kind;
    response?: InsightActorsQueryOptionsResponse | null;
    source: (InsightActorsQuery | FunnelsActorsQuery | FunnelCorrelationActorsQuery | StickinessActorsQuery);
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace InsightActorsQueryOptions {
    export enum kind {
        INSIGHT_ACTORS_QUERY_OPTIONS = 'InsightActorsQueryOptions',
    }
}

