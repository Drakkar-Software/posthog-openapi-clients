/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationMembershipLevel } from './OrganizationMembershipLevel';
import type { UserBasic } from './UserBasic';
export type PatchedOrganizationMember = {
    readonly id?: string;
    readonly user?: UserBasic;
    level?: OrganizationMembershipLevel;
    readonly joined_at?: string;
    readonly updated_at?: string;
    readonly is_2fa_enabled?: boolean;
    readonly has_social_auth?: boolean;
    readonly last_login?: string;
};

