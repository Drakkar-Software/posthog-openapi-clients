/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusEnum } from './StatusEnum';
/**
 * Serializer for a BatchExportRun model.
 */
export type BatchExportRun = {
    readonly id: string;
    /**
     * The status of this run.
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
    status: StatusEnum;
    /**
     * The number of records that have been exported.
     */
    records_completed?: number | null;
    /**
     * The latest error that occurred during this run.
     */
    latest_error?: string | null;
    /**
     * The start of the data interval.
     */
    data_interval_start: string;
    /**
     * The end of the data interval.
     */
    data_interval_end: string;
    /**
     * An opaque cursor that may be used to resume.
     */
    cursor?: string | null;
    /**
     * The timestamp at which this BatchExportRun was created.
     */
    readonly created_at: string;
    /**
     * The timestamp at which this BatchExportRun finished, successfully or not.
     */
    finished_at?: string | null;
    /**
     * The timestamp at which this BatchExportRun was last updated.
     */
    readonly last_updated_at: string;
    /**
     * The total count of records that should be exported in this BatchExportRun.
     */
    records_total_count?: number | null;
    /**
     * The BatchExport this run belongs to.
     */
    readonly batch_export: string;
};

