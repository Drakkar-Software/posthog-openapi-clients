/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PathCleaningFilter } from './PathCleaningFilter';
import type { PathType } from './PathType';
export type PathsFilter = {
    edgeLimit?: (number | null);
    endPoint?: (string | null);
    excludeEvents?: (Array<string> | null);
    includeEventTypes?: (Array<PathType> | null);
    localPathCleaningFilters?: (Array<PathCleaningFilter> | null);
    maxEdgeWeight?: (number | null);
    minEdgeWeight?: (number | null);
    /**
     * Relevant only within actors query
     */
    pathDropoffKey?: (string | null);
    /**
     * Relevant only within actors query
     */
    pathEndKey?: (string | null);
    pathGroupings?: (Array<string> | null);
    pathReplacements?: (boolean | null);
    /**
     * Relevant only within actors query
     */
    pathStartKey?: (string | null);
    pathsHogQLExpression?: (string | null);
    startPoint?: (string | null);
    stepLimit?: (number | null);
};

