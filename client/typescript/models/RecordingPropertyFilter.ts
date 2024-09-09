/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DurationType } from './DurationType';
import type { PropertyOperator } from './PropertyOperator';
export type RecordingPropertyFilter = {
    key: (DurationType | string);
    label?: (string | null);
    operator: PropertyOperator;
    type?: any;
    value?: (string | number | null);
};

