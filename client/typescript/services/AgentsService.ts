/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentDefinition } from '../models/AgentDefinition';
import type { PaginatedAgentListResponseList } from '../models/PaginatedAgentListResponseList';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AgentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List agent definitions
     * Get a list of available agent definitions that can be assigned to tasks.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedAgentListResponseList List of agent definitions
     * @throws ApiError
     */
    public agentsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedAgentListResponseList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/agents/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get agent definition
     * Retrieve a specific agent definition by ID.
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns AgentDefinition Agent definition
     * @throws ApiError
     */
    public agentsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<AgentDefinition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/agents/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                404: `Agent not found`,
            },
        });
    }
}
