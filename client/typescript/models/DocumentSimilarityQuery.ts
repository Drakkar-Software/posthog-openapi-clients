/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DateRange } from './DateRange';
import type { DistanceFunc } from './DistanceFunc';
import type { DocumentSimilarityQueryResponse } from './DocumentSimilarityQueryResponse';
import type { EmbeddedDocument } from './EmbeddedDocument';
import type { HogQLQueryModifiers } from './HogQLQueryModifiers';
import type { OrderBy } from './OrderBy';
import type { OrderDirection } from './OrderDirection';
import type { QueryLogTags } from './QueryLogTags';
export type DocumentSimilarityQuery = {
    dateRange: DateRange;
    distance_func: DistanceFunc;
    document_types: Array<string>;
    kind?: DocumentSimilarityQuery.kind;
    limit?: number | null;
    model: string;
    /**
     * Modifiers used when performing the query
     */
    modifiers?: HogQLQueryModifiers | null;
    offset?: number | null;
    order_by: OrderBy;
    order_direction: OrderDirection;
    origin: EmbeddedDocument;
    products: Array<string>;
    renderings: Array<string>;
    response?: DocumentSimilarityQueryResponse | null;
    tags?: QueryLogTags | null;
    threshold?: number | null;
    /**
     * version of the node, used for schema migrations
     */
    version?: number | null;
};
export namespace DocumentSimilarityQuery {
    export enum kind {
        DOCUMENT_SIMILARITY_QUERY = 'DocumentSimilarityQuery',
    }
}

