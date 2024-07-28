/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { EventsNode } from './EventsNode';
import type { FunnelCorrelationQuery } from './FunnelCorrelationQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
export type FunnelCorrelationActorsQuery = {
    funnelCorrelationPersonConverted?: (boolean | null);
    funnelCorrelationPersonEntity?: (EventsNode | ActionsNode | DataWarehouseNode | null);
    funnelCorrelationPropertyValues?: null;
    includeRecordings?: (boolean | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    response?: (ActorsQueryResponse | null);
    source: FunnelCorrelationQuery;
};

