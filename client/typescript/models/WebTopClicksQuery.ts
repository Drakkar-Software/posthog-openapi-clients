/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { Sampling } from './Sampling';
import type { WebTopClicksQueryResponse } from './WebTopClicksQueryResponse';
export type WebTopClicksQuery = {
    dateRange?: (DateRange | null);
    kind?: any;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter)>;
    response?: (WebTopClicksQueryResponse | null);
    sampling?: (Sampling | null);
    useSessionsTable?: (boolean | null);
};

