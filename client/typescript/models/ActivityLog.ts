/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
export type ActivityLog = {
    readonly id: string;
    user: UserBasic;
    /**
     * is the date of this log item newer than the user's bookmark
     */
    readonly unread: boolean;
    organization_id?: string | null;
    was_impersonated?: boolean | null;
    is_system?: boolean | null;
    activity: string;
    item_id?: string | null;
    scope: string;
    detail?: any;
    created_at?: string;
};

