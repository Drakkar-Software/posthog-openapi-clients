/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FlagValueService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get possible values for a feature flag.
     *
     * Query parameters:
     * - key: The flag ID (required)
     * Returns:
     *
     * - Array of objects with 'name' field containing possible values
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public flagValueValuesRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/flag_value/values/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
