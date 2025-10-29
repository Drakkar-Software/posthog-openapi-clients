/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { NullEnum } from './NullEnum';
import type { PropertyTypeEnum } from './PropertyTypeEnum';
/**
 * Serializer mixin that resolves appropriate response for tags depending on license.
 */
export type PropertyDefinition = {
    readonly id: string;
    name: string;
    is_numerical?: boolean;
    property_type?: (PropertyTypeEnum | BlankEnum | NullEnum) | null;
    tags?: Array<any>;
    readonly is_seen_on_filtered_events: string;
};

