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
import type { WebGoalsQueryResponse } from './WebGoalsQueryResponse';
export type WebGoalsQuery = {
    dateRange?: (DateRange | null);
    filterTestAccounts?: (boolean | null);
    kind?: any;
    limit?: (number | null);
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: (WebGoalsQueryResponse | null);
    sampling?: (Sampling | null);
    useSessionsTable?: (boolean | null);
};

