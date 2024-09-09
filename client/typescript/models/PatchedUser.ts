/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { NullEnum } from './NullEnum';
import type { Organization } from './Organization';
import type { OrganizationBasic } from './OrganizationBasic';
import type { ScenePersonalisationBasic } from './ScenePersonalisationBasic';
import type { TeamBasic } from './TeamBasic';
import type { ThemeModeEnum } from './ThemeModeEnum';
import type { ToolbarModeEnum } from './ToolbarModeEnum';
export type PatchedUser = {
    readonly date_joined?: string;
    readonly uuid?: string;
    readonly distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    readonly pending_email?: string | null;
    readonly is_email_verified?: boolean | null;
    notification_settings?: Record<string, any>;
    anonymize_data?: boolean | null;
    toolbar_mode?: (ToolbarModeEnum | BlankEnum | NullEnum) | null;
    readonly has_password?: boolean;
    /**
     * Designates whether the user can log into this admin site.
     */
    is_staff?: boolean;
    readonly is_impersonated?: boolean | null;
    readonly is_impersonated_until?: string | null;
    readonly sensitive_session_expires_at?: string | null;
    readonly team?: TeamBasic;
    readonly organization?: Organization;
    readonly organizations?: Array<OrganizationBasic>;
    set_current_organization?: string;
    set_current_team?: string;
    password?: string;
    current_password?: string;
    events_column_config?: any;
    readonly is_2fa_enabled?: boolean;
    readonly has_social_auth?: boolean;
    has_seen_product_intro_for?: any;
    readonly scene_personalisation?: Array<ScenePersonalisationBasic>;
    theme_mode?: (ThemeModeEnum | BlankEnum | NullEnum) | null;
    hedgehog_config?: any;
};

