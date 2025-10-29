/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { ExperimentExposureTimeSeries } from './ExperimentExposureTimeSeries';
export type QueryResponseAlternative19 = {
    date_range: DateRange;
    kind?: QueryResponseAlternative19.kind;
    timeseries: Array<ExperimentExposureTimeSeries>;
    total_exposures: Record<string, number>;
};
export namespace QueryResponseAlternative19 {
    export enum kind {
        EXPERIMENT_EXPOSURE_QUERY = 'ExperimentExposureQuery',
    }
}

