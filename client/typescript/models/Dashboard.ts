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
    readonly is_shared: boolean;
    deleted?: boolean;
    readonly creation_mode: CreationModeEnum;
    use_template?: string;
    use_dashboard?: number | null;
    delete_insights?: boolean;
    readonly filters: Record<string, any>;
    tags?: Array<any>;
    readonly tiles: Array<Record<string, any>> | null;
    restriction_level?: DashboardRestrictionLevel;
    readonly effective_restriction_level: EffectiveRestrictionLevelEnum;
    readonly effective_privilege_level: EffectivePrivilegeLevelEnum;
};

