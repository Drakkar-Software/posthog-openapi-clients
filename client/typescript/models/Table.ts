/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Credential } from './Credential';
import type { SimpleExternalDataSourceSerializers } from './SimpleExternalDataSourceSerializers';
import type { UserBasic } from './UserBasic';
export type Table = {
    readonly id: string;
    deleted?: boolean | null;
    name: string;
    /**
     * * `CSV` - CSV
     * * `Parquet` - Parquet
     * * `JSONEachRow` - JSON
     */
    format: Table.format;
    readonly created_by: UserBasic;
    readonly created_at: string;
    url_pattern: string;
    credential: Credential;
    readonly columns: Array<{
        key: string;
        type: 'integer' | 'float' | 'string' | 'datetime' | 'date' | 'boolean' | 'array' | 'json' | 'lazy_table' | 'virtual_table' | 'field_traverser';
        fields?: Array<string>;
        table?: string;
        chain?: Array<string>;
    }>;
    readonly external_data_source: SimpleExternalDataSourceSerializers;
    readonly external_schema: string;
};
export namespace Table {
    /**
     * * `CSV` - CSV
     * * `Parquet` - Parquet
     * * `JSONEachRow` - JSON
     */
    export enum format {
        CSV = 'CSV',
        PARQUET = 'Parquet',
        JSONEACH_ROW = 'JSONEachRow',
    }
}

