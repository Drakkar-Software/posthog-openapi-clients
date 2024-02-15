/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SimpleExternalDataSourceSerializers = {
    readonly id: string;
    readonly created_at: string;
    readonly created_by: number | null;
    readonly status: string;
    /**
     * * `Stripe` - Stripe
     * * `Hubspot` - Hubspot
     * * `Postgres` - Postgres
     */
    readonly source_type: SimpleExternalDataSourceSerializers.source_type;
};
export namespace SimpleExternalDataSourceSerializers {
    /**
     * * `Stripe` - Stripe
     * * `Hubspot` - Hubspot
     * * `Postgres` - Postgres
     */
    export enum source_type {
        STRIPE = 'Stripe',
        HUBSPOT = 'Hubspot',
        POSTGRES = 'Postgres',
    }
}

