/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPersonList } from '../models/PaginatedPersonList';
import type { PatchedPerson } from '../models/PatchedPerson';
import type { Person } from '../models/Person';
import type { Property } from '../models/Property';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PersonsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param distinctId Filter list by distinct id.
     * @param email Filter persons by email (exact match)
     * @param format
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param properties Filter Persons by person properties.
     * @param search Search persons, either by email (full text search) or distinct_id (exact match).
     * @returns PaginatedPersonList
     * @throws ApiError
     */
    public personsList(
        projectId: string,
        distinctId?: string,
        email?: string,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        properties?: Array<Property>,
        search?: string,
    ): CancelablePromise<PaginatedPersonList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/',
            path: {
                'project_id': projectId,
            },
            query: {
                'distinct_id': distinctId,
                'email': email,
                'format': format,
                'limit': limit,
                'offset': offset,
                'properties': properties,
                'search': search,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public personsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/{id}/',
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
     * Only for setting properties on the person. "properties" from the request data will be updated via a "$set" event.
     * This means that only the properties listed will be updated, but other properties won't be removed nor updated.
     * If you would like to remove a property use the `delete_property` endpoint.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public personsUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/persons/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public personsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: PatchedPerson,
    ): CancelablePromise<Person> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/persons/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Use this endpoint to delete individual persons. For bulk deletion, use the bulk_delete endpoint instead.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param deleteEvents If true, a task to delete all events associated with this person will be created and queued. The task does not run immediately and instead is batched together and at 5AM UTC every Sunday
     * @param format
     * @returns void
     * @throws ApiError
     */
    public personsDestroy(
        id: number,
        projectId: string,
        deleteEvents: boolean = false,
        format?: 'csv' | 'json',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/persons/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'delete_events': deleteEvents,
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsActivityRetrieve2(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/{id}/activity/',
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
     * Queue deletion of all events associated with this person. The task runs during non-peak hours.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsDeleteEventsCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/{id}/delete_events/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param unset Specify the property key to delete
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsDeletePropertyCreate(
        unset: string,
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/{id}/delete_property/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                '$unset': unset,
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Queue deletion of all recordings associated with this person.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsDeleteRecordingsCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/{id}/delete_recordings/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsPropertiesTimelineRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/{id}/properties_timeline/',
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
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsSplitCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/{id}/split/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param key Specify the property key
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param value Specify the property value
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsUpdatePropertyCreate(
        id: number,
        key: string,
        projectId: string,
        value: any,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/{id}/update_property/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
                'key': key,
                'value': value,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsActivityRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/activity/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint allows you to bulk delete persons, either by the PostHog person IDs or by distinct IDs. You can pass in a maximum of 1000 IDs per call.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param deleteEvents If true, a task to delete all events associated with this person will be created and queued. The task does not run immediately and instead is batched together and at 5AM UTC every Sunday
     * @param distinctIds A list of distinct IDs, up to 1000 of them. We'll delete all persons associated with those distinct IDs.
     * @param format
     * @param ids A list of PostHog person IDs, up to 1000 of them. We'll delete all the persons listed.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsBulkDeleteCreate(
        projectId: string,
        deleteEvents: boolean = false,
        distinctIds?: Record<string, any>,
        format?: 'csv' | 'json',
        ids?: Record<string, any>,
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/bulk_delete/',
            path: {
                'project_id': projectId,
            },
            query: {
                'delete_events': deleteEvents,
                'distinct_ids': distinctIds,
                'format': format,
                'ids': ids,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsCohortsRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/cohorts/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsFunnelRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsFunnelCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsFunnelCorrelationRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsFunnelCorrelationCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsLifecycleRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/lifecycle/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * Reset a distinct_id for a deleted person. This allows the distinct_id to be used again.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public personsResetPersonDistinctIdCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/persons/reset_person_distinct_id/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsStickinessRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/stickiness/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsTrendsRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/trends/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public personsValuesRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/persons/values/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
}
