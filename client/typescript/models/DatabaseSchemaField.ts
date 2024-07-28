/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSerializedFieldType } from './DatabaseSerializedFieldType';
export type DatabaseSchemaField = {
    chain?: null;
    fields?: (Array<string> | null);
    hogql_value: string;
    name: string;
    schema_valid: boolean;
    table?: (string | null);
    type: DatabaseSerializedFieldType;
};

