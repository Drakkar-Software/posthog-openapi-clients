/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ByweekdayEnum } from './ByweekdayEnum';
import type { FrequencyEnum } from './FrequencyEnum';
import type { TargetTypeEnum } from './TargetTypeEnum';
import type { UserBasic } from './UserBasic';
/**
 * Standard Subscription serializer.
 */
export type Subscription = {
    readonly id: number;
    dashboard?: number | null;
    insight?: number | null;
    target_type: TargetTypeEnum;
    target_value: string;
    frequency: FrequencyEnum;
    interval?: number;
    byweekday?: Array<ByweekdayEnum> | null;
    bysetpos?: number | null;
    count?: number | null;
    start_date: string;
    until_date?: string | null;
    readonly created_at: string;
    readonly created_by: UserBasic;
    deleted?: boolean;
    title?: string | null;
    readonly summary: string;
    readonly next_delivery_date: string | null;
    invite_message?: string | null;
};

