/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSubscriptionList } from '../models/PaginatedSubscriptionList';
import type { PatchedSubscription } from '../models/PatchedSubscription';
import type { Subscription } from '../models/Subscription';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SubscriptionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSubscriptionList
     * @throws ApiError
     */
    public subscriptionsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedSubscriptionList> {
        return this.httpRequest.request({
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
    public subscriptionsCreate(
        projectId: string,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
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
    public subscriptionsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
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
    public subscriptionsUpdate(
        id: number,
        projectId: string,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
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
    public subscriptionsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedSubscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
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
    public subscriptionsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
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
