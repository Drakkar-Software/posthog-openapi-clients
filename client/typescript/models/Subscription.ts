/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserBasic } from './UserBasic';
/**
 * Standard Subscription serializer.
 */
export type Subscription = {
    readonly id: number;
    dashboard?: number | null;
    insight?: number | null;
    /**
     * * `email` - Email
     * * `slack` - Slack
     * * `webhook` - Webhook
     */
    target_type: Subscription.target_type;
    target_value: string;
    /**
     * * `daily` - Daily
     * * `weekly` - Weekly
     * * `monthly` - Monthly
     * * `yearly` - Yearly
     */
    frequency: Subscription.frequency;
    interval?: number;
    byweekday?: Array<'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'> | null;
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
export namespace Subscription {
    /**
     * * `email` - Email
     * * `slack` - Slack
     * * `webhook` - Webhook
     */
    export enum target_type {
        EMAIL = 'email',
        SLACK = 'slack',
        WEBHOOK = 'webhook',
    }
    /**
     * * `daily` - Daily
     * * `weekly` - Weekly
     * * `monthly` - Monthly
     * * `yearly` - Yearly
     */
    export enum frequency {
        DAILY = 'daily',
        WEEKLY = 'weekly',
        MONTHLY = 'monthly',
        YEARLY = 'yearly',
    }
}

