/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSurveyList } from '../models/PaginatedSurveyList';
import type { PatchedSurveySerializerCreateUpdateOnly } from '../models/PatchedSurveySerializerCreateUpdateOnly';
import type { Survey } from '../models/Survey';
import type { SurveySerializerCreateUpdateOnly } from '../models/SurveySerializerCreateUpdateOnly';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SurveysService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedSurveyList
     * @throws ApiError
     */
    public surveysList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedSurveyList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SurveySerializerCreateUpdateOnly
     * @throws ApiError
     */
    public surveysCreate(
        projectId: string,
        requestBody: SurveySerializerCreateUpdateOnly,
    ): CancelablePromise<SurveySerializerCreateUpdateOnly> {
        return this.httpRequest.request({
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
    public surveysRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Survey> {
        return this.httpRequest.request({
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
    public surveysUpdate(
        id: string,
        projectId: string,
        requestBody: Survey,
    ): CancelablePromise<Survey> {
        return this.httpRequest.request({
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
    public surveysPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedSurveySerializerCreateUpdateOnly,
    ): CancelablePromise<SurveySerializerCreateUpdateOnly> {
        return this.httpRequest.request({
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
    public surveysDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
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
     * @returns any No response body
     * @throws ApiError
     */
    public surveysActivityRetrieve2(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Duplicate a survey to multiple projects in a single transaction.
     *
     * Accepts a list of target team IDs and creates a copy of the survey in each project.
     * Uses an all-or-nothing approach - if any duplication fails, all changes are rolled back.
     * @param id A UUID string identifying this survey.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public surveysDuplicateToProjectsCreate(
        id: string,
        projectId: string,
        requestBody: SurveySerializerCreateUpdateOnly,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/surveys/{id}/duplicate_to_projects/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get survey response statistics for a specific survey.
     *
     * Args:
     * date_from: Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
     * date_to: Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)
     *
     * Returns:
     * Survey statistics including event counts, unique respondents, and conversion rates
     * @param id A UUID string identifying this survey.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public surveysStatsRetrieve2(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/{id}/stats/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public surveysSummarizeResponsesCreate(
        id: string,
        projectId: string,
        requestBody: SurveySerializerCreateUpdateOnly,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/surveys/{id}/summarize_responses/',
            path: {
                'id': id,
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
    public surveysActivityRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/activity/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public surveysResponsesCountRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/responses_count/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Get aggregated response statistics across all surveys.
     *
     * Args:
     * date_from: Optional ISO timestamp for start date (e.g. 2024-01-01T00:00:00Z)
     * date_to: Optional ISO timestamp for end date (e.g. 2024-01-31T23:59:59Z)
     *
     * Returns:
     * Aggregated statistics across all surveys including total counts and rates
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public surveysStatsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/surveys/stats/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
