/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AIEventType } from './AIEventType';
export type LLMTraceEvent = {
    createdAt: string;
    event: (AIEventType | string);
    id: string;
    properties: Record<string, any>;
};

