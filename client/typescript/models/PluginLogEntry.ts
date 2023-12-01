/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PluginLogEntry = {
    id: string;
    team_id: number;
    plugin_id: number;
    plugin_config_id: number;
    timestamp: string;
    source: PluginLogEntry.source;
    type: PluginLogEntry.type;
    message: string;
    instance_id: string;
};

export namespace PluginLogEntry {

    export enum source {
        SYSTEM = 'SYSTEM',
        PLUGIN = 'PLUGIN',
        CONSOLE = 'CONSOLE',
    }

    export enum type {
        DEBUG = 'DEBUG',
        LOG = 'LOG',
        INFO = 'INFO',
        WARN = 'WARN',
        ERROR = 'ERROR',
    }


}

