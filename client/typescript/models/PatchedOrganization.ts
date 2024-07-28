/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EffectiveMembershipLevelEnum } from './EffectiveMembershipLevelEnum';
import type { PluginsAccessLevelEnum } from './PluginsAccessLevelEnum';
export type PatchedOrganization = {
    readonly id?: string;
    name?: string;
    readonly slug?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly membership_level?: EffectiveMembershipLevelEnum | null;
    readonly plugins_access_level?: PluginsAccessLevelEnum;
    readonly teams?: Array<Record<string, any>>;
    readonly available_product_features?: Array<any> | null;
    is_member_join_email_enabled?: boolean;
    readonly metadata?: string;
    readonly customer_id?: string | null;
    enforce_2fa?: boolean | null;
    readonly member_count?: string;
};

