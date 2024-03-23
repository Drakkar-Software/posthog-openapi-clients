/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MinimalFeatureFlag = {
    readonly id: number;
    readonly team_id: number;
    name?: string;
    key: string;
    filters?: Record<string, any>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
};

