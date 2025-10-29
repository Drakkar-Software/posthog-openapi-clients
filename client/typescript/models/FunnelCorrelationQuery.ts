/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelCorrelationResponse } from './FunnelCorrelationResponse';
import type { FunnelCorrelationResultsType } from './FunnelCorrelationResultsType';
import type { FunnelsActorsQuery } from './FunnelsActorsQuery';
export type FunnelCorrelationQuery = {
    funnelCorrelationEventExcludePropertyNames?: Array<string> | null;
    funnelCorrelationEventNames?: Array<string> | null;
    funnelCorrelationExcludeEventNames?: Array<string> | null;
    funnelCorrelationExcludeNames?: Array<string> | null;
    funnelCorrelationNames?: Array<string> | null;
    funnelCorrelationType: FunnelCorrelationResultsType;
    kind?: FunnelCorrelationQuery.kind;
    response?: FunnelCorrelationResponse | null;
    source: FunnelsActorsQuery;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace FunnelCorrelationQuery {
    export enum kind {
        FUNNEL_CORRELATION_QUERY = 'FunnelCorrelationQuery',
    }
}

