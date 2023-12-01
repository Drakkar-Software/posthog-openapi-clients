/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QueryService {

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param async (Experimental) Whether to run the query asynchronously. Defaults to False. If True, the `id` of the query can be used to check the status and to cancel it.
     * @param clientQueryId Client provided query ID. Can be used to retrieve the status or cancel the query.
     * @param query Submit a JSON string representing a query for PostHog data analysis, for example a HogQL query.
     *
     * Example payload:
     * ```
     * {"query": {"kind": "HogQLQuery", "query": "select * from events limit 100"}}
     * ```
     *
     * For more details on HogQL queries, see the [PostHog HogQL documentation](/docs/hogql#api-access).
     * @returns any Query results
     * @throws ApiError
     */
    public static queryCreate(
        projectId: string,
        async?: boolean,
        clientQueryId?: string,
        query?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/query/',
            path: {
                'project_id': projectId,
            },
            query: {
                'async': async,
                'client_query_id': clientQueryId,
                'query': query,
            },
        });
    }

    /**
     * (Experimental)
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any Query status
     * @throws ApiError
     */
    public static queryRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/query/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * (Experimental)
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static queryDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/query/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public static queryDraftSqlRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/query/draft_sql/',
            path: {
                'project_id': projectId,
            },
        });
    }

}
