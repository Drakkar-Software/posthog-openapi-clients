/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type DashboardBasic = {
    readonly id: number;
    readonly name: string | null;
    readonly description: string;
    readonly pinned: boolean;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly is_shared: boolean;
    readonly deleted: boolean;
    /**
     * * `default` - Default
     * * `template` - Template
     * * `duplicate` - Duplicate
     */
    readonly creation_mode: DashboardBasic.creation_mode;
    tags?: Array<any>;
    /**
     * * `21` - Everyone in the project can edit
     * * `37` - Only those invited to this dashboard can edit
     */
    readonly restriction_level: DashboardBasic.restriction_level;
    readonly effective_restriction_level: DashboardBasic.effective_restriction_level;
    readonly effective_privilege_level: DashboardBasic.effective_privilege_level;
};
export namespace DashboardBasic {
    /**
     * * `default` - Default
     * * `template` - Template
     * * `duplicate` - Duplicate
     */
    export enum creation_mode {
        DEFAULT = 'default',
        TEMPLATE = 'template',
        DUPLICATE = 'duplicate',
    }
    /**
     * * `21` - Everyone in the project can edit
     * * `37` - Only those invited to this dashboard can edit
     */
    export enum restriction_level {
        '_21' = 21,
        '_37' = 37,
    }
    export enum effective_restriction_level {
        '_21' = 21,
        '_37' = 37,
    }
    export enum effective_privilege_level {
        '_21' = 21,
        '_37' = 37,
    }
}

