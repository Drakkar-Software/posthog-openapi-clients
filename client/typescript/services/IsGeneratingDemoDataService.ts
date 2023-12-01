/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Team } from '../models/Team';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IsGeneratingDemoDataService {

    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this team.
     * @returns Team
     * @throws ApiError
     */
    public static isGeneratingDemoDataRetrieve(
        id: number,
    ): CancelablePromise<Team> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{id}/is_generating_demo_data/',
            path: {
                'id': id,
            },
        });
    }

}
