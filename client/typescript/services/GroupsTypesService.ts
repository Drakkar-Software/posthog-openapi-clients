/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupType } from '../models/GroupType';
import type { GroupUsageMetric } from '../models/GroupUsageMetric';
import type { PaginatedGroupUsageMetricList } from '../models/PaginatedGroupUsageMetricList';
import type { PatchedGroupType } from '../models/PatchedGroupType';
import type { PatchedGroupUsageMetric } from '../models/PatchedGroupUsageMetric';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GroupsTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns GroupType
     * @throws ApiError
     */
    public groupsTypesList(
        projectId: string,
    ): CancelablePromise<Array<GroupType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/groups_types/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param groupTypeIndex
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public groupsTypesDestroy(
        groupTypeIndex: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/groups_types/{group_type_index}/',
            path: {
                'group_type_index': groupTypeIndex,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param groupTypeIndex
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedGroupUsageMetricList
     * @throws ApiError
     */
    public groupsTypesMetricsList(
        groupTypeIndex: number,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedGroupUsageMetricList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/groups_types/{group_type_index}/metrics/',
            path: {
                'group_type_index': groupTypeIndex,
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param groupTypeIndex
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns GroupUsageMetric
     * @throws ApiError
     */
    public groupsTypesMetricsCreate(
        groupTypeIndex: number,
        projectId: string,
        requestBody: GroupUsageMetric,
    ): CancelablePromise<GroupUsageMetric> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/groups_types/{group_type_index}/metrics/',
            path: {
                'group_type_index': groupTypeIndex,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param groupTypeIndex
     * @param id A UUID string identifying this group usage metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns GroupUsageMetric
     * @throws ApiError
     */
    public groupsTypesMetricsRetrieve(
        groupTypeIndex: number,
        id: string,
        projectId: string,
    ): CancelablePromise<GroupUsageMetric> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/',
            path: {
                'group_type_index': groupTypeIndex,
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param groupTypeIndex
     * @param id A UUID string identifying this group usage metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns GroupUsageMetric
     * @throws ApiError
     */
    public groupsTypesMetricsUpdate(
        groupTypeIndex: number,
        id: string,
        projectId: string,
        requestBody: GroupUsageMetric,
    ): CancelablePromise<GroupUsageMetric> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/',
            path: {
                'group_type_index': groupTypeIndex,
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param groupTypeIndex
     * @param id A UUID string identifying this group usage metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns GroupUsageMetric
     * @throws ApiError
     */
    public groupsTypesMetricsPartialUpdate(
        groupTypeIndex: number,
        id: string,
        projectId: string,
        requestBody?: PatchedGroupUsageMetric,
    ): CancelablePromise<GroupUsageMetric> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/',
            path: {
                'group_type_index': groupTypeIndex,
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param groupTypeIndex
     * @param id A UUID string identifying this group usage metric.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public groupsTypesMetricsDestroy(
        groupTypeIndex: number,
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/',
            path: {
                'group_type_index': groupTypeIndex,
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public groupsTypesCreateDetailDashboardUpdate(
        projectId: string,
        requestBody?: GroupType,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/groups_types/create_detail_dashboard/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public groupsTypesSetDefaultColumnsUpdate(
        projectId: string,
        requestBody?: GroupType,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/groups_types/set_default_columns/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public groupsTypesUpdateMetadataPartialUpdate(
        projectId: string,
        requestBody?: PatchedGroupType,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/groups_types/update_metadata/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
