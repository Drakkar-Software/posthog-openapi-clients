/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLAutocompleteResponse } from './HogQLAutocompleteResponse';
import type { HogQLFilters } from './HogQLFilters';
export type HogQLAutocomplete = {
    /**
     * End position of the editor word
     */
    endPosition: number;
    /**
     * Table to validate the expression against
     */
    filters?: (HogQLFilters | null);
    kind?: any;
    /**
     * Cached query response
     */
    response?: (HogQLAutocompleteResponse | null);
    /**
     * Full select query to validate
     */
    select: string;
    /**
     * Start position of the editor word
     */
    startPosition: number;
};

