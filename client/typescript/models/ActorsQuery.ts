/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { HogQLQuery } from './HogQLQuery';
import type { InsightActorsQuery } from './InsightActorsQuery';
export type ActorsQuery = {
    fixedProperties?: null;
    kind?: any;
    limit?: (number | null);
    offset?: (number | null);
    orderBy?: (Array<string> | null);
    properties?: null;
    /**
     * Cached query response
     */
    response?: (ActorsQueryResponse | null);
    search?: (string | null);
    select?: (Array<string> | null);
    source?: (InsightActorsQuery | HogQLQuery | null);
};

