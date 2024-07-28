/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Kind } from './Kind';
export type AutocompleteCompletionItem = {
    /**
     * A human-readable string with additional information about this item, like type or symbol information.
     */
    detail?: (string | null);
    /**
     * A human-readable string that represents a doc-comment.
     */
    documentation?: (string | null);
    /**
     * A string or snippet that should be inserted in a document when selecting this completion.
     */
    insertText: string;
    /**
     * The kind of this completion item. Based on the kind an icon is chosen by the editor.
     */
    kind: Kind;
    /**
     * The label of this completion item. By default this is also the text that is inserted when selecting this completion.
     */
    label: string;
};

