/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExportDestination } from './BatchExportDestination';
import type { BatchExportRun } from './BatchExportRun';
import type { BlankEnum } from './BlankEnum';
import type { IntervalEnum } from './IntervalEnum';
import type { ModelEnum } from './ModelEnum';
import type { NullEnum } from './NullEnum';
/**
 * Serializer for a BatchExport model.
 */
export type BatchExport = {
    readonly id: string;
    /**
     * The team this belongs to.
     */
    readonly team_id: number;
    /**
     * A human-readable name for this BatchExport.
     */
    name: string;
    /**
     * Which model this BatchExport is exporting.
     *
     * * `events` - Events
     * * `persons` - Persons
     */
    model?: (ModelEnum | BlankEnum | NullEnum) | null;
    destination: BatchExportDestination;
    interval: IntervalEnum;
    /**
     * Whether this BatchExport is paused or not.
     */
    paused?: boolean;
    /**
     * The timestamp at which this BatchExport was created.
     */
    readonly created_at: string;
    /**
     * The timestamp at which this BatchExport was last updated.
     */
    readonly last_updated_at: string;
    /**
     * The timestamp at which this BatchExport was last paused.
     */
    last_paused_at?: string | null;
    /**
     * Time before which any Batch Export runs won't be triggered.
     */
    start_at?: string | null;
    /**
     * Time after which any Batch Export runs won't be triggered.
     */
    end_at?: string | null;
    readonly latest_runs: Array<BatchExportRun>;
    hogql_query?: string;
    /**
     * A schema of custom fields to select when exporting data.
     */
    readonly schema: any;
};

