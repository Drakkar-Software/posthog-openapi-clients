/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSessionRecordingList } from '../models/PaginatedSessionRecordingList';
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
}
