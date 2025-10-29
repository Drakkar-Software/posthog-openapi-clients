/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogFunctionMappingTemplate } from './HogFunctionMappingTemplate';
export type HogFunctionTemplate = {
    id: string;
    name: string;
    description?: string | null;
    code: string;
    code_language?: string;
    inputs_schema: any;
    type: string;
    status?: string;
    category?: any;
    free?: boolean;
    icon_url?: string | null;
    filters?: any;
    masking?: any;
    mapping_templates?: Array<HogFunctionMappingTemplate> | null;
};

