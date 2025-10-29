/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExportBackfillStatusEnum } from './BatchExportBackfillStatusEnum';
export type BatchExportBackfill = {
    readonly id: string;
    readonly progress: string;
    /**
     * The start of the data interval.
     */
    start_at?: string | null;
    /**
     * The end of the data interval.
     */
    end_at?: string | null;
    /**
     * The status of this backfill.
     *
     * * `Cancelled` - Cancelled
     * * `Completed` - Completed
     * * `ContinuedAsNew` - Continued As New
     * * `Failed` - Failed
     * * `FailedRetryable` - Failed Retryable
     * * `Terminated` - Terminated
     * * `TimedOut` - Timedout
     * * `Running` - Running
     * * `Starting` - Starting
     */
    status: BatchExportBackfillStatusEnum;
    /**
     * The timestamp at which this BatchExportBackfill was created.
     */
    readonly created_at: string;
    /**
     * The timestamp at which this BatchExportBackfill finished, successfully or not.
     */
    finished_at?: string | null;
    /**
     * The timestamp at which this BatchExportBackfill was last updated.
     */
    readonly last_updated_at: string;
    /**
     * The team this belongs to.
     */
    team: number;
    /**
     * The BatchExport this backfill belongs to.
     */
    batch_export: string;
};

