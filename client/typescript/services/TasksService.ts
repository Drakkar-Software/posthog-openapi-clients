/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTaskList } from '../models/PaginatedTaskList';
import type { PaginatedTaskRunDetailList } from '../models/PaginatedTaskRunDetailList';
import type { PatchedTask } from '../models/PatchedTask';
import type { PatchedTaskRunDetail } from '../models/PatchedTaskRunDetail';
import type { PatchedTaskUpdatePositionRequest } from '../models/PatchedTaskUpdatePositionRequest';
import type { Task } from '../models/Task';
import type { TaskRunAppendLogRequest } from '../models/TaskRunAppendLogRequest';
import type { TaskRunDetail } from '../models/TaskRunDetail';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TasksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedTaskList
     * @throws ApiError
     */
    public tasksList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedTaskList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/tasks/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Task
     * @throws ApiError
     */
    public tasksCreate(
        projectId: string,
        requestBody: Task,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/tasks/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
     * @param id A UUID string identifying this task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Task
     * @throws ApiError
     */
    public tasksRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/tasks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
     * @param id A UUID string identifying this task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Task
     * @throws ApiError
     */
    public tasksUpdate(
        id: string,
        projectId: string,
        requestBody: Task,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/tasks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
     * @param id A UUID string identifying this task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Task
     * @throws ApiError
     */
    public tasksPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedTask,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/tasks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * API for managing tasks within a project. Tasks represent units of work to be performed by an agent.
     * @param id A UUID string identifying this task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public tasksDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/tasks/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Run task
     * Kick off the workflow for the task in its current stage.
     * @param id A UUID string identifying this task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Task Workflow started for task
     * @throws ApiError
     */
    public tasksRunCreate(
        id: string,
        projectId: string,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/tasks/{id}/run/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                404: `Task not found`,
            },
        });
    }
    /**
     * Update task position
     * Update the position of a task within its current stage
     * @param id A UUID string identifying this task.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Task Task with updated position
     * @throws ApiError
     */
    public tasksUpdatePositionPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedTaskUpdatePositionRequest,
    ): CancelablePromise<Task> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/tasks/{id}/update_position/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid position`,
                404: `Task not found`,
            },
        });
    }
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
