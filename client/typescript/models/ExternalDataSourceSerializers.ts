/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ExternalDataSourceSerializers = {
    readonly id: string;
    readonly created_at: string;
    readonly created_by: number | null;
    readonly status: string;
    client_secret: string;
    account_id: string;
    /**
     * * `Stripe` - Stripe
     * * `Hubspot` - Hubspot
     * * `Postgres` - Postgres
     */
    readonly source_type: ExternalDataSourceSerializers.source_type;
    prefix?: string | null;
    readonly last_run_at: string;
    readonly schemas: string;
};
export namespace ExternalDataSourceSerializers {
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

