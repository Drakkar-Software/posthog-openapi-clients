/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
/**
 * Standard Integration serializer.
 */
export type Integration = {
    readonly id: number;
    /**
     * * `slack` - Slack
     */
    kind: Integration.kind;
    config?: any;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly errors: string;
};
export namespace Integration {
    /**
     * * `slack` - Slack
     */
    export enum kind {
        SLACK = 'slack',
    }
}

