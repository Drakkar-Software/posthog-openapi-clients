/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BlankEnum } from './BlankEnum';
import type { NullEnum } from './NullEnum';
import type { UrlMatchingEnum } from './UrlMatchingEnum';
export type ActionStep = {
    id?: string;
    event?: string | null;
    tag_name?: string | null;
    text?: string | null;
    text_matching?: (UrlMatchingEnum | BlankEnum | NullEnum) | null;
    href?: string | null;
    href_matching?: (UrlMatchingEnum | BlankEnum | NullEnum) | null;
    selector?: string | null;
    url?: string | null;
    name?: string | null;
    url_matching?: (UrlMatchingEnum | BlankEnum | NullEnum) | null;
    properties?: any;
};

