/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTaggedItemList } from '../models/PaginatedTaggedItemList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedTaggedItemList
     * @throws ApiError
     */
    public tagsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedTaggedItemList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/tags/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
