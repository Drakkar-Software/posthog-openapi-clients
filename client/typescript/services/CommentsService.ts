/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment';
import type { PaginatedCommentList } from '../models/PaginatedCommentList';
import type { PatchedComment } from '../models/PatchedComment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param cursor The pagination cursor value.
     * @returns PaginatedCommentList
     * @throws ApiError
     */
    public commentsList(
        projectId: string,
        cursor?: string,
    ): CancelablePromise<PaginatedCommentList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/comments/',
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
     * @returns Comment
     * @throws ApiError
     */
    public commentsCreate(
        projectId: string,
        requestBody: Comment,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/comments/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this comment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Comment
     * @throws ApiError
     */
    public commentsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/comments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this comment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Comment
     * @throws ApiError
     */
    public commentsUpdate(
        id: string,
        projectId: string,
        requestBody: Comment,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/comments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this comment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Comment
     * @throws ApiError
     */
    public commentsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedComment,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/comments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A UUID string identifying this comment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public commentsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/comments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param id A UUID string identifying this comment.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Comment
     * @throws ApiError
     */
    public commentsThreadRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/comments/{id}/thread/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Comment
     * @throws ApiError
     */
    public commentsCountRetrieve(
        projectId: string,
    ): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/comments/count/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
