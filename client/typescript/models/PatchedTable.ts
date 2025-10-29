/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Credential } from './Credential';
import type { SimpleExternalDataSourceSerializers } from './SimpleExternalDataSourceSerializers';
import type { TableFormatEnum } from './TableFormatEnum';
import type { UserBasic } from './UserBasic';
export type PatchedTable = {
    readonly id?: string;
    deleted?: boolean | null;
    name?: string;
    format?: TableFormatEnum;
    readonly created_by?: UserBasic;
    readonly created_at?: string;
    url_pattern?: string;
    credential?: Credential;
    readonly columns?: string;
    readonly external_data_source?: SimpleExternalDataSourceSerializers;
    readonly external_schema?: string;
};

