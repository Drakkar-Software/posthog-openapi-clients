/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { NullEnum } from './NullEnum';
import type { PluginTypeEnum } from './PluginTypeEnum';
export type PatchedPlugin = {
    readonly id?: number;
    plugin_type?: (PluginTypeEnum | BlankEnum | NullEnum) | null;
    name?: string | null;
    description?: string | null;
    readonly url?: string | null;
    icon?: string | null;
    config_schema?: any;
    tag?: string | null;
    readonly latest_tag?: string | null;
    is_global?: boolean;
    readonly organization_id?: string;
    readonly organization_name?: string;
    capabilities?: any;
    metrics?: any;
    public_jobs?: any;
};

