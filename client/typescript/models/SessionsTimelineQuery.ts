/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { SessionsTimelineQueryResponse } from './SessionsTimelineQueryResponse';
export type SessionsTimelineQuery = {
    /**
     * Only fetch sessions that started after this timestamp (default: '-24h')
     */
    after?: string | null;
    /**
     * Only fetch sessions that started before this timestamp (default: '+5s')
     */
    before?: string | null;
    kind?: SessionsTimelineQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    /**
     * Fetch sessions only for a given person
     */
    personId?: string | null;
    response?: SessionsTimelineQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace SessionsTimelineQuery {
    export enum kind {
        SESSIONS_TIMELINE_QUERY = 'SessionsTimelineQuery',
    }
}

