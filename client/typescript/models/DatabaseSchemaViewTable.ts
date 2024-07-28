/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSchemaField } from './DatabaseSchemaField';
import type { HogQLQuery } from './HogQLQuery';
export type DatabaseSchemaViewTable = {
    fields: Record<string, DatabaseSchemaField>;
    id: string;
    name: string;
    query: HogQLQuery;
    type?: any;
};

