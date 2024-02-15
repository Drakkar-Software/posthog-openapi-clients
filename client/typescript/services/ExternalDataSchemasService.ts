/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalDataSchema } from '../models/ExternalDataSchema';
import type { PaginatedExternalDataSchemaList } from '../models/PaginatedExternalDataSchemaList';
import type { PatchedExternalDataSchema } from '../models/PatchedExternalDataSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ExternalDataSchemasService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedExternalDataSchemaList
     * @throws ApiError
     */
    public externalDataSchemasList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedExternalDataSchemaList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/external_data_schemas/',
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
     * @returns ExternalDataSchema
     * @throws ApiError
     */
    public externalDataSchemasCreate(
        projectId: string,
        requestBody: ExternalDataSchema,
    ): CancelablePromise<ExternalDataSchema> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/external_data_schemas/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this external data schema.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExternalDataSchema
     * @throws ApiError
     */
    public externalDataSchemasRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ExternalDataSchema> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/external_data_schemas/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this external data schema.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExternalDataSchema
     * @throws ApiError
     */
    public externalDataSchemasUpdate(
        id: string,
        projectId: string,
        requestBody: ExternalDataSchema,
    ): CancelablePromise<ExternalDataSchema> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/external_data_schemas/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this external data schema.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExternalDataSchema
     * @throws ApiError
     */
    public externalDataSchemasPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedExternalDataSchema,
    ): CancelablePromise<ExternalDataSchema> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/external_data_schemas/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this external data schema.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public externalDataSchemasDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/external_data_schemas/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
}
