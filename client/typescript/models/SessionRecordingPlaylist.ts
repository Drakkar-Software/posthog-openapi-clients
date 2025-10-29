/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NullEnum } from './NullEnum';
import type { SessionRecordingPlaylistTypeEnum } from './SessionRecordingPlaylistTypeEnum';
import type { UserBasic } from './UserBasic';
export type SessionRecordingPlaylist = {
    readonly id: number;
    readonly short_id: string;
    name?: string | null;
    derived_name?: string | null;
    description?: string;
    pinned?: boolean;
    readonly created_at: string;
    readonly created_by: UserBasic;
    deleted?: boolean;
    filters?: any;
    readonly last_modified_at: string;
    readonly last_modified_by: UserBasic;
    readonly recordings_counts: Record<string, Record<string, (number | boolean) | null>>;
    readonly type: (SessionRecordingPlaylistTypeEnum | NullEnum) | null;
    /**
     * Return whether this is a synthetic playlist
     */
    readonly is_synthetic: boolean;
    _create_in_folder?: string;
};

