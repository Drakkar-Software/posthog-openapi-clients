/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionMessageRoleEnum } from './ChatCompletionMessageRoleEnum';
export type ChatCompletionMessage = {
    role: ChatCompletionMessageRoleEnum;
    content?: string | null;
    name?: string;
    function_call?: any;
    tool_calls?: Array<any>;
};

