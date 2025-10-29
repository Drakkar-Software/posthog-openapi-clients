/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { ExperimentExposureTimeSeries } from './ExperimentExposureTimeSeries';
export type ExperimentExposureQueryResponse = {
    date_range: DateRange;
    kind?: ExperimentExposureQueryResponse.kind;
    timeseries: Array<ExperimentExposureTimeSeries>;
    total_exposures: Record<string, number>;
};
export namespace ExperimentExposureQueryResponse {
    export enum kind {
        EXPERIMENT_EXPOSURE_QUERY = 'ExperimentExposureQuery',
    }
}

