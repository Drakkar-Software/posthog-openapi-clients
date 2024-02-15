/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type ExplicitTeamMember = {
    readonly id: string;
    /**
     * * `1` - member
     * * `8` - administrator
     */
    level?: ExplicitTeamMember.level;
    readonly parent_level: number;
    readonly parent_membership_id: string;
    readonly joined_at: string;
    readonly updated_at: string;
    readonly user: UserBasic;
    user_uuid: string;
    /**
     * If organization level is higher than project level, then that takes precedence over explicit project level.
     */
    readonly effective_level: ExplicitTeamMember.effective_level;
};
export namespace ExplicitTeamMember {
    /**
     * * `1` - member
     * * `8` - administrator
     */
    export enum level {
        '_1' = 1,
        '_8' = 8,
    }
    /**
     * If organization level is higher than project level, then that takes precedence over explicit project level.
     */
    export enum effective_level {
        '_1' = 1,
        '_8' = 8,
        '_15' = 15,
    }
}

