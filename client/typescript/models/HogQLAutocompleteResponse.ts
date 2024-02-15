/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutocompleteCompletionItem } from './AutocompleteCompletionItem';
export type HogQLAutocompleteResponse = {
    /**
     * Whether or not the suggestions returned are complete
     */
    incomplete_list: boolean;
    suggestions: Array<AutocompleteCompletionItem>;
};

