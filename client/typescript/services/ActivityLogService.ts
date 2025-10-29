/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedActivityLogList } from '../models/PaginatedActivityLogList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActivityLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns PaginatedActivityLogList
     * @throws ApiError
     */
    public activityLogList(
        projectId: string,
    ): CancelablePromise<PaginatedActivityLogList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/activity_log/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
