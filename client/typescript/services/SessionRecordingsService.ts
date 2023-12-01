/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSessionRecordingList } from '../models/PaginatedSessionRecordingList';
import type { SessionRecording } from '../models/SessionRecording';

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
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionRecording
     * @throws ApiError
     */
    public sessionRecordingsPersistCreate(
        id: string,
        projectId: string,
        requestBody?: SessionRecording,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/session_recordings/{id}/persist/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Snapshots can be loaded from multiple places:
     * 1. From S3 if the session is older than our ingestion limit. This will be multiple files that can be streamed to the client
     * 2. or from Redis if the session is newer than our ingestion limit.
     *
     * Clients need to call this API twice.
     * First without a source parameter to get a list of sources supported by the given session.
     * And then once for each source in the returned list to get the actual snapshots.
     *
     * NB version 1 of this API has been deprecated and ClickHouse stored snapshots are no longer supported.
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SessionRecording
     * @throws ApiError
     */
    public sessionRecordingsSnapshotsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recordings/{id}/snapshots/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     *
     * Gets a list of event ids that match the given session recording filter.
     * The filter must include a single session ID.
     * And must include at least one event or action filter.
     * This API is intended for internal use and might have unannounced breaking changes.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SessionRecording
     * @throws ApiError
     */
    public sessionRecordingsMatchingEventsRetrieve(
        projectId: string,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recordings/matching_events/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SessionRecording
     * @throws ApiError
     */
    public sessionRecordingsPropertiesRetrieve(
        projectId: string,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recordings/properties/',
            path: {
                'project_id': projectId,
            },
        });
    }

}
