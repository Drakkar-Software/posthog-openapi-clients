/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPersonList } from '../models/PaginatedPersonList';
import type { PatchedPerson } from '../models/PatchedPerson';
import type { Person } from '../models/Person';
import type { Property } from '../models/Property';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PersonsService {

    /**
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
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
    public static personsList(
        projectId: string,
        distinctId?: string,
        email?: string,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        properties?: Array<Property>,
        search?: string,
    ): CancelablePromise<PaginatedPersonList> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
    public static personsUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public static personsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: PatchedPerson,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param deleteEvents If true, a task to delete all events associated with this person will be created and queued. The task does not run immediately and instead is batched together and at 5AM UTC every Sunday (controlled by environment variable CLEAR_CLICKHOUSE_REMOVED_DATA_SCHEDULE_CRON)
     * @param format
     * @returns void
     * @throws ApiError
     */
    public static personsDestroy(
        id: number,
        projectId: string,
        deleteEvents: boolean = false,
        format?: 'csv' | 'json',
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsActivityRetrieve2(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param unset Specify the property key to delete
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public static personsDeletePropertyCreate(
        unset: string,
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsPropertiesTimelineRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public static personsSplitCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param id A unique integer value identifying this person.
     * @param key Specify the property key
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param value Specify the property value
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public static personsUpdatePropertyCreate(
        id: number,
        key: string,
        projectId: string,
        value: any,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsActivityRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsCohortsRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsFunnelRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public static personsFunnelCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsFunnelCorrelationRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public static personsFunnelCorrelationCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsLifecycleRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsPathRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/persons/path/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public static personsPathCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/persons/path/',
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsRetentionRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/persons/retention/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }

    /**
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsStickinessRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsTrendsRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
     * To create or update persons, use a PostHog library of your choice and [use an identify call](/docs/integrate/identifying-users). This API endpoint is only for reading and deleting.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public static personsValuesRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return __request(OpenAPI, {
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
