/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedProjectBackwardCompatBasicList } from '../models/PaginatedProjectBackwardCompatBasicList';
import type { PatchedProjectBackwardCompat } from '../models/PatchedProjectBackwardCompat';
import type { ProjectBackwardCompat } from '../models/ProjectBackwardCompat';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Projects for the current organization.
     * @param organizationId
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedProjectBackwardCompatBasicList
     * @throws ApiError
     */
    public list2(
        organizationId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedProjectBackwardCompatBasicList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/',
            path: {
                'organization_id': organizationId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public create2(
        organizationId: string,
        requestBody?: ProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/projects/',
            path: {
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public retrieve2(
        id: number,
        organizationId: string,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public update2(
        id: number,
        organizationId: string,
        requestBody?: ProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public partialUpdate2(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns void
     * @throws ApiError
     */
    public destroy2(
        id: number,
        organizationId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/organizations/{organization_id}/projects/{id}/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public activityRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/{id}/activity/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public addProductIntentPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/add_product_intent/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public changeOrganizationCreate(
        id: number,
        organizationId: string,
        requestBody?: ProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/organizations/{organization_id}/projects/{id}/change_organization/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public completeProductOnboardingPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/complete_product_onboarding/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public deleteSecretTokenBackupPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/delete_secret_token_backup/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public isGeneratingDemoDataRetrieve(
        id: number,
        organizationId: string,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/organizations/{organization_id}/projects/{id}/is_generating_demo_data/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public resetTokenPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/reset_token/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique value identifying this project.
     * @param organizationId
     * @param requestBody
     * @returns ProjectBackwardCompat
     * @throws ApiError
     */
    public rotateSecretTokenPartialUpdate(
        id: number,
        organizationId: string,
        requestBody?: PatchedProjectBackwardCompat,
    ): CancelablePromise<ProjectBackwardCompat> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/organizations/{organization_id}/projects/{id}/rotate_secret_token/',
            path: {
                'id': id,
                'organization_id': organizationId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
