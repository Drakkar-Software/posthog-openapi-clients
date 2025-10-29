/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnthropicMessagesResponseRoleEnum } from './AnthropicMessagesResponseRoleEnum';
import type { AnthropicMessagesResponseTypeEnum } from './AnthropicMessagesResponseTypeEnum';
import type { AnthropicUsage } from './AnthropicUsage';
import type { NullEnum } from './NullEnum';
import type { StopReasonEnum } from './StopReasonEnum';
export type AnthropicMessagesResponse = {
    id: string;
    type: AnthropicMessagesResponseTypeEnum;
    role: AnthropicMessagesResponseRoleEnum;
    content: Array<Record<string, any>>;
    model: string;
    stop_reason: (StopReasonEnum | NullEnum) | null;
    stop_sequence?: string | null;
    usage: AnthropicUsage;
};

