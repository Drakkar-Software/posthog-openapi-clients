/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type ExperimentSavedMetric = {
    readonly id: number;
    name: string;
    description?: string | null;
    query: any;
    readonly created_by: UserBasic;
    readonly created_at: string;
    readonly updated_at: string;
    tags?: Array<any>;
};

