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
     */
    type: BatchExportDestination.type;
    /**
     * A JSON field to store all configuration parameters required to access a BatchExportDestination.
     */
    config?: Record<string, any>;
};

export namespace BatchExportDestination {

    /**
     * A choice of supported BatchExportDestination types.
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

