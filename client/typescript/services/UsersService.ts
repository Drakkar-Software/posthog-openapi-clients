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
     * @param email
     * @param isStaff
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedUserList
     * @throws ApiError
     */
    public usersList(
        email?: string,
        isStaff?: boolean,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedUserList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/',
            query: {
                'email': email,
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
     * @returns void
     * @throws ApiError
     */
    public usersDestroy(
        uuid: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/users/{uuid}/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * @param uuid
     * @returns any No response body
     * @throws ApiError
     */
    public usersHedgehogConfigRetrieve(
        uuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{uuid}/hedgehog_config/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public usersHedgehogConfigPartialUpdate(
        uuid: string,
        requestBody?: PatchedUser,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/users/{uuid}/hedgehog_config/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public usersScenePersonalisationCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<any> {
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
     * @returns any No response body
     * @throws ApiError
     */
    public usersStart2FaSetupRetrieve(
        uuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{uuid}/start_2fa_setup/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Generate new backup codes, invalidating any existing ones
     * @param uuid
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public usersTwoFactorBackupCodesCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{uuid}/two_factor_backup_codes/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Disable 2FA and remove all related devices
     * @param uuid
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public usersTwoFactorDisableCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{uuid}/two_factor_disable/',
            path: {
                'uuid': uuid,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param uuid
     * @returns any No response body
     * @throws ApiError
     */
    public usersTwoFactorStartSetupRetrieve(
        uuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{uuid}/two_factor_start_setup/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * Get current 2FA status including backup codes if enabled
     * @param uuid
     * @returns any No response body
     * @throws ApiError
     */
    public usersTwoFactorStatusRetrieve(
        uuid: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/users/{uuid}/two_factor_status/',
            path: {
                'uuid': uuid,
            },
        });
    }
    /**
     * @param uuid
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public usersTwoFactorValidateCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/{uuid}/two_factor_validate/',
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
     * @returns any No response body
     * @throws ApiError
     */
    public usersValidate2FaCreate(
        uuid: string,
        requestBody: User,
    ): CancelablePromise<any> {
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
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public usersCancelEmailChangeRequestPartialUpdate(
        requestBody?: PatchedUser,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/users/cancel_email_change_request/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public usersRequestEmailVerificationCreate(
        requestBody: User,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/request_email_verification/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public usersVerifyEmailCreate(
        requestBody: User,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/users/verify_email/',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
