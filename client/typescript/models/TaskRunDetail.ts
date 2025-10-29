/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskRunDetailStatusEnum } from './TaskRunDetailStatusEnum';
export type TaskRunDetail = {
    readonly id: string;
    readonly task: string;
    /**
     * Current stage for this run (e.g., 'backlog', 'in_progress', 'done')
     */
    stage?: string | null;
    /**
     * Branch name for the run
     */
    branch?: string | null;
    status?: TaskRunDetailStatusEnum;
    /**
     * Live output from Claude Code execution
     */
    log?: any;
    /**
     * Error message if execution failed
     */
    error_message?: string | null;
    /**
     * Run output data (e.g., PR URL, commit SHA, etc.)
     */
    output?: any;
    /**
     * Run state data for resuming or tracking execution state
     */
    state?: any;
    readonly created_at: string;
    readonly updated_at: string;
    readonly completed_at: string | null;
};

