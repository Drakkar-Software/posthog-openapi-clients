/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActorsQueryResponse } from './ActorsQueryResponse';
import type { Compare } from './Compare';
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { LifecycleQuery } from './LifecycleQuery';
import type { PathsQuery } from './PathsQuery';
import type { RetentionQuery } from './RetentionQuery';
import type { StickinessQuery } from './StickinessQuery';
import type { TrendsQuery } from './TrendsQuery';
export type InsightActorsQuery = {
    breakdown?: (string | Array<string> | number | null);
    compare?: (Compare | null);
    day?: (string | number | null);
    includeRecordings?: (boolean | null);
    /**
     * An interval selected out of available intervals in source query.
     */
    interval?: (number | null);
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    response?: (ActorsQueryResponse | null);
    series?: (number | null);
    source: (TrendsQuery | FunnelsQuery | RetentionQuery | PathsQuery | StickinessQuery | LifecycleQuery);
    status?: (string | null);
};

