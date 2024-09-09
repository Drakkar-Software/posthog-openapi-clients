/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLNotice } from './HogQLNotice';
export type HogQLMetadataResponse = {
    errors: Array<HogQLNotice>;
    isValid?: (boolean | null);
    isValidView?: (boolean | null);
    notices: Array<HogQLNotice>;
    query?: (string | null);
    warnings: Array<HogQLNotice>;
};

