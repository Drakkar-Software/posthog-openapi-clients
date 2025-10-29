/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { LogSeverityLevel } from './LogSeverityLevel';
import type { LogsQueryResponse } from './LogsQueryResponse';
import type { OrderBy3 } from './OrderBy3';
import type { PropertyGroupFilter } from './PropertyGroupFilter';
import type { QueryLogTags } from './QueryLogTags';
export type LogsQuery = {
    dateRange: DateRange;
    filterGroup: PropertyGroupFilter;
    kind?: LogsQuery.kind;
    limit?: number | null;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    orderBy?: OrderBy3 | null;
    response?: LogsQueryResponse | null;
    searchTerm?: string | null;
    serviceNames: Array<string>;
    severityLevels: Array<LogSeverityLevel>;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace LogsQuery {
    export enum kind {
        LOGS_QUERY = 'LogsQuery',
    }
}

