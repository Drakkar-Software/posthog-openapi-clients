/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionStepJSON } from './ActionStepJSON';
import type { UserBasic } from './UserBasic';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type PatchedAction = {
    readonly id?: number;
    name?: string | null;
    description?: string;
    tags?: Array<any>;
    post_to_slack?: boolean;
    slack_message_format?: string;
    steps?: Array<ActionStepJSON>;
    readonly created_at?: string;
    readonly created_by?: UserBasic;
    deleted?: boolean;
    readonly is_calculating?: boolean;
    last_calculated_at?: string;
    readonly team_id?: number;
    readonly is_action?: boolean;
    readonly bytecode_error?: string | null;
    pinned_at?: string | null;
    readonly creation_context?: string;
    _create_in_folder?: string;
    /**
     * The effective access level the user has for this object
     */
    readonly user_access_level?: string | null;
};

