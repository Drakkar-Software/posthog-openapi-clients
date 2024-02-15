/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { EventPropertyFilter } from './EventPropertyFilter';
import type { PersonPropertyFilter } from './PersonPropertyFilter';
import type { Sampling } from './Sampling';
import type { WebOverviewQueryResponse } from './WebOverviewQueryResponse';
export type WebOverviewQuery = {
    compare?: (boolean | null);
    dateRange?: (DateRange | null);
    kind?: any;
    properties: Array<(EventPropertyFilter | PersonPropertyFilter)>;
    response?: (WebOverviewQueryResponse | null);
    sampling?: (Sampling | null);
};

