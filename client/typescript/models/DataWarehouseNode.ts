/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseMathType } from './BaseMathType';
import type { CountPerActorMathType } from './CountPerActorMathType';
import type { MathGroupTypeIndex } from './MathGroupTypeIndex';
import type { PropertyMathType } from './PropertyMathType';
export type DataWarehouseNode = {
    custom_name?: (string | null);
    distinct_id_field: string;
    /**
     * Fixed properties in the query, can't be edited in the interface (e.g. scoping down by person)
     */
    fixedProperties?: null;
    id: string;
    id_field: string;
    kind?: any;
    math?: (BaseMathType | PropertyMathType | CountPerActorMathType | null);
    math_group_type_index?: (MathGroupTypeIndex | null);
    math_hogql?: (string | null);
    math_property?: (string | null);
    name?: (string | null);
    /**
     * Properties configurable in the interface
     */
    properties?: null;
    response?: (Record<string, any> | null);
    table_name: string;
    timestamp_field: string;
};

