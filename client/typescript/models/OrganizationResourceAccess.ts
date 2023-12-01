/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrganizationResourceAccess = {
    readonly id: number;
    resource: OrganizationResourceAccess.resource;
    access_level?: OrganizationResourceAccess.access_level;
    readonly organization: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly created_by: number | null;
};

export namespace OrganizationResourceAccess {

    export enum resource {
        FEATURE_FLAGS = 'feature flags',
        EXPERIMENTS = 'experiments',
        COHORTS = 'cohorts',
        DATA_MANAGEMENT = 'data management',
        SESSION_RECORDINGS = 'session recordings',
        INSIGHTS = 'insights',
        DASHBOARDS = 'dashboards',
    }

    export enum access_level {
        '_21' = 21,
        '_37' = 37,
    }


}

