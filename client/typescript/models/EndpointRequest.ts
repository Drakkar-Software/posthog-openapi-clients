/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FunnelsQuery } from './FunnelsQuery';
import type { HogQLQuery } from './HogQLQuery';
import type { LifecycleQuery } from './LifecycleQuery';
import type { PathsQuery } from './PathsQuery';
import type { RetentionQuery } from './RetentionQuery';
import type { StickinessQuery } from './StickinessQuery';
import type { TrendsQuery } from './TrendsQuery';
export type EndpointRequest = {
    cache_age_seconds?: number | null;
    description?: string | null;
    is_active?: boolean | null;
    name?: string | null;
    query?: (HogQLQuery | TrendsQuery | FunnelsQuery | RetentionQuery | PathsQuery | StickinessQuery | LifecycleQuery) | null;
};

