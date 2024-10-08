/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityLog } from '../models/ActivityLog';
import type { PaginatedActivityLogList } from '../models/PaginatedActivityLogList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActivityLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param cursor The pagination cursor value.
     * @returns PaginatedActivityLogList
     * @throws ApiError
     */
    public activityLogList(
        projectId: string,
        cursor?: string,
    ): CancelablePromise<PaginatedActivityLogList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/activity_log/',
            path: {
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public activityLogBookmarkActivityNotificationCreate(
        projectId: string,
        requestBody: ActivityLog,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/activity_log/bookmark_activity_notification/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public activityLogImportantChangesRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/activity_log/important_changes/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
