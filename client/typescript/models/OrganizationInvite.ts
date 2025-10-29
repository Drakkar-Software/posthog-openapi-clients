/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrganizationMembershipLevel } from './OrganizationMembershipLevel';
import type { UserBasic } from './UserBasic';
export type OrganizationInvite = {
    readonly id: string;
    target_email: string;
    first_name?: string;
    readonly emailing_attempt_made: boolean;
    level?: OrganizationMembershipLevel;
    /**
     * Check if invite is older than INVITE_DAYS_VALIDITY days.
     */
    readonly is_expired: boolean;
    readonly created_by: UserBasic;
    readonly created_at: string;
    readonly updated_at: string;
    message?: string | null;
    /**
     * List of team IDs and corresponding access levels to private projects.
     */
    private_project_access?: any;
    send_email?: boolean;
    combine_pending_invites?: boolean;
};

