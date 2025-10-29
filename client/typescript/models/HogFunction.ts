/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogFunctionFilters } from './HogFunctionFilters';
import type { HogFunctionMasking } from './HogFunctionMasking';
import type { HogFunctionStatus } from './HogFunctionStatus';
import type { HogFunctionTemplate } from './HogFunctionTemplate';
import type { HogFunctionTypeEnum } from './HogFunctionTypeEnum';
import type { InputsItem } from './InputsItem';
import type { InputsSchemaItem } from './InputsSchemaItem';
import type { Mappings } from './Mappings';
import type { NullEnum } from './NullEnum';
import type { UserBasic } from './UserBasic';
export type HogFunction = {
    readonly id: string;
    type?: (HogFunctionTypeEnum | NullEnum) | null;
    name?: string | null;
    description?: string;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly updated_at: string;
    enabled?: boolean;
    deleted?: boolean;
    hog?: string;
    readonly bytecode: any;
    readonly transpiled: string | null;
    inputs_schema?: Array<InputsSchemaItem>;
    inputs?: Record<string, InputsItem>;
    filters?: HogFunctionFilters;
    masking?: HogFunctionMasking | null;
    mappings?: Array<Mappings> | null;
    icon_url?: string | null;
    readonly template: HogFunctionTemplate;
    template_id?: string | null;
    readonly status: HogFunctionStatus | null;
    execution_order?: number | null;
    _create_in_folder?: string;
};

