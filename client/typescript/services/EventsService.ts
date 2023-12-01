/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClickhouseEvent } from '../models/ClickhouseEvent';
import type { PaginatedClickhouseEventList } from '../models/PaginatedClickhouseEventList';
import type { Property } from '../models/Property';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EventsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param after Only return events with a timestamp after this time.
     * @param before Only return events with a timestamp before this time.
     * @param distinctId Filter list by distinct id.
     * @param event Filter list by event. For example `user sign up` or `$pageview`.
     * @param format
     * @param limit The maximum number of results to return
     * @param offset The initial index from which to return the results.
     * @param personId Filter list by person id.
     * @param properties Filter events by event property, person property, cohort, groups and more.
     * @param select (Experimental) JSON-serialized array of HogQL expressions to return
     * @param where (Experimental) JSON-serialized array of HogQL expressions that must pass
     * @returns PaginatedClickhouseEventList
     * @throws ApiError
     */
    public static eventsList(
        projectId: string,
        after?: string,
        before?: string,
        distinctId?: number,
        event?: string,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        personId?: number,
        properties?: Array<Property>,
        select?: Array<string>,
        where?: Array<string>,
    ): CancelablePromise<PaginatedClickhouseEventList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/events/',
            path: {
                'project_id': projectId,
            },
            query: {
                'after': after,
                'before': before,
                'distinct_id': distinctId,
                'event': event,
                'format': format,
                'limit': limit,
                'offset': offset,
                'person_id': personId,
                'properties': properties,
                'select': select,
                'where': where,
            },
        });
    }

    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns ClickhouseEvent
     * @throws ApiError
     */
    public static eventsRetrieve(
        id: string,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<ClickhouseEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/events/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns ClickhouseEvent
     * @throws ApiError
     */
    public static eventsValuesRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<ClickhouseEvent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/events/values/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

}
