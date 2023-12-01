/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSurveyList } from '../models/PaginatedSurveyList';
import type { PatchedSurveySerializerCreateUpdateOnly } from '../models/PatchedSurveySerializerCreateUpdateOnly';
import type { Survey } from '../models/Survey';
import type { SurveySerializerCreateUpdateOnly } from '../models/SurveySerializerCreateUpdateOnly';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SurveysService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSurveyList
     * @throws ApiError
     */
    public static surveysList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedSurveyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SurveySerializerCreateUpdateOnly
     * @throws ApiError
     */
    public static surveysCreate(
        projectId: string,
        requestBody: SurveySerializerCreateUpdateOnly,
    ): CancelablePromise<SurveySerializerCreateUpdateOnly> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/surveys/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this survey.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Survey
     * @throws ApiError
     */
    public static surveysRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Survey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A UUID string identifying this survey.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Survey
     * @throws ApiError
     */
    public static surveysUpdate(
        id: string,
        projectId: string,
        requestBody: Survey,
    ): CancelablePromise<Survey> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/surveys/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this survey.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SurveySerializerCreateUpdateOnly
     * @throws ApiError
     */
    public static surveysPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedSurveySerializerCreateUpdateOnly,
    ): CancelablePromise<SurveySerializerCreateUpdateOnly> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/surveys/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A UUID string identifying this survey.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static surveysDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/surveys/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Survey
     * @throws ApiError
     */
    public static surveysResponsesCountRetrieve(
        projectId: string,
    ): CancelablePromise<Survey> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/responses_count/',
            path: {
                'project_id': projectId,
            },
        });
    }

}
