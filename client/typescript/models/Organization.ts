/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Organization = {
    readonly id: string;
    name: string;
    readonly slug: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly membership_level: Organization.membership_level | null;
    /**
     * * `0` - none
     * * `3` - config
     * * `6` - install
     * * `9` - root
     */
    readonly plugins_access_level: Organization.plugins_access_level;
    readonly teams: Array<Record<string, any>>;
    readonly available_features: Array<string>;
    readonly available_product_features: Array<any> | null;
    is_member_join_email_enabled?: boolean;
    readonly metadata: string;
    readonly customer_id: string | null;
    enforce_2fa?: boolean | null;
};
export namespace Organization {
    export enum membership_level {
        '_1' = 1,
        '_8' = 8,
        '_15' = 15,
    }
    /**
     * * `0` - none
     * * `3` - config
     * * `6` - install
     * * `9` - root
     */
    export enum plugins_access_level {
        '_0' = 0,
        '_3' = 3,
        '_6' = 6,
        '_9' = 9,
    }
}

