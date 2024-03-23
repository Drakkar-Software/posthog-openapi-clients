/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventsQueryResponse } from './EventsQueryResponse';
export type EventsQuery = {
    /**
     * Show events matching a given action
     */
    actionId?: (number | null);
    /**
     * Only fetch events that happened after this timestamp
     */
    after?: (string | null);
    /**
     * Only fetch events that happened before this timestamp
     */
    before?: (string | null);
    /**
     * Limit to events matching this string
     */
    event?: (string | null);
    /**
     * Filter test accounts
     */
    filterTestAccounts?: (boolean | null);
    /**
     * Fixed properties in the query, can't be edited in the interface (e.g. scoping down by person)
     */
    fixedProperties?: null;
    kind?: any;
    /**
     * Number of rows to return
     */
    limit?: (number | null);
    /**
     * Number of rows to skip before returning rows
     */
    offset?: (number | null);
    /**
     * Columns to order by
     */
    orderBy?: (Array<string> | null);
    /**
     * Show events for a given person
     */
    personId?: (string | null);
    /**
     * Properties configurable in the interface
     */
    properties?: null;
    /**
     * Cached query response
     */
    response?: (EventsQueryResponse | null);
    /**
     * Return a limited set of data. Required.
     */
    select: Array<string>;
    /**
     * HogQL filters to apply on returned data
     */
    where?: (Array<string> | null);
};

