/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { Sampling } from './Sampling';
import type { SessionPropertyFilter } from './SessionPropertyFilter';
import type { WebOverviewQueryResponse } from './WebOverviewQueryResponse';
export type WebOverviewQuery = {
    compare?: (boolean | null);
    dateRange?: (DateRange | null);
    filterTestAccounts?: (boolean | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    properties: Array<(EventPropertyFilter | PersonPropertyFilter | SessionPropertyFilter)>;
    response?: (WebOverviewQueryResponse | null);
    sampling?: (Sampling | null);
    useSessionsTable?: (boolean | null);
};

