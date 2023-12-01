/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BatchExportLogEntry = {
    team_id: number;
    batch_export_id: string;
    run_id: string;
    timestamp: string;
    level: BatchExportLogEntry.level;
    message: string;
};

export namespace BatchExportLogEntry {

    export enum level {
        DEBUG = 'DEBUG',
        LOG = 'LOG',
        INFO = 'INFO',
        WARNING = 'WARNING',
        ERROR = 'ERROR',
    }


}

