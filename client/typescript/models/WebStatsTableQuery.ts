/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { Sampling } from './Sampling';
import type { WebStatsBreakdown } from './WebStatsBreakdown';
import type { WebStatsTableQueryResponse } from './WebStatsTableQueryResponse';
export type WebStatsTableQuery = {
    breakdownBy: WebStatsBreakdown;
    dateRange?: (DateRange | null);
    doPathCleaning?: (boolean | null);
    includeBounceRate?: (boolean | null);
    includeScrollDepth?: (boolean | null);
    kind?: any;
    limit?: (number | null);
    properties: Array<(EventPropertyFilter | PersonPropertyFilter)>;
    response?: (WebStatsTableQueryResponse | null);
    sampling?: (Sampling | null);
    useSessionsTable?: (boolean | null);
};

