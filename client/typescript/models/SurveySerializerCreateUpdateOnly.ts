/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
import type { UserBasic } from './UserBasic';
export type SurveySerializerCreateUpdateOnly = {
    readonly id: string;
    name: string;
    description?: string;
    /**
     * * `popover` - popover
     * * `widget` - widget
     * * `button` - button
     * * `email` - email
     * * `full_screen` - full screen
     * * `api` - api
     */
    type: SurveySerializerCreateUpdateOnly.type;
    readonly linked_flag: MinimalFeatureFlag;
    linked_flag_id?: number | null;
    targeting_flag_id?: number;
    readonly targeting_flag: MinimalFeatureFlag;
    targeting_flag_filters?: any;
    remove_targeting_flag?: boolean | null;
    questions?: any;
    conditions?: any;
    appearance?: any;
    readonly created_at: string;
    readonly created_by: UserBasic;
    start_date?: string | null;
    end_date?: string | null;
    archived?: boolean;
};
export namespace SurveySerializerCreateUpdateOnly {
    /**
     * * `popover` - popover
     * * `widget` - widget
     * * `button` - button
     * * `email` - email
     * * `full_screen` - full screen
     * * `api` - api
     */
    export enum type {
        POPOVER = 'popover',
        WIDGET = 'widget',
        BUTTON = 'button',
        EMAIL = 'email',
        FULL_SCREEN = 'full_screen',
        API = 'api',
    }
}

