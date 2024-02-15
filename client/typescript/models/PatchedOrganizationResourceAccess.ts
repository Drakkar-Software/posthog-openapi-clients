/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PatchedOrganizationResourceAccess = {
    readonly id?: number;
    /**
     * * `feature flags` - feature flags
     * * `experiments` - experiments
     * * `cohorts` - cohorts
     * * `data management` - data management
     * * `session recordings` - session recordings
     * * `insights` - insights
     * * `dashboards` - dashboards
     */
    resource?: PatchedOrganizationResourceAccess.resource;
    /**
     * * `21` - Can only view
     * * `37` - Can always edit
     */
    access_level?: PatchedOrganizationResourceAccess.access_level;
    readonly organization?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    readonly created_by?: number | null;
};
export namespace PatchedOrganizationResourceAccess {
    /**
     * * `feature flags` - feature flags
     * * `experiments` - experiments
     * * `cohorts` - cohorts
     * * `data management` - data management
     * * `session recordings` - session recordings
     * * `insights` - insights
     * * `dashboards` - dashboards
     */
    export enum resource {
        FEATURE_FLAGS = 'feature flags',
        EXPERIMENTS = 'experiments',
        COHORTS = 'cohorts',
        DATA_MANAGEMENT = 'data management',
        SESSION_RECORDINGS = 'session recordings',
        INSIGHTS = 'insights',
        DASHBOARDS = 'dashboards',
    }
    /**
     * * `21` - Can only view
     * * `37` - Can always edit
     */
    export enum access_level {
        '_21' = 21,
        '_37' = 37,
    }
}

