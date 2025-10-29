/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureFlag } from '../models/FeatureFlag';
import type { PaginatedFeatureFlagList } from '../models/PaginatedFeatureFlagList';
import type { PatchedFeatureFlag } from '../models/PatchedFeatureFlag';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FeatureFlagsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param active
     * @param createdById The User ID which initially created the feature flag.
     * @param evaluationRuntime Filter feature flags by their evaluation runtime.
     * @param excludedProperties JSON-encoded list of feature flag keys to exclude from the results.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search Search by feature flag key or name. Case insensitive.
     * @param tags JSON-encoded list of tag names to filter feature flags by.
     * @param type
     * @returns PaginatedFeatureFlagList
     * @throws ApiError
     */
    public featureFlagsList(
        projectId: string,
        active?: 'STALE' | 'false' | 'true',
        createdById?: string,
        evaluationRuntime?: 'both' | 'client' | 'server',
        excludedProperties?: string,
        limit?: number,
        offset?: number,
        search?: string,
        tags?: string,
        type?: 'boolean' | 'experiment' | 'multivariant',
    ): CancelablePromise<PaginatedFeatureFlagList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/',
            path: {
                'project_id': projectId,
            },
            query: {
                'active': active,
                'created_by_id': createdById,
                'evaluation_runtime': evaluationRuntime,
                'excluded_properties': excludedProperties,
                'limit': limit,
                'offset': offset,
                'search': search,
                'tags': tags,
                'type': type,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public featureFlagsCreate(
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/feature_flags/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlag
     * @throws ApiError
     */
    public featureFlagsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<FeatureFlag> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public featureFlagsUpdate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/feature_flags/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public featureFlagsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedFeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/feature_flags/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public featureFlagsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/feature_flags/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsActivityRetrieve2(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsCreateStaticCohortForFlagCreate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/feature_flags/{id}/create_static_cohort_for_flag/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsDashboardCreate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/feature_flags/{id}/dashboard/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsEnrichUsageDashboardCreate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/feature_flags/{id}/enrich_usage_dashboard/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsRemoteConfigRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{id}/remote_config/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsStatusRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{id}/status/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsActivityRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/activity/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Get feature flag keys by IDs.
     * Accepts a list of feature flag IDs and returns a mapping of ID to key.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsBulkKeysCreate(
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/feature_flags/bulk_keys/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsEvaluationReasonsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/evaluation_reasons/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsLocalEvaluationRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/local_evaluation/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsMyFlagsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/my_flags/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public featureFlagsUserBlastRadiusCreate(
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/feature_flags/user_blast_radius/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
