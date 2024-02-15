/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Team } from '../models/Team';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActivityService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this team.
     * @returns Team
     * @throws ApiError
     */
    public activityRetrieve(
        id: number,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{id}/activity/',
            path: {
                'id': id,
            },
        });
    }
}
