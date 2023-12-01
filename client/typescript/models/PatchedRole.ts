/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBasic } from './UserBasic';

export type PatchedRole = {
    readonly id?: string;
    name?: string;
    feature_flags_access_level?: PatchedRole.feature_flags_access_level;
    readonly created_at?: string;
    readonly created_by?: UserBasic;
    readonly members?: string;
    readonly associated_flags?: string;
};

export namespace PatchedRole {

    export enum feature_flags_access_level {
        '_21' = 21,
        '_37' = 37,
    }


}

