/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutocompleteCompletionItem } from './AutocompleteCompletionItem';
import type { QueryTiming } from './QueryTiming';
export type QueryResponseAlternative8 = {
    /**
     * Whether or not the suggestions returned are complete
     */
    incomplete_list: boolean;
    suggestions: Array<AutocompleteCompletionItem>;
    /**
     * Measured timings for different parts of the query generation process
     */
    timings?: (Array<QueryTiming> | null);
};

