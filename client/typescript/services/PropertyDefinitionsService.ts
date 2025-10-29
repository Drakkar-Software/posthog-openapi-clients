/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPropertyDefinitionList } from '../models/PaginatedPropertyDefinitionList';
import type { PatchedPropertyDefinition } from '../models/PatchedPropertyDefinition';
import type { PropertyDefinition } from '../models/PropertyDefinition';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PropertyDefinitionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param eventNames If sent, response value will have `is_seen_on_filtered_events` populated. JSON-encoded
     * @param excludeCoreProperties Whether to exclude core properties
     * @param excludeHidden Whether to exclude properties marked as hidden
     * @param excludedProperties JSON-encoded list of excluded properties
     * @param filterByEventNames Whether to return only properties for events in `event_names`
     * @param groupTypeIndex What group type is the property for. Only should be set if `type=group`
     * @param isFeatureFlag Whether to return only (or excluding) feature flag properties
     * @param isNumerical Whether to return only (or excluding) numerical property definitions
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param properties Comma-separated list of properties to filter
     * @param search Searches properties by name
     * @param type What property definitions to return
     *
     * * `event` - event
     * * `person` - person
     * * `group` - group
     * * `session` - session
     * @returns PaginatedPropertyDefinitionList
     * @throws ApiError
     */
    public propertyDefinitionsList(
        projectId: string,
        eventNames?: string,
        excludeCoreProperties: boolean = false,
        excludeHidden: boolean = false,
        excludedProperties?: string,
        filterByEventNames?: boolean | null,
        groupTypeIndex?: number,
        isFeatureFlag?: boolean | null,
        isNumerical?: boolean | null,
        limit?: number,
        offset?: number,
        properties?: string,
        search?: string,
        type: 'event' | 'person' | 'group' | 'session' = 'event',
    ): CancelablePromise<PaginatedPropertyDefinitionList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/property_definitions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'event_names': eventNames,
                'exclude_core_properties': excludeCoreProperties,
                'exclude_hidden': excludeHidden,
                'excluded_properties': excludedProperties,
                'filter_by_event_names': filterByEventNames,
                'group_type_index': groupTypeIndex,
                'is_feature_flag': isFeatureFlag,
                'is_numerical': isNumerical,
                'limit': limit,
                'offset': offset,
                'properties': properties,
                'search': search,
                'type': type,
            },
        });
    }
    /**
     * @param id A UUID string identifying this property definition.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns PropertyDefinition
     * @throws ApiError
     */
    public propertyDefinitionsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<PropertyDefinition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/property_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this property definition.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PropertyDefinition
     * @throws ApiError
     */
    public propertyDefinitionsUpdate(
        id: string,
        projectId: string,
        requestBody: PropertyDefinition,
    ): CancelablePromise<PropertyDefinition> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/property_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this property definition.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PropertyDefinition
     * @throws ApiError
     */
    public propertyDefinitionsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedPropertyDefinition,
    ): CancelablePromise<PropertyDefinition> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/property_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this property definition.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public propertyDefinitionsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/property_definitions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Allows a caller to provide a list of event names and a single property name
     * Returns a map of the event names to a boolean representing whether that property has ever been seen with that event_name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public propertyDefinitionsSeenTogetherRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/property_definitions/seen_together/',
            path: {
                'project_id': projectId,
            },
        });
    }
}
