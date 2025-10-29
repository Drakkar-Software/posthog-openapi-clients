/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { DashboardTemplateScopeEnum } from './DashboardTemplateScopeEnum';
import type { NullEnum } from './NullEnum';
export type DashboardTemplate = {
    readonly id: string;
    template_name?: string | null;
    dashboard_description?: string | null;
    dashboard_filters?: any;
    tags?: Array<string> | null;
    tiles?: any;
    variables?: any;
    deleted?: boolean | null;
    readonly created_at: string | null;
    created_by?: number | null;
    image_url?: string | null;
    readonly team_id: number | null;
    scope?: (DashboardTemplateScopeEnum | BlankEnum | NullEnum) | null;
    availability_contexts?: Array<string> | null;
};

