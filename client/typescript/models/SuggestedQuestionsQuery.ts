/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { QueryLogTags } from './QueryLogTags';
import type { SuggestedQuestionsQueryResponse } from './SuggestedQuestionsQueryResponse';
export type SuggestedQuestionsQuery = {
    kind?: SuggestedQuestionsQuery.kind;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    response?: SuggestedQuestionsQueryResponse | null;
    tags?: QueryLogTags | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace SuggestedQuestionsQuery {
    export enum kind {
        SUGGESTED_QUESTIONS_QUERY = 'SuggestedQuestionsQuery',
    }
}

