/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnthropicUsageServiceTierEnum } from './AnthropicUsageServiceTierEnum';
import type { NullEnum } from './NullEnum';
export type AnthropicUsage = {
    input_tokens: number;
    output_tokens: number;
    cache_creation_input_tokens?: number | null;
    cache_read_input_tokens?: number | null;
    server_tool_use?: any;
    service_tier?: (AnthropicUsageServiceTierEnum | NullEnum) | null;
};

