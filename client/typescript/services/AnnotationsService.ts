/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Annotation } from '../models/Annotation';
import type { PaginatedAnnotationList } from '../models/PaginatedAnnotationList';
import type { PatchedAnnotation } from '../models/PatchedAnnotation';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AnnotationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedAnnotationList
     * @throws ApiError
     */
    public annotationsList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedAnnotationList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/annotations/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
            },
        });
    }
    /**
     * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Annotation
     * @throws ApiError
     */
    public annotationsCreate(
        projectId: string,
        requestBody?: Annotation,
    ): CancelablePromise<Annotation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/annotations/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     * @param id A unique integer value identifying this annotation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Annotation
     * @throws ApiError
     */
    public annotationsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Annotation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/annotations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     * @param id A unique integer value identifying this annotation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Annotation
     * @throws ApiError
     */
    public annotationsUpdate(
        id: number,
        projectId: string,
        requestBody?: Annotation,
    ): CancelablePromise<Annotation> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/annotations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.
     * @param id A unique integer value identifying this annotation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Annotation
     * @throws ApiError
     */
    public annotationsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedAnnotation,
    ): CancelablePromise<Annotation> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/annotations/{id}/',
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
     * @param id A unique integer value identifying this annotation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public annotationsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/annotations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
}
