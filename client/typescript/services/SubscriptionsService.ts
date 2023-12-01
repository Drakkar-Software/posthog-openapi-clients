/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSubscriptionList } from '../models/PaginatedSubscriptionList';
import type { PatchedSubscription } from '../models/PatchedSubscription';
import type { Subscription } from '../models/Subscription';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SubscriptionsService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSubscriptionList
     * @throws ApiError
     */
    public static subscriptionsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedSubscriptionList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/subscriptions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Subscription
     * @throws ApiError
     */
    public static subscriptionsCreate(
        projectId: string,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/subscriptions/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Subscription
     * @throws ApiError
     */
    public static subscriptionsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/subscriptions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Subscription
     * @throws ApiError
     */
    public static subscriptionsUpdate(
        id: number,
        projectId: string,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/subscriptions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Subscription
     * @throws ApiError
     */
    public static subscriptionsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedSubscription,
    ): CancelablePromise<Subscription> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/subscriptions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static subscriptionsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/subscriptions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }

}
