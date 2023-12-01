/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PatchedExternalDataSourceSerializers = {
    readonly id?: string;
    readonly source_id?: string;
    readonly created_at?: string;
    readonly created_by?: number | null;
    readonly status?: string;
    client_secret?: string;
    account_id?: string;
    readonly source_type?: PatchedExternalDataSourceSerializers.source_type;
    prefix?: string | null;
};

export namespace PatchedExternalDataSourceSerializers {

    export enum source_type {
        STRIPE = 'Stripe',
    }


}

