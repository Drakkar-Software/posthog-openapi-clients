/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { TimeToSeeDataSessionsQueryResponse } from './TimeToSeeDataSessionsQueryResponse';
export type TimeToSeeDataSessionsQuery = {
    /**
     * Date range for the query
     */
    dateRange?: (DateRange | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    response?: (TimeToSeeDataSessionsQueryResponse | null);
    /**
     * Project to filter on. Defaults to current project
     */
    teamId?: (number | null);
};

