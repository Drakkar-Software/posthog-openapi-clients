/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSessionRecordingPlaylistList } from '../models/PaginatedSessionRecordingPlaylistList';
import type { PatchedSessionRecordingPlaylist } from '../models/PatchedSessionRecordingPlaylist';
import type { SessionRecordingPlaylist } from '../models/SessionRecordingPlaylist';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SessionRecordingPlaylistsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param createdBy
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param shortId
     * @returns PaginatedSessionRecordingPlaylistList
     * @throws ApiError
     */
    public sessionRecordingPlaylistsList(
        projectId: string,
        createdBy?: number,
        limit?: number,
        offset?: number,
        shortId?: string,
    ): CancelablePromise<PaginatedSessionRecordingPlaylistList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recording_playlists/',
            path: {
                'project_id': projectId,
            },
            query: {
                'created_by': createdBy,
                'limit': limit,
                'offset': offset,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public sessionRecordingPlaylistsCreate(
        projectId: string,
        requestBody?: SessionRecordingPlaylist,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/session_recording_playlists/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public sessionRecordingPlaylistsRetrieve(
        projectId: string,
        shortId: string,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @param requestBody
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public sessionRecordingPlaylistsUpdate(
        projectId: string,
        shortId: string,
        requestBody?: SessionRecordingPlaylist,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @param requestBody
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public sessionRecordingPlaylistsPartialUpdate(
        projectId: string,
        shortId: string,
        requestBody?: PatchedSessionRecordingPlaylist,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns void
     * @throws ApiError
     */
    public sessionRecordingPlaylistsDestroy(
        projectId: string,
        shortId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public sessionRecordingPlaylistsRecordingsRetrieve(
        projectId: string,
        shortId: string,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param sessionRecordingId
     * @param shortId
     * @param requestBody
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public sessionRecordingPlaylistsRecordingsCreate(
        projectId: string,
        sessionRecordingId: string,
        shortId: string,
        requestBody?: SessionRecordingPlaylist,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/',
            path: {
                'project_id': projectId,
                'session_recording_id': sessionRecordingId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param sessionRecordingId
     * @param shortId
     * @returns void
     * @throws ApiError
     */
    public sessionRecordingPlaylistsRecordingsDestroy(
        projectId: string,
        sessionRecordingId: string,
        shortId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/',
            path: {
                'project_id': projectId,
                'session_recording_id': sessionRecordingId,
                'short_id': shortId,
            },
        });
    }
}
