/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionsNode } from './ActionsNode';
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { DataWarehouseNode } from './DataWarehouseNode';
import type { EventsNode } from './EventsNode';
import type { FunnelCorrelationQuery } from './FunnelCorrelationQuery';
export type FunnelCorrelationActorsQuery = {
    funnelCorrelationPersonConverted?: (boolean | null);
    funnelCorrelationPersonEntity?: (EventsNode | ActionsNode | DataWarehouseNode | null);
    funnelCorrelationPropertyValues?: null;
    includeRecordings?: (boolean | null);
    kind?: any;
    response?: (ActorsQueryResponse | null);
    source: FunnelCorrelationQuery;
};

