/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputsSchemaItemTemplatingEnum } from './InputsSchemaItemTemplatingEnum';
import type { InputsSchemaItemTypeEnum } from './InputsSchemaItemTypeEnum';
export type InputsSchemaItem = {
    type: InputsSchemaItemTypeEnum;
    key: string;
    label?: string;
    choices?: Array<Record<string, any>>;
    required?: boolean;
    default?: any;
    secret?: boolean;
    hidden?: boolean;
    description?: string;
    integration?: string;
    integration_key?: string;
    requires_field?: string;
    integration_field?: string;
    requiredScopes?: string;
    templating?: InputsSchemaItemTemplatingEnum;
};

