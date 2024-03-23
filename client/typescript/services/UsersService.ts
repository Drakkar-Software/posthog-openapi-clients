/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserList } from '../models/PaginatedUserList';
import type { PatchedUser } from '../models/PatchedUser';
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param isStaff
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedUserList
     * @throws ApiError
     */
    public usersList(
        isStaff?: boolean,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedUserList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/',
            query: {
                'is_staff': isStaff,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param uuid
     * @returns User
     * @throws ApiError
     */
    public usersRetrieve(
        uuid: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public usersUpdate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/users/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public usersPartialUpdate(
        uuid: string,
        requestBody?: PatchedUser,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/users/{uuid}/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public usersRequestEmailVerificationCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{uuid}/request_email_verification/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public usersScenePersonalisationCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{uuid}/scene_personalisation/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param uuid
     * @returns User
     * @throws ApiError
     */
    public usersStart2FaSetupRetrieve(
        uuid: string,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{uuid}/start_2fa_setup/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public usersValidate2FaCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{uuid}/validate_2fa/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns User
     * @throws ApiError
     */
    public usersVerifyEmailCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<User> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{uuid}/verify_email/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
