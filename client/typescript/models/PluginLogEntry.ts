/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginLogEntrySourceEnum } from './PluginLogEntrySourceEnum';
import type { PluginLogEntryTypeEnum } from './PluginLogEntryTypeEnum';
export type PluginLogEntry = {
    id: string;
    team_id: number;
    plugin_id: number;
    plugin_config_id: number;
    timestamp: string;
    source: PluginLogEntrySourceEnum;
    type: PluginLogEntryTypeEnum;
    message: string;
    instance_id: string;
};

