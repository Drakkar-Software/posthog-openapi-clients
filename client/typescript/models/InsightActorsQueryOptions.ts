/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelCorrelationActorsQuery } from './FunnelCorrelationActorsQuery';
import type { FunnelsActorsQuery } from './FunnelsActorsQuery';
import type { InsightActorsQuery } from './InsightActorsQuery';
import type { InsightActorsQueryOptionsResponse } from './InsightActorsQueryOptionsResponse';
export type InsightActorsQueryOptions = {
    kind?: any;
    response?: (InsightActorsQueryOptionsResponse | null);
    source: (InsightActorsQuery | FunnelsActorsQuery | FunnelCorrelationActorsQuery);
};

