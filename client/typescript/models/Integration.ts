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
    kind: Integration.kind;
    config?: Record<string, any>;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly errors: string;
};

export namespace Integration {

    export enum kind {
        SLACK = 'slack',
    }


}

