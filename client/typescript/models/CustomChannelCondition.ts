/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomChannelField } from './CustomChannelField';
import type { CustomChannelOperator } from './CustomChannelOperator';
export type CustomChannelCondition = {
    id: string;
    key: CustomChannelField;
    op: CustomChannelOperator;
    value?: (string | Array<string>) | null;
};

