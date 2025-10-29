/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExportDestinationTypeEnum } from './BatchExportDestinationTypeEnum';
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
     * * `Databricks` - Databricks
     * * `HTTP` - Http
     * * `NoOp` - Noop
     */
    type: BatchExportDestinationTypeEnum;
    /**
     * A JSON field to store all configuration parameters required to access a BatchExportDestination.
     */
    config?: any;
    /**
     * The integration for this destination.
     */
    integration?: number | null;
    integration_id?: number | null;
};

