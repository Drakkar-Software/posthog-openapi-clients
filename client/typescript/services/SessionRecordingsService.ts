/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSessionRecordingList } from '../models/PaginatedSessionRecordingList';
import type { PatchedSessionRecording } from '../models/PatchedSessionRecording';
import type { SessionRecording } from '../models/SessionRecording';
import type { SharingConfiguration } from '../models/SharingConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SessionRecordingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSessionRecordingList
     * @throws ApiError
     */
    public sessionRecordingsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedSessionRecordingList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recordings/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SessionRecording
     * @throws ApiError
     */
    public sessionRecordingsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionRecording
     * @throws ApiError
     */
    public sessionRecordingsUpdate(
        id: string,
        projectId: string,
        requestBody?: SessionRecording,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionRecording
     * @throws ApiError
     */
    public sessionRecordingsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedSessionRecording,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public sessionRecordingsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public sessionRecordingsSharingList(
        projectId: string,
        recordingId: string,
    ): CancelablePromise<Array<SharingConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recordings/{recording_id}/sharing/',
            path: {
                'project_id': projectId,
                'recording_id': recordingId,
            },
        });
    }
    /**
     * Create a new password for the sharing configuration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public sessionRecordingsSharingPasswordsCreate(
        projectId: string,
        recordingId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/session_recordings/{recording_id}/sharing/passwords/',
            path: {
                'project_id': projectId,
                'recording_id': recordingId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a password from the sharing configuration.
     * @param passwordId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @returns void
     * @throws ApiError
     */
    public sessionRecordingsSharingPasswordsDestroy(
        passwordId: string,
        projectId: string,
        recordingId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/session_recordings/{recording_id}/sharing/passwords/{password_id}/',
            path: {
                'password_id': passwordId,
                'project_id': projectId,
                'recording_id': recordingId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public sessionRecordingsSharingRefreshCreate(
        projectId: string,
        recordingId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/session_recordings/{recording_id}/sharing/refresh/',
            path: {
                'project_id': projectId,
                'recording_id': recordingId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
