/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { NullEnum } from './NullEnum';
import type { RoleAtOrganizationEnum } from './RoleAtOrganizationEnum';
export type UserBasic = {
    readonly id: number;
    readonly uuid: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email: string;
    is_email_verified?: boolean | null;
    readonly hedgehog_config: Record<string, any> | null;
    role_at_organization?: (RoleAtOrganizationEnum | BlankEnum | NullEnum) | null;
};

