/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type DataWarehousePropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: DataWarehousePropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace DataWarehousePropertyFilter {
    export enum type {
        DATA_WAREHOUSE = 'data_warehouse',
    }
}

