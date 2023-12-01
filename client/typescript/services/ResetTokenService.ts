/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatchedTeam } from '../models/PatchedTeam';
import type { Team } from '../models/Team';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ResetTokenService {

    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this team.
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public static resetTokenPartialUpdate(
        id: number,
        requestBody?: PatchedTeam,
    ): CancelablePromise<Team> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{id}/reset_token/',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
