/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreationModeEnum } from './CreationModeEnum';
import type { DashboardRestrictionLevel } from './DashboardRestrictionLevel';
import type { EffectivePrivilegeLevelEnum } from './EffectivePrivilegeLevelEnum';
import type { EffectiveRestrictionLevelEnum } from './EffectiveRestrictionLevelEnum';
import type { UserBasic } from './UserBasic';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type Dashboard = {
    readonly id: number;
    name?: string | null;
    description?: string;
    pinned?: boolean;
    readonly created_at: string;
    readonly created_by: UserBasic;
    last_accessed_at?: string | null;
    readonly last_viewed_at: string | null;
    readonly is_shared: boolean;
    deleted?: boolean;
    readonly creation_mode: CreationModeEnum;
    readonly filters: Record<string, any>;
    readonly variables: Record<string, any> | null;
    breakdown_colors?: any;
    data_color_theme_id?: number | null;
    tags?: Array<any>;
    restriction_level?: DashboardRestrictionLevel;
    readonly effective_restriction_level: EffectiveRestrictionLevelEnum;
    readonly effective_privilege_level: EffectivePrivilegeLevelEnum;
    /**
     * The effective access level the user has for this object
     */
    readonly user_access_level: string | null;
    readonly access_control_version: string;
    last_refresh?: string | null;
    readonly persisted_filters: Record<string, any> | null;
    readonly persisted_variables: Record<string, any> | null;
    readonly team_id: number;
    readonly tiles: Array<Record<string, any>> | null;
    use_template?: string;
    use_dashboard?: number | null;
    delete_insights?: boolean;
    _create_in_folder?: string;
};

