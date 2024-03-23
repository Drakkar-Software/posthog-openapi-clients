/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseMathType } from './BaseMathType';
import type { CountPerActorMathType } from './CountPerActorMathType';
import type { MathGroupTypeIndex } from './MathGroupTypeIndex';
import type { PropertyMathType } from './PropertyMathType';
import type { Response } from './Response';
export type FunnelExclusionEventsNode = {
    custom_name?: (string | null);
    /**
     * The event or `null` for all events.
     */
    event?: (string | null);
    /**
     * Fixed properties in the query, can't be edited in the interface (e.g. scoping down by person)
     */
    fixedProperties?: null;
    funnelFromStep: number;
    funnelToStep: number;
    kind?: any;
    limit?: (number | null);
    math?: (BaseMathType | PropertyMathType | CountPerActorMathType | null);
    math_group_type_index?: (MathGroupTypeIndex | null);
    math_hogql?: (string | null);
    math_property?: (string | null);
    name?: (string | null);
    /**
     * Columns to order by
     */
    orderBy?: (Array<string> | null);
    /**
     * Properties configurable in the interface
     */
    properties?: null;
    /**
     * Return a limited set of data
     */
    response?: (Response | null);
};

