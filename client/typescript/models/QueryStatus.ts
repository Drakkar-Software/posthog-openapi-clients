/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClickhouseQueryProgress } from './ClickhouseQueryProgress';
export type QueryStatus = {
    /**
     * Whether the query is still running. Will be true if the query is complete, even if it errored. Either result or error will be set.
     */
    complete?: (boolean | null);
    dashboard_id?: (number | null);
    /**
     * When did the query execution task finish (whether successfully or not).
     */
    end_time?: (string | null);
    /**
     * If the query failed, this will be set to true. More information can be found in the error_message field.
     */
    error?: (boolean | null);
    error_message?: (string | null);
    expiration_time?: (string | null);
    id: string;
    insight_id?: (number | null);
    labels?: (Array<string> | null);
    /**
     * When was the query execution task picked up by a worker.
     */
    pickup_time?: (string | null);
    /**
     * ONLY async queries use QueryStatus.
     */
    query_async?: any;
    query_progress?: (ClickhouseQueryProgress | null);
    results?: null;
    /**
     * When was query execution task enqueued.
     */
    start_time?: (string | null);
    task_id?: (string | null);
    team_id: number;
};

