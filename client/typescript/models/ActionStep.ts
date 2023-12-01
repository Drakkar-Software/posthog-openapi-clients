/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActionStep = {
    id?: string;
    event?: string | null;
    tag_name?: string | null;
    text?: string | null;
    text_matching?: ActionStep.text_matching | null;
    href?: string | null;
    href_matching?: ActionStep.href_matching | null;
    selector?: string | null;
    url?: string | null;
    name?: string | null;
    url_matching?: ActionStep.url_matching | null;
    properties?: Record<string, any> | null;
};

export namespace ActionStep {

    export enum text_matching {
        CONTAINS = 'contains',
        REGEX = 'regex',
        EXACT = 'exact',
        
    }

    export enum href_matching {
        CONTAINS = 'contains',
        REGEX = 'regex',
        EXACT = 'exact',
        
    }

    export enum url_matching {
        CONTAINS = 'contains',
        REGEX = 'regex',
        EXACT = 'exact',
        
    }


}

