/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EffectiveMembershipLevelEnum } from './EffectiveMembershipLevelEnum';
/**
 * Serializer for `Organization` model with minimal attributes to speeed up loading and transfer times.
 * Also used for nested serializers.
 */
export type OrganizationBasic = {
    readonly id: string;
    name: string;
    slug: string;
    readonly logo_media_id: string | null;
    readonly membership_level: EffectiveMembershipLevelEnum | null;
};

