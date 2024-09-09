/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Filters } from './Filters';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { SessionAttributionExplorerQueryResponse } from './SessionAttributionExplorerQueryResponse';
import type { SessionAttributionGroupBy } from './SessionAttributionGroupBy';
export type SessionAttributionExplorerQuery = {
    filters?: (Filters | null);
    groupBy: Array<SessionAttributionGroupBy>;
    kind?: any;
    limit?: (number | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    offset?: (number | null);
    response?: (SessionAttributionExplorerQueryResponse | null);
};

