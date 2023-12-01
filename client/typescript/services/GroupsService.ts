/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Group } from '../models/Group';
import type { PaginatedGroupList } from '../models/PaginatedGroupList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupsService {

    /**
     * List all groups of a specific group type. You must pass ?group_type_index= in the URL. To get a list of valid group types, call /api/:project_id/groups_types/
     * @param groupTypeIndex Specify the group type to list
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param search Search the group name
     * @param cursor The pagination cursor value.
     * @returns PaginatedGroupList
     * @throws ApiError
     */
    public static groupsList(
        groupTypeIndex: number,
        projectId: string,
        search: string,
        cursor?: string,
    ): CancelablePromise<PaginatedGroupList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/groups/',
            path: {
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
                'group_type_index': groupTypeIndex,
                'search': search,
            },
        });
    }

    /**
     * @param groupKey Specify the key of the group to find
     * @param groupTypeIndex Specify the group type to find
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Group
     * @throws ApiError
     */
    public static groupsFindRetrieve(
        groupKey: string,
        groupTypeIndex: number,
        projectId: string,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/groups/find/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_key': groupKey,
                'group_type_index': groupTypeIndex,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Group
     * @throws ApiError
     */
    public static groupsPropertyDefinitionsRetrieve(
        projectId: string,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/groups/property_definitions/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * @param groupTypeIndex Specify the group type to find property values of
     * @param key Specify the property key to find values for
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Group
     * @throws ApiError
     */
    public static groupsPropertyValuesRetrieve(
        groupTypeIndex: number,
        key: string,
        projectId: string,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/groups/property_values/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_type_index': groupTypeIndex,
                'key': key,
            },
        });
    }

    /**
     * @param groupTypeIndex Specify the group type to find
     * @param id Specify the id of the user to find groups for
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Group
     * @throws ApiError
     */
    public static groupsRelatedRetrieve(
        groupTypeIndex: number,
        id: string,
        projectId: string,
    ): CancelablePromise<Group> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/groups/related/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_type_index': groupTypeIndex,
                'id': id,
            },
        });
    }

}
