/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PromptsService {

    /**
     * Create, read, update and delete prompt sequences state for a person.
     * @returns any No response body
     * @throws ApiError
     */
    public static promptsMyPromptsPartialUpdate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/prompts/my_prompts/',
        });
    }

}
