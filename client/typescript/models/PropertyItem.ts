/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { NullEnum } from './NullEnum';
import type { OperatorEnum } from './OperatorEnum';
import type { PropertyItemTypeEnum } from './PropertyItemTypeEnum';
export type PropertyItem = {
    /**
     * Key of the property you're filtering on. For example `email` or `$current_url`
     */
    key: string;
    /**
     * Value of your filter. For example `test@example.com` or `https://example.com/test/`. Can be an array for an OR query, like `["test@example.com","ok@example.com"]`
     */
    value: string;
    operator?: (OperatorEnum | BlankEnum | NullEnum) | null;
    type?: (PropertyItemTypeEnum | BlankEnum);
};

