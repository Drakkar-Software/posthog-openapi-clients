/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Funnel } from '../models/Funnel';
import type { FunnelStepsResults } from '../models/FunnelStepsResults';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FunnelService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns FunnelStepsResults Note, if funnel_viz_type is set the response will be different.
     * @throws ApiError
     */
    public static funnels(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Funnel,
    ): CancelablePromise<FunnelStepsResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/funnel/',
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

}
