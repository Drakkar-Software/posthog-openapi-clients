/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardRestrictionLevel } from './DashboardRestrictionLevel';
import type { UserBasic } from './UserBasic';
export type DashboardCollaborator = {
    readonly id: string;
    readonly dashboard_id: number;
    readonly user: UserBasic;
    level: DashboardRestrictionLevel;
    readonly added_at: string;
    readonly updated_at: string;
    user_uuid: string;
};

