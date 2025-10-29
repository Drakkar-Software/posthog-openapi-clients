/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardTileBasic } from './DashboardTileBasic';
import type { EffectivePrivilegeLevelEnum } from './EffectivePrivilegeLevelEnum';
import type { EffectiveRestrictionLevelEnum } from './EffectiveRestrictionLevelEnum';
import type { UserBasic } from './UserBasic';
/**
 * Simplified serializer to speed response times when loading large amounts of objects.
 */
export type Insight = {
    readonly id: number;
    readonly short_id: string;
    name?: string | null;
    derived_name?: string | null;
    query?: Record<string, any> | null;
    order?: number | null;
    deleted?: boolean;
    /**
     *
     * DEPRECATED. Will be removed in a future release. Use dashboard_tiles instead.
     * A dashboard ID for each of the dashboards that this insight is displayed on.
     *
     */
    dashboards?: Array<number>;
    /**
     *
     * A dashboard tile ID and dashboard_id for each of the dashboards that this insight is displayed on.
     *
     */
    readonly dashboard_tiles: Array<DashboardTileBasic>;
    /**
     *
     * The datetime this insight's results were generated.
     * If added to one or more dashboards the insight can be refreshed separately on each.
     * Returns the appropriate last_refresh datetime for the context the insight is viewed in
     * (see from_dashboard query parameter).
     *
     */
    readonly last_refresh: string;
    /**
     * The target age of the cached results for this insight.
     */
    readonly cache_target_age: string;
    /**
     *
     * The earliest possible datetime at which we'll allow the cached results for this insight to be refreshed
     * by querying the database.
     *
     */
    readonly next_allowed_client_refresh: string;
    readonly result: string;
    readonly hasMore: string;
    readonly columns: string;
    readonly created_at: string | null;
    readonly created_by: UserBasic;
    description?: string | null;
    readonly updated_at: string;
    tags?: Array<any>;
    favorited?: boolean;
    readonly last_modified_at: string;
    readonly last_modified_by: UserBasic;
    readonly is_sample: boolean;
    readonly effective_restriction_level: EffectiveRestrictionLevelEnum;
    readonly effective_privilege_level: EffectivePrivilegeLevelEnum;
    /**
     * The effective access level the user has for this object
     */
    readonly user_access_level: string | null;
    /**
     * The timezone this chart is displayed in.
     */
    readonly timezone: string;
    readonly is_cached: string;
    readonly query_status: string;
    readonly hogql: string;
    readonly types: string;
    _create_in_folder?: string;
    readonly alerts: string;
    readonly last_viewed_at: string;
};

