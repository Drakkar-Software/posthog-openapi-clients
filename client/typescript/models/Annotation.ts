/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnotationScopeEnum } from './AnnotationScopeEnum';
import type { CreationTypeEnum } from './CreationTypeEnum';
import type { UserBasic } from './UserBasic';
export type Annotation = {
    readonly id: number;
    content?: string | null;
    date_marker?: string | null;
    creation_type?: CreationTypeEnum;
    dashboard_item?: number | null;
    readonly dashboard_id: number | null;
    readonly dashboard_name: string | null;
    readonly insight_short_id: string | null;
    readonly insight_name: string | null;
    readonly insight_derived_name: string | null;
    readonly created_by: UserBasic;
    readonly created_at: string | null;
    readonly updated_at: string;
    deleted?: boolean;
    scope?: AnnotationScopeEnum;
};

