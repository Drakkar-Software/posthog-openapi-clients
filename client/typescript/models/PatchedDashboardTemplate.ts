/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PatchedDashboardTemplate = {
    readonly id?: string;
    template_name?: string | null;
    dashboard_description?: string | null;
    dashboard_filters?: any;
    tags?: Array<string> | null;
    tiles?: any;
    variables?: any;
    deleted?: boolean | null;
    readonly created_at?: string | null;
    created_by?: number | null;
    image_url?: string | null;
    readonly team_id?: number | null;
    /**
     * * `team` - Only team
     * * `global` - Global
     * * `feature_flag` - Feature Flag
     */
    scope?: PatchedDashboardTemplate.scope | null;
};
export namespace PatchedDashboardTemplate {
    /**
     * * `team` - Only team
     * * `global` - Global
     * * `feature_flag` - Feature Flag
     */
    export enum scope {
        TEAM = 'team',
        GLOBAL = 'global',
        FEATURE_FLAG = 'feature_flag',
        
    }
}

