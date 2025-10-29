/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnthropicMessagesRequest } from '../models/AnthropicMessagesRequest';
import type { AnthropicMessagesResponse } from '../models/AnthropicMessagesResponse';
import type { ChatCompletionRequest } from '../models/ChatCompletionRequest';
import type { ChatCompletionResponse } from '../models/ChatCompletionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LlmGatewayService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * OpenAI Chat Completions API
     * Create a chat completion using OpenAI or compatible models. Follows OpenAI's Chat Completions API format.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @param format
     * @returns ChatCompletionResponse Successful response with chat completion
     * @throws ApiError
     */
    public llmGatewayV1ChatCompletionsCreate(
        projectId: string,
        requestBody: ChatCompletionRequest,
        format?: 'json' | 'txt',
    ): CancelablePromise<ChatCompletionResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/llm_gateway/v1/chat/completions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request parameters`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * OpenAI Chat Completions API
     * Create a chat completion using OpenAI or compatible models. Follows OpenAI's Chat Completions API format.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @param format
     * @returns ChatCompletionResponse Successful response with chat completion
     * @throws ApiError
     */
    public llmGatewayV1ChatCompletionsCreate1(
        projectId: string,
        requestBody: ChatCompletionRequest,
        format?: 'json' | 'txt',
    ): CancelablePromise<ChatCompletionResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/llm_gateway/v1/chat/completions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request parameters`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Anthropic Messages API
     * Create a message using Anthropic's Claude models. Compatible with Anthropic's Messages API format.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @param format
     * @returns AnthropicMessagesResponse Successful response with generated message
     * @throws ApiError
     */
    public llmGatewayV1MessagesCreate(
        projectId: string,
        requestBody: AnthropicMessagesRequest,
        format?: 'json' | 'txt',
    ): CancelablePromise<AnthropicMessagesResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/llm_gateway/v1/messages/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request parameters`,
                500: `Internal server error`,
            },
        });
    }
    /**
     * Anthropic Messages API
     * Create a message using Anthropic's Claude models. Compatible with Anthropic's Messages API format.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @param format
     * @returns AnthropicMessagesResponse Successful response with generated message
     * @throws ApiError
     */
    public llmGatewayV1MessagesCreate1(
        projectId: string,
        requestBody: AnthropicMessagesRequest,
        format?: 'json' | 'txt',
    ): CancelablePromise<AnthropicMessagesResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/llm_gateway/v1/messages/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid request parameters`,
                500: `Internal server error`,
            },
        });
    }
}
