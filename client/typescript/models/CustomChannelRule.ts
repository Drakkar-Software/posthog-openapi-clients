/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomChannelCondition } from './CustomChannelCondition';
import type { FilterLogicalOperator } from './FilterLogicalOperator';
export type CustomChannelRule = {
    channel_type: string;
    combiner: FilterLogicalOperator;
    id: string;
    items: Array<CustomChannelCondition>;
};

