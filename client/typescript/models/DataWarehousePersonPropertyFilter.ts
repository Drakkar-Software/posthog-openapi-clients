/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertyOperator } from './PropertyOperator';
export type DataWarehousePersonPropertyFilter = {
    key: string;
    label?: string | null;
    operator: PropertyOperator;
    type?: DataWarehousePersonPropertyFilter.type;
    value?: (string | number | boolean) | null;
};
export namespace DataWarehousePersonPropertyFilter {
    export enum type {
        DATA_WAREHOUSE_PERSON_PROPERTY = 'data_warehouse_person_property',
    }
}

