/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { ErrorTrackingQueryResponse } from './ErrorTrackingQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { Order } from './Order';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
export type ErrorTrackingQuery = {
    dateRange: DateRange;
    eventColumns?: (Array<string> | null);
    filterGroup?: (PropertyGroupFilter | null);
    filterTestAccounts?: (boolean | null);
    fingerprint?: (string | null);
    kind?: any;
    limit?: (number | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    offset?: (number | null);
    order?: (Order | null);
    response?: (ErrorTrackingQueryResponse | null);
    select?: (Array<string> | null);
};

