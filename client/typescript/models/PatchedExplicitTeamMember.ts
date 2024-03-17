/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EffectiveMembershipLevelEnum } from './EffectiveMembershipLevelEnum';
import type { ExplicitTeamMemberLevelEnum } from './ExplicitTeamMemberLevelEnum';
import type { UserBasic } from './UserBasic';
export type PatchedExplicitTeamMember = {
    readonly id?: string;
    level?: ExplicitTeamMemberLevelEnum;
    readonly parent_level?: number;
    readonly parent_membership_id?: string;
    readonly joined_at?: string;
    readonly updated_at?: string;
    readonly user?: UserBasic;
    user_uuid?: string;
    /**
     * If organization level is higher than project level, then that takes precedence over explicit project level.
     */
    readonly effective_level?: EffectiveMembershipLevelEnum;
};

