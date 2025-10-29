/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLNotice } from './HogQLNotice';
import type { QueryIndexUsage } from './QueryIndexUsage';
export type QueryResponseAlternative8 = {
    ch_table_names?: Array<string> | null;
    errors: Array<HogQLNotice>;
    isUsingIndices?: QueryIndexUsage | null;
    isValid?: boolean | null;
    notices: Array<HogQLNotice>;
    query?: string | null;
    table_names?: Array<string> | null;
    warnings: Array<HogQLNotice>;
};

