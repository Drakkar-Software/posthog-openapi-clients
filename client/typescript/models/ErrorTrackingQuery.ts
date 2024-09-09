/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { ErrorTrackingQueryResponse } from './ErrorTrackingQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { Order } from './Order';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
export type ErrorTrackingQuery = {
    assignee?: (number | null);
    dateRange: DateRange;
    filterGroup?: (PropertyGroupFilter | null);
    filterTestAccounts?: (boolean | null);
    fingerprint?: (Array<string> | null);
    kind?: any;
    limit?: (number | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    order?: (Order | null);
    response?: (ErrorTrackingQueryResponse | null);
    select?: (Array<string> | null);
};

