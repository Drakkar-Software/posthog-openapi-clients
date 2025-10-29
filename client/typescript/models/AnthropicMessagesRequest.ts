/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnthropicMessagesRequestServiceTierEnum } from './AnthropicMessagesRequestServiceTierEnum';
export type AnthropicMessagesRequest = {
    /**
     * The model to use for completion (e.g., 'claude-3-5-sonnet-20241022')
     */
    model: string;
    /**
     * List of message objects with 'role' and 'content'
     */
    messages: Array<Record<string, any>>;
    /**
     * Maximum number of tokens to generate
     */
    max_tokens?: number;
    /**
     * Sampling temperature between 0 and 1
     */
    temperature?: number;
    /**
     * Nucleus sampling parameter
     */
    top_p?: number;
    /**
     * Top-k sampling parameter
     */
    top_k?: number;
    /**
     * Whether to stream the response
     */
    stream?: boolean;
    /**
     * Custom stop sequences
     */
    stop_sequences?: Array<string>;
    /**
     * System prompt (string or array of content blocks)
     */
    system?: any;
    /**
     * Metadata to attach to the request
     */
    metadata?: any;
    /**
     * Thinking configuration for extended thinking
     */
    thinking?: any;
    /**
     * List of tools available to the model
     */
    tools?: Array<any>;
    /**
     * Controls which tool is called
     */
    tool_choice?: any;
    /**
     * Service tier for the request
     *
     * * `auto` - auto
     * * `standard_only` - standard_only
     */
    service_tier?: AnthropicMessagesRequestServiceTierEnum;
};

