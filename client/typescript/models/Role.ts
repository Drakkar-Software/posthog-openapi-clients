/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type Role = {
    readonly id: string;
    name: string;
    /**
     * * `21` - Can only view
     * * `37` - Can always edit
     */
    feature_flags_access_level?: Role.feature_flags_access_level;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly members: string;
    readonly associated_flags: string;
};
export namespace Role {
    /**
     * * `21` - Can only view
     * * `37` - Can always edit
     */
    export enum feature_flags_access_level {
        '_21' = 21,
        '_37' = 37,
    }
}

