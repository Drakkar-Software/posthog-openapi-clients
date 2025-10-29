/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSerializedFieldType } from './DatabaseSerializedFieldType';
export type DatabaseSchemaField = {
    chain?: Array<(string | number)> | null;
    fields?: Array<string> | null;
    hogql_value: string;
    id?: string | null;
    name: string;
    schema_valid: boolean;
    table?: string | null;
    type: DatabaseSerializedFieldType;
};

