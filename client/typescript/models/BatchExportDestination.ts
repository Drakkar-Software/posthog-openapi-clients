/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Serializer for an BatchExportDestination model.
 */
export type BatchExportDestination = {
    /**
     * A choice of supported BatchExportDestination types.
     *
     * * `S3` - S3
     * * `Snowflake` - Snowflake
     * * `Postgres` - Postgres
     * * `Redshift` - Redshift
     * * `BigQuery` - Bigquery
     * * `NoOp` - Noop
     */
    type: BatchExportDestination.type;
    /**
     * A JSON field to store all configuration parameters required to access a BatchExportDestination.
     */
    config?: any;
};
export namespace BatchExportDestination {
    /**
     * A choice of supported BatchExportDestination types.
     *
     * * `S3` - S3
     * * `Snowflake` - Snowflake
     * * `Postgres` - Postgres
     * * `Redshift` - Redshift
     * * `BigQuery` - Bigquery
     * * `NoOp` - Noop
     */
    export enum type {
        S3 = 'S3',
        SNOWFLAKE = 'Snowflake',
        POSTGRES = 'Postgres',
        REDSHIFT = 'Redshift',
        BIG_QUERY = 'BigQuery',
        NO_OP = 'NoOp',
    }
}

