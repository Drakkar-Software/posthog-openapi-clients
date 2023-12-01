/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeatureFlag } from '../models/FeatureFlag';
import type { FeatureFlagRoleAccess } from '../models/FeatureFlagRoleAccess';
import type { PaginatedFeatureFlagList } from '../models/PaginatedFeatureFlagList';
import type { PaginatedFeatureFlagRoleAccessList } from '../models/PaginatedFeatureFlagRoleAccessList';
import type { PatchedFeatureFlag } from '../models/PatchedFeatureFlag';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FeatureFlagsService {

    /**
     * Retrieves all feature flags for a given organization and key.
     * @param featureFlagKey
     * @param parentLookupOrganizationId
     * @returns any No response body
     * @throws ApiError
     */
    public static featureFlagsRetrieve(
        featureFlagKey: string,
        parentLookupOrganizationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/organizations/{parent_lookup_organization_id}/feature_flags/{feature_flag_key}/',
            path: {
                'feature_flag_key': featureFlagKey,
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

    /**
     * Retrieves all feature flags for a given organization and key.
     * @param parentLookupOrganizationId
     * @returns any No response body
     * @throws ApiError
     */
    public static featureFlagsCopyFlagsCreate(
        parentLookupOrganizationId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/organizations/{parent_lookup_organization_id}/feature_flags/copy_flags/',
            path: {
                'parent_lookup_organization_id': parentLookupOrganizationId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedFeatureFlagList
     * @throws ApiError
     */
    public static featureFlagsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedFeatureFlagList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/',
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
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsCreate(
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
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
     * @param parentLookupFeatureFlagId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedFeatureFlagRoleAccessList
     * @throws ApiError
     */
    public static featureFlagsRoleAccessList(
        parentLookupFeatureFlagId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedFeatureFlagRoleAccessList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/',
            path: {
                'parent_lookup_feature_flag_id': parentLookupFeatureFlagId,
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }

    /**
     * @param parentLookupFeatureFlagId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlagRoleAccess
     * @throws ApiError
     */
    public static featureFlagsRoleAccessCreate(
        parentLookupFeatureFlagId: string,
        projectId: string,
        requestBody: FeatureFlagRoleAccess,
    ): CancelablePromise<FeatureFlagRoleAccess> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/',
            path: {
                'parent_lookup_feature_flag_id': parentLookupFeatureFlagId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id A unique integer value identifying this feature flag role access.
     * @param parentLookupFeatureFlagId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlagRoleAccess
     * @throws ApiError
     */
    public static featureFlagsRoleAccessRetrieve(
        id: number,
        parentLookupFeatureFlagId: string,
        projectId: string,
    ): CancelablePromise<FeatureFlagRoleAccess> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_feature_flag_id': parentLookupFeatureFlagId,
                'project_id': projectId,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this feature flag role access.
     * @param parentLookupFeatureFlagId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public static featureFlagsRoleAccessDestroy(
        id: number,
        parentLookupFeatureFlagId: string,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/projects/{project_id}/feature_flags/{parent_lookup_feature_flag_id}/role_access/{id}/',
            path: {
                'id': id,
                'parent_lookup_feature_flag_id': parentLookupFeatureFlagId,
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsRetrieve2(
        id: number,
        projectId: string,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsUpdate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
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
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedFeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
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
    public static featureFlagsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsActivityRetrieve2(
        id: number,
        projectId: string,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsCreateStaticCohortForFlagCreate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
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
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsDashboardCreate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
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
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param id A unique integer value identifying this feature flag.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsEnrichUsageDashboardCreate(
        id: number,
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
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
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsActivityRetrieve(
        projectId: string,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/activity/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsEvaluationReasonsRetrieve(
        projectId: string,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/evaluation_reasons/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsLocalEvaluationRetrieve(
        projectId: string,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/local_evaluation/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsMyFlagsRetrieve(
        projectId: string,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/projects/{project_id}/feature_flags/my_flags/',
            path: {
                'project_id': projectId,
            },
        });
    }

    /**
     * Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.
     *
     * If you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FeatureFlag
     * @throws ApiError
     */
    public static featureFlagsUserBlastRadiusCreate(
        projectId: string,
        requestBody: FeatureFlag,
    ): CancelablePromise<FeatureFlag> {
        return __request(OpenAPI, {
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
