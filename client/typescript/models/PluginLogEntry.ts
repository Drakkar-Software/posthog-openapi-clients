/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PluginLogEntryTypeEnum } from './PluginLogEntryTypeEnum';
import type { SourceEnum } from './SourceEnum';
export type PluginLogEntry = {
    id: string;
    team_id: number;
    plugin_id: number;
    plugin_config_id: number;
    timestamp: string;
    source: SourceEnum;
    type: PluginLogEntryTypeEnum;
    message: string;
    instance_id: string;
};

