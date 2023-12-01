/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupType } from '../models/GroupType';
import type { PatchedGroupType } from '../models/PatchedGroupType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupsTypesService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns GroupType
     * @throws ApiError
     */
    public static groupsTypesList(
        projectId: string,
    ): CancelablePromise<Array<GroupType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/groups_types/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns GroupType
     * @throws ApiError
     */
    public static groupsTypesUpdateMetadataPartialUpdate(
        projectId: string,
        requestBody?: PatchedGroupType,
    ): CancelablePromise<GroupType> {
        return __request(OpenAPI, {
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
