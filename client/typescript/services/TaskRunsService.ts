/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTaskRunDetailList } from '../models/PaginatedTaskRunDetailList';
import type { PatchedTaskRunDetail } from '../models/PatchedTaskRunDetail';
import type { TaskRunAppendLogRequest } from '../models/TaskRunAppendLogRequest';
import type { TaskRunDetail } from '../models/TaskRunDetail';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TaskRunsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * API for managing task runs. Each run represents an execution of a task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param taskId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedTaskRunDetailList
     * @throws ApiError
     */
    public tasksRunsList(
        projectId: string,
        taskId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedTaskRunDetailList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/tasks/{task_id}/runs/',
            path: {
                'project_id': projectId,
                'task_id': taskId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * API for managing task runs. Each run represents an execution of a task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param taskId
     * @param requestBody
     * @returns TaskRunDetail
     * @throws ApiError
     */
    public tasksRunsCreate(
        projectId: string,
        taskId: string,
        requestBody?: TaskRunDetail,
    ): CancelablePromise<TaskRunDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/tasks/{task_id}/runs/',
            path: {
                'project_id': projectId,
                'task_id': taskId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API for managing task runs. Each run represents an execution of a task.
     * @param id A UUID string identifying this task run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param taskId
     * @returns TaskRunDetail
     * @throws ApiError
     */
    public tasksRunsRetrieve(
        id: string,
        projectId: string,
        taskId: string,
    ): CancelablePromise<TaskRunDetail> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/tasks/{task_id}/runs/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
                'task_id': taskId,
            },
        });
    }
    /**
     * API for managing task runs. Each run represents an execution of a task.
     * @param id A UUID string identifying this task run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param taskId
     * @param requestBody
     * @returns TaskRunDetail
     * @throws ApiError
     */
    public tasksRunsPartialUpdate(
        id: string,
        projectId: string,
        taskId: string,
        requestBody?: PatchedTaskRunDetail,
    ): CancelablePromise<TaskRunDetail> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/tasks/{task_id}/runs/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
                'task_id': taskId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Append log entries
     * Append one or more log entries to the task run log array
     * @param id A UUID string identifying this task run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param taskId
     * @param requestBody
     * @returns TaskRunDetail Run with updated log
     * @throws ApiError
     */
    public tasksRunsAppendLogCreate(
        id: string,
        projectId: string,
        taskId: string,
        requestBody: TaskRunAppendLogRequest,
    ): CancelablePromise<TaskRunDetail> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/tasks/{task_id}/runs/{id}/append_log/',
            path: {
                'id': id,
                'project_id': projectId,
                'task_id': taskId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid log entries`,
                404: `Run not found`,
            },
        });
    }
    /**
     * Set run output
     * Update the output field for a task run (e.g., PR URL, commit SHA, etc.)
     * @param id A UUID string identifying this task run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param taskId
     * @returns TaskRunDetail Run with updated output
     * @throws ApiError
     */
    public tasksRunsSetOutputPartialUpdate(
        id: string,
        projectId: string,
        taskId: string,
    ): CancelablePromise<TaskRunDetail> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/tasks/{task_id}/runs/{id}/set_output/',
            path: {
                'id': id,
                'project_id': projectId,
                'task_id': taskId,
            },
            errors: {
                404: `Run not found`,
            },
        });
    }
}
