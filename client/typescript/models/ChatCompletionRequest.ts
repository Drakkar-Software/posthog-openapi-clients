/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModalitiesEnum } from './ModalitiesEnum';
import type { ReasoningEffortEnum } from './ReasoningEffortEnum';
import type { VerbosityEnum } from './VerbosityEnum';
export type ChatCompletionRequest = {
    /**
     * The model to use for completion (e.g., 'gpt-4', 'gpt-3.5-turbo')
     */
    model: string;
    /**
     * List of message objects with 'role' and 'content'
     */
    messages: Array<Record<string, any>>;
    /**
     * Sampling temperature between 0 and 2
     */
    temperature?: number;
    /**
     * Nucleus sampling parameter
     */
    top_p?: number;
    /**
     * Number of completions to generate
     */
    'n'?: number;
    /**
     * Whether to stream the response
     */
    stream?: boolean;
    /**
     * Additional options for streaming
     */
    stream_options?: any;
    /**
     * Stop sequences
     */
    stop?: Array<string>;
    /**
     * Maximum number of tokens to generate
     */
    max_tokens?: number;
    /**
     * Maximum number of completion tokens (alternative to max_tokens)
     */
    max_completion_tokens?: number;
    /**
     * Presence penalty between -2.0 and 2.0
     */
    presence_penalty?: number;
    /**
     * Frequency penalty between -2.0 and 2.0
     */
    frequency_penalty?: number;
    /**
     * Logit bias mapping
     */
    logit_bias?: any;
    /**
     * Unique user identifier
     */
    user?: string;
    /**
     * List of tools available to the model
     */
    tools?: Array<any>;
    /**
     * Controls which tool is called
     */
    tool_choice?: any;
    /**
     * Whether to allow parallel tool calls
     */
    parallel_tool_calls?: boolean;
    /**
     * Format for the model output
     */
    response_format?: any;
    /**
     * Random seed for deterministic sampling
     */
    seed?: number;
    /**
     * Whether to return log probabilities
     */
    logprobs?: boolean;
    /**
     * Number of most likely tokens to return at each position
     */
    top_logprobs?: number;
    /**
     * Output modalities
     */
    modalities?: Array<ModalitiesEnum>;
    /**
     * Prediction content for speculative decoding
     */
    prediction?: any;
    /**
     * Audio input parameters
     */
    audio?: any;
    /**
     * Reasoning effort level for o-series models
     *
     * * `none` - none
     * * `minimal` - minimal
     * * `low` - low
     * * `medium` - medium
     * * `high` - high
     * * `default` - default
     */
    reasoning_effort?: ReasoningEffortEnum;
    /**
     * Controls the verbosity level of the model's output
     *
     * * `concise` - concise
     * * `standard` - standard
     * * `verbose` - verbose
     */
    verbosity?: VerbosityEnum;
    /**
     * Whether to store the output for model distillation or evals
     */
    store?: boolean;
    /**
     * Web search tool configuration
     */
    web_search_options?: any;
    /**
     * Deprecated in favor of tools. List of functions the model may call
     */
    functions?: Array<any>;
    /**
     * Deprecated in favor of tool_choice. Controls which function is called
     */
    function_call?: any;
};

