/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupType } from '../models/GroupType';
import type { PatchedGroupType } from '../models/PatchedGroupType';
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns GroupType
     * @throws ApiError
     */
    public groupsTypesUpdateMetadataPartialUpdate(
        projectId: string,
        requestBody?: PatchedGroupType,
    ): CancelablePromise<GroupType> {
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
