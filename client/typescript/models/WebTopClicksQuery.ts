/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { Sampling } from './Sampling';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
import type { WebTopClicksQueryResponse } from './WebTopClicksQueryResponse';
export type WebTopClicksQuery = {
    dateRange?: (DateRange | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: (WebTopClicksQueryResponse | null);
    sampling?: (Sampling | null);
    useSessionsTable?: (boolean | null);
};

