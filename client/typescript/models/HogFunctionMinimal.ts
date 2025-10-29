/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogFunctionStatus } from './HogFunctionStatus';
import type { HogFunctionTemplate } from './HogFunctionTemplate';
import type { UserBasic } from './UserBasic';
export type HogFunctionMinimal = {
    readonly id: string;
    readonly type: string | null;
    readonly name: string | null;
    readonly description: string;
    readonly created_at: string;
    readonly created_by: UserBasic;
    readonly updated_at: string;
    readonly enabled: boolean;
    readonly hog: string;
    readonly filters: any;
    readonly icon_url: string | null;
    readonly template: HogFunctionTemplate;
    readonly status: HogFunctionStatus | null;
    readonly execution_order: number | null;
};

