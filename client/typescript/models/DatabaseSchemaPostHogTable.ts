/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaField } from './DatabaseSchemaField';
export type DatabaseSchemaPostHogTable = {
    fields: Record<string, DatabaseSchemaField>;
    id: string;
    name: string;
    row_count?: number | null;
    type?: DatabaseSchemaPostHogTable.type;
};
export namespace DatabaseSchemaPostHogTable {
    export enum type {
        POSTHOG = 'posthog',
    }
}

