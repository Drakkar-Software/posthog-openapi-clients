/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityLog } from '../models/ActivityLog';
import type { PaginatedActivityLogList } from '../models/PaginatedActivityLogList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ActivityLogService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param cursor The pagination cursor value.
     * @returns PaginatedActivityLogList
     * @throws ApiError
     */
    public static activityLogList(
        projectId: string,
        cursor?: string,
    ): CancelablePromise<PaginatedActivityLogList> {
        return __request(OpenAPI, {
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
     * @returns ActivityLog
     * @throws ApiError
     */
    public static activityLogBookmarkActivityNotificationCreate(
        projectId: string,
        requestBody: ActivityLog,
    ): CancelablePromise<ActivityLog> {
        return __request(OpenAPI, {
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
     * @returns ActivityLog
     * @throws ApiError
     */
    public static activityLogImportantChangesRetrieve(
        projectId: string,
    ): CancelablePromise<ActivityLog> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/activity_log/important_changes/',
            path: {
                'project_id': projectId,
            },
        });
    }

}
