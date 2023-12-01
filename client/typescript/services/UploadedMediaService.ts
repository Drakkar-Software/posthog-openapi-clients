/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UploadedMediaService {

    /**
     *
     * When object storage is available this API allows upload of media which can be used, for example, in text cards on dashboards.
     *
     * Uploaded media must have a content type beginning with 'image/' and be less than 4MB.
     *
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public static uploadedMediaCreate(
        projectId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/uploaded_media/',
            path: {
                'project_id': projectId,
            },
        });
    }

}
