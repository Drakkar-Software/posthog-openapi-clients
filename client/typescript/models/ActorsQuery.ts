/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { FunnelCorrelationActorsQuery } from './FunnelCorrelationActorsQuery';
import type { FunnelsActorsQuery } from './FunnelsActorsQuery';
import type { HogQLQuery } from './HogQLQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { InsightActorsQuery } from './InsightActorsQuery';
export type ActorsQuery = {
    fixedProperties?: null;
    kind?: any;
    limit?: (number | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    offset?: (number | null);
    orderBy?: (Array<string> | null);
    properties?: null;
    response?: (ActorsQueryResponse | null);
    search?: (string | null);
    select?: (Array<string> | null);
    source?: (InsightActorsQuery | FunnelsActorsQuery | FunnelCorrelationActorsQuery | HogQLQuery | null);
};

