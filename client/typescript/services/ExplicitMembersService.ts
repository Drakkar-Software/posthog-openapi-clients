/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExplicitTeamMember } from '../models/ExplicitTeamMember';
import type { PatchedExplicitTeamMember } from '../models/PatchedExplicitTeamMember';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExplicitMembersService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExplicitTeamMember
     * @throws ApiError
     */
    public static explicitMembersList(
        projectId: string,
    ): CancelablePromise<Array<ExplicitTeamMember>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/explicit_members/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExplicitTeamMember
     * @throws ApiError
     */
    public static explicitMembersCreate(
        projectId: string,
        requestBody: ExplicitTeamMember,
    ): CancelablePromise<ExplicitTeamMember> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/explicit_members/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param parentMembershipUserUuid
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExplicitTeamMember
     * @throws ApiError
     */
    public static explicitMembersRetrieve(
        parentMembershipUserUuid: string,
        projectId: string,
    ): CancelablePromise<ExplicitTeamMember> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}/',
            path: {
                'parent_membership__user__uuid': parentMembershipUserUuid,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param parentMembershipUserUuid
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExplicitTeamMember
     * @throws ApiError
     */
    public static explicitMembersUpdate(
        parentMembershipUserUuid: string,
        projectId: string,
        requestBody: ExplicitTeamMember,
    ): CancelablePromise<ExplicitTeamMember> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}/',
            path: {
                'parent_membership__user__uuid': parentMembershipUserUuid,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param parentMembershipUserUuid
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExplicitTeamMember
     * @throws ApiError
     */
    public static explicitMembersPartialUpdate(
        parentMembershipUserUuid: string,
        projectId: string,
        requestBody?: PatchedExplicitTeamMember,
    ): CancelablePromise<ExplicitTeamMember> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}/',
            path: {
                'parent_membership__user__uuid': parentMembershipUserUuid,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param parentMembershipUserUuid
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static explicitMembersDestroy(
        parentMembershipUserUuid: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}/',
            path: {
                'parent_membership__user__uuid': parentMembershipUserUuid,
                'project_id': projectId,
            },
        });
    }

}
