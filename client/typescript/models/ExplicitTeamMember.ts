/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserBasic } from './UserBasic';

export type ExplicitTeamMember = {
    readonly id: string;
    level?: ExplicitTeamMember.level;
    readonly parent_level: number;
    readonly parent_membership_id: string;
    readonly joined_at: string;
    readonly updated_at: string;
    readonly user: UserBasic;
    user_uuid: string;
    readonly effective_level: ExplicitTeamMember.effective_level;
};

export namespace ExplicitTeamMember {

    export enum level {
        '_1' = 1,
        '_8' = 8,
    }

    export enum effective_level {
        '_1' = 1,
        '_8' = 8,
        '_15' = 15,
    }


}

