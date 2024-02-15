/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ActionStep = {
    id?: string;
    event?: string | null;
    tag_name?: string | null;
    text?: string | null;
    /**
     * * `contains` - contains
     * * `regex` - regex
     * * `exact` - exact
     */
    text_matching?: ActionStep.text_matching | null;
    href?: string | null;
    /**
     * * `contains` - contains
     * * `regex` - regex
     * * `exact` - exact
     */
    href_matching?: ActionStep.href_matching | null;
    selector?: string | null;
    url?: string | null;
    name?: string | null;
    /**
     * * `contains` - contains
     * * `regex` - regex
     * * `exact` - exact
     */
    url_matching?: ActionStep.url_matching | null;
    properties?: any;
};
export namespace ActionStep {
    /**
     * * `contains` - contains
     * * `regex` - regex
     * * `exact` - exact
     */
    export enum text_matching {
        CONTAINS = 'contains',
        REGEX = 'regex',
        EXACT = 'exact',
    }
    /**
     * * `contains` - contains
     * * `regex` - regex
     * * `exact` - exact
     */
    export enum href_matching {
        CONTAINS = 'contains',
        REGEX = 'regex',
        EXACT = 'exact',
    }
    /**
     * * `contains` - contains
     * * `regex` - regex
     * * `exact` - exact
     */
    export enum url_matching {
        CONTAINS = 'contains',
        REGEX = 'regex',
        EXACT = 'exact',
    }
}

