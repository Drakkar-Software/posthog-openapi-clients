/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaQueryResponse } from './DatabaseSchemaQueryResponse';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
export type DatabaseSchemaQuery = {
    kind?: any;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
    response?: (DatabaseSchemaQueryResponse | null);
};

