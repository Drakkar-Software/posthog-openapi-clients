/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Organization } from '../models/Organization';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentsRollbackService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Trigger environments rollback migration for users previously on multi-environment projects.
     * The request data should be a mapping of source environment IDs to target environment IDs.
     * Example: { "2": 2, "116911": 2, "99346": 99346, "140256": 99346 }
     * @param id A UUID string identifying this organization.
     * @param requestBody
     * @returns Organization
     * @throws ApiError
     */
    public environmentsRollbackCreate(
        id: string,
        requestBody: Organization,
    ): CancelablePromise<Organization> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{id}/environments_rollback/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
