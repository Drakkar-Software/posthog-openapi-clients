/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionChoice } from './ChatCompletionChoice';
import type { ChatCompletionResponseServiceTierEnum } from './ChatCompletionResponseServiceTierEnum';
import type { ChatCompletionUsage } from './ChatCompletionUsage';
import type { NullEnum } from './NullEnum';
import type { ObjectEnum } from './ObjectEnum';
export type ChatCompletionResponse = {
    id: string;
    object: ObjectEnum;
    created: number;
    model: string;
    choices: Array<ChatCompletionChoice>;
    usage?: ChatCompletionUsage | null;
    system_fingerprint?: string | null;
    service_tier?: (ChatCompletionResponseServiceTierEnum | NullEnum) | null;
};

