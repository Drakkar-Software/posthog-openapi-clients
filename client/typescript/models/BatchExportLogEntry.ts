/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExportLogEntryLevelEnum } from './BatchExportLogEntryLevelEnum';
export type BatchExportLogEntry = {
    team_id: number;
    batch_export_id: string;
    run_id: string;
    timestamp: string;
    level: BatchExportLogEntryLevelEnum;
    message: string;
};

