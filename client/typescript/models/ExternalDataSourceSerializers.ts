/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExternalDataSourceSerializers = {
    readonly id: string;
    readonly source_id: string;
    readonly created_at: string;
    readonly created_by: number | null;
    readonly status: string;
    client_secret: string;
    account_id: string;
    readonly source_type: ExternalDataSourceSerializers.source_type;
    prefix?: string | null;
};

export namespace ExternalDataSourceSerializers {

    export enum source_type {
        STRIPE = 'Stripe',
    }


}

