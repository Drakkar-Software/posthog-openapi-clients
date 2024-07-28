/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NullEnum } from './NullEnum';
import type { UrlMatchingEnum } from './UrlMatchingEnum';
export type ActionStepJSON = {
    event?: string | null;
    properties?: Array<Record<string, any>> | null;
    selector?: string | null;
    tag_name?: string | null;
    text?: string | null;
    text_matching?: (UrlMatchingEnum | NullEnum) | null;
    href?: string | null;
    href_matching?: (UrlMatchingEnum | NullEnum) | null;
    url?: string | null;
    url_matching?: (UrlMatchingEnum | NullEnum) | null;
};

