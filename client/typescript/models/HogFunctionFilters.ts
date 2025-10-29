/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogFunctionFiltersSourceEnum } from './HogFunctionFiltersSourceEnum';
export type HogFunctionFilters = {
    source?: HogFunctionFiltersSourceEnum;
    actions?: Array<Record<string, any>>;
    events?: Array<Record<string, any>>;
    properties?: Array<Record<string, any>>;
    bytecode?: any;
    transpiled?: any;
    filter_test_accounts?: boolean;
    bytecode_error?: string;
};

