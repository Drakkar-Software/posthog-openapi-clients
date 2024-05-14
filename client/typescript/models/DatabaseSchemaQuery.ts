/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaQueryResponseField } from './DatabaseSchemaQueryResponseField';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
export type DatabaseSchemaQuery = {
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    response?: (Record<string, Array<DatabaseSchemaQueryResponseField>> | null);
};

