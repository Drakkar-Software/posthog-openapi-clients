/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DatabaseSerializedFieldType } from './DatabaseSerializedFieldType';
export type DatabaseSchemaQueryResponseField = {
    chain?: (Array<string> | null);
    fields?: (Array<string> | null);
    key: string;
    schema_valid: boolean;
    table?: (string | null);
    type: DatabaseSerializedFieldType;
};

