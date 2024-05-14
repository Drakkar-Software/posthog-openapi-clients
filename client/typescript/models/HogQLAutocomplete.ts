/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLAutocompleteResponse } from './HogQLAutocompleteResponse';
import type { HogQLFilters } from './HogQLFilters';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
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
     * Modifiers used when performing the query
     */
    modifiers?: (HogQLQueryModifiers | null);
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

