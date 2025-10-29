/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LLMTraceEvent } from './LLMTraceEvent';
import type { LLMTracePerson } from './LLMTracePerson';
export type LLMTrace = {
    aiSessionId?: string | null;
    createdAt: string;
    events: Array<LLMTraceEvent>;
    id: string;
    inputCost?: number | null;
    inputState?: any;
    inputTokens?: number | null;
    outputCost?: number | null;
    outputState?: any;
    outputTokens?: number | null;
    person: LLMTracePerson;
    totalCost?: number | null;
    totalLatency?: number | null;
    traceName?: string | null;
};

