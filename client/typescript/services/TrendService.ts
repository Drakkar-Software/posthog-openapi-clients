/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Trend } from '../models/Trend';
import type { TrendResults } from '../models/TrendResults';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TrendService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns TrendResults
     * @throws ApiError
     */
    public static trends(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Trend,
    ): CancelablePromise<TrendResults> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/insights/trend/',
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
