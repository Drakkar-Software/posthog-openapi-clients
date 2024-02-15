/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PatchedPlugin = {
    readonly id?: number;
    /**
     * * `local` - local
     * * `custom` - custom
     * * `repository` - repository
     * * `source` - source
     */
    plugin_type?: PatchedPlugin.plugin_type | null;
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
export namespace PatchedPlugin {
    /**
     * * `local` - local
     * * `custom` - custom
     * * `repository` - repository
     * * `source` - source
     */
    export enum plugin_type {
        LOCAL = 'local',
        CUSTOM = 'custom',
        REPOSITORY = 'repository',
        SOURCE = 'source',
        
    }
}

