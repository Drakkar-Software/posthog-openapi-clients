/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { EvaluationRuntimeEnum } from './EvaluationRuntimeEnum';
import type { NullEnum } from './NullEnum';
export type MinimalFeatureFlag = {
    readonly id: number;
    readonly team_id: number;
    name?: string;
    key: string;
    filters?: Record<string, any>;
    deleted?: boolean;
    active?: boolean;
    ensure_experience_continuity?: boolean | null;
    has_encrypted_payloads?: boolean | null;
    version?: number | null;
    /**
     * Specifies where this feature flag should be evaluated
     *
     * * `server` - Server
     * * `client` - Client
     * * `all` - All
     */
    evaluation_runtime?: (EvaluationRuntimeEnum | BlankEnum | NullEnum) | null;
    readonly evaluation_tags: Array<string>;
};

