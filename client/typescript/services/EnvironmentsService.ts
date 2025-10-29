/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BatchExport } from '../models/BatchExport';
import type { BatchExportBackfill } from '../models/BatchExportBackfill';
import type { BatchExportRun } from '../models/BatchExportRun';
import type { ClickhouseEvent } from '../models/ClickhouseEvent';
import type { CreateGroup } from '../models/CreateGroup';
import type { Dashboard } from '../models/Dashboard';
import type { DashboardCollaborator } from '../models/DashboardCollaborator';
import type { DataColorTheme } from '../models/DataColorTheme';
import type { Dataset } from '../models/Dataset';
import type { DatasetItem } from '../models/DatasetItem';
import type { DataWarehouseSavedQuery } from '../models/DataWarehouseSavedQuery';
import type { EndpointLastExecutionTimesRequest } from '../models/EndpointLastExecutionTimesRequest';
import type { EndpointRequest } from '../models/EndpointRequest';
import type { EndpointRunRequest } from '../models/EndpointRunRequest';
import type { ErrorTrackingAssignmentRule } from '../models/ErrorTrackingAssignmentRule';
import type { ErrorTrackingFingerprint } from '../models/ErrorTrackingFingerprint';
import type { ErrorTrackingGroupingRule } from '../models/ErrorTrackingGroupingRule';
import type { ErrorTrackingRelease } from '../models/ErrorTrackingRelease';
import type { ErrorTrackingSuppressionRule } from '../models/ErrorTrackingSuppressionRule';
import type { ErrorTrackingSymbolSet } from '../models/ErrorTrackingSymbolSet';
import type { Evaluation } from '../models/Evaluation';
import type { ExportedAsset } from '../models/ExportedAsset';
import type { FileSystem } from '../models/FileSystem';
import type { FileSystemShortcut } from '../models/FileSystemShortcut';
import type { Group } from '../models/Group';
import type { HogFunction } from '../models/HogFunction';
import type { Insight } from '../models/Insight';
import type { Integration } from '../models/Integration';
import type { PaginatedBatchExportBackfillList } from '../models/PaginatedBatchExportBackfillList';
import type { PaginatedBatchExportList } from '../models/PaginatedBatchExportList';
import type { PaginatedBatchExportRunList } from '../models/PaginatedBatchExportRunList';
import type { PaginatedClickhouseEventList } from '../models/PaginatedClickhouseEventList';
import type { PaginatedDashboardBasicList } from '../models/PaginatedDashboardBasicList';
import type { PaginatedDataColorThemeList } from '../models/PaginatedDataColorThemeList';
import type { PaginatedDatasetItemList } from '../models/PaginatedDatasetItemList';
import type { PaginatedDatasetList } from '../models/PaginatedDatasetList';
import type { PaginatedDataWarehouseSavedQueryList } from '../models/PaginatedDataWarehouseSavedQueryList';
import type { PaginatedErrorTrackingAssignmentRuleList } from '../models/PaginatedErrorTrackingAssignmentRuleList';
import type { PaginatedErrorTrackingFingerprintList } from '../models/PaginatedErrorTrackingFingerprintList';
import type { PaginatedErrorTrackingGroupingRuleList } from '../models/PaginatedErrorTrackingGroupingRuleList';
import type { PaginatedErrorTrackingReleaseList } from '../models/PaginatedErrorTrackingReleaseList';
import type { PaginatedErrorTrackingSuppressionRuleList } from '../models/PaginatedErrorTrackingSuppressionRuleList';
import type { PaginatedErrorTrackingSymbolSetList } from '../models/PaginatedErrorTrackingSymbolSetList';
import type { PaginatedEvaluationList } from '../models/PaginatedEvaluationList';
import type { PaginatedExportedAssetList } from '../models/PaginatedExportedAssetList';
import type { PaginatedFileSystemList } from '../models/PaginatedFileSystemList';
import type { PaginatedFileSystemShortcutList } from '../models/PaginatedFileSystemShortcutList';
import type { PaginatedGroupList } from '../models/PaginatedGroupList';
import type { PaginatedHogFunctionMinimalList } from '../models/PaginatedHogFunctionMinimalList';
import type { PaginatedInsightList } from '../models/PaginatedInsightList';
import type { PaginatedIntegrationList } from '../models/PaginatedIntegrationList';
import type { PaginatedPersistedFolderList } from '../models/PaginatedPersistedFolderList';
import type { PaginatedPersonList } from '../models/PaginatedPersonList';
import type { PaginatedPluginLogEntryList } from '../models/PaginatedPluginLogEntryList';
import type { PaginatedSessionRecordingList } from '../models/PaginatedSessionRecordingList';
import type { PaginatedSessionRecordingPlaylistList } from '../models/PaginatedSessionRecordingPlaylistList';
import type { PaginatedSubscriptionList } from '../models/PaginatedSubscriptionList';
import type { PaginatedTableList } from '../models/PaginatedTableList';
import type { PaginatedTeamBasicList } from '../models/PaginatedTeamBasicList';
import type { PaginatedUserInterviewList } from '../models/PaginatedUserInterviewList';
import type { PatchedBatchExport } from '../models/PatchedBatchExport';
import type { PatchedDashboard } from '../models/PatchedDashboard';
import type { PatchedDataColorTheme } from '../models/PatchedDataColorTheme';
import type { PatchedDataset } from '../models/PatchedDataset';
import type { PatchedDatasetItem } from '../models/PatchedDatasetItem';
import type { PatchedDataWarehouseSavedQuery } from '../models/PatchedDataWarehouseSavedQuery';
import type { PatchedErrorTrackingAssignmentRule } from '../models/PatchedErrorTrackingAssignmentRule';
import type { PatchedErrorTrackingGroupingRule } from '../models/PatchedErrorTrackingGroupingRule';
import type { PatchedErrorTrackingRelease } from '../models/PatchedErrorTrackingRelease';
import type { PatchedErrorTrackingSuppressionRule } from '../models/PatchedErrorTrackingSuppressionRule';
import type { PatchedErrorTrackingSymbolSet } from '../models/PatchedErrorTrackingSymbolSet';
import type { PatchedEvaluation } from '../models/PatchedEvaluation';
import type { PatchedFileSystem } from '../models/PatchedFileSystem';
import type { PatchedFileSystemShortcut } from '../models/PatchedFileSystemShortcut';
import type { PatchedHogFunction } from '../models/PatchedHogFunction';
import type { PatchedInsight } from '../models/PatchedInsight';
import type { PatchedPersistedFolder } from '../models/PatchedPersistedFolder';
import type { PatchedPerson } from '../models/PatchedPerson';
import type { PatchedSessionRecording } from '../models/PatchedSessionRecording';
import type { PatchedSessionRecordingPlaylist } from '../models/PatchedSessionRecordingPlaylist';
import type { PatchedSubscription } from '../models/PatchedSubscription';
import type { PatchedTable } from '../models/PatchedTable';
import type { PatchedTeam } from '../models/PatchedTeam';
import type { PatchedUserInterview } from '../models/PatchedUserInterview';
import type { PersistedFolder } from '../models/PersistedFolder';
import type { Person } from '../models/Person';
import type { Property } from '../models/Property';
import type { QueryRequest } from '../models/QueryRequest';
import type { QueryResponseAlternative } from '../models/QueryResponseAlternative';
import type { QueryStatusResponse } from '../models/QueryStatusResponse';
import type { QueryUpgradeRequest } from '../models/QueryUpgradeRequest';
import type { QueryUpgradeResponse } from '../models/QueryUpgradeResponse';
import type { SessionRecording } from '../models/SessionRecording';
import type { SessionRecordingPlaylist } from '../models/SessionRecordingPlaylist';
import type { SessionSummaries } from '../models/SessionSummaries';
import type { SharingConfiguration } from '../models/SharingConfiguration';
import type { Subscription } from '../models/Subscription';
import type { Table } from '../models/Table';
import type { Team } from '../models/Team';
import type { UserInterview } from '../models/UserInterview';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsAppMetricsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/app_metrics/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this plugin config.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsAppMetricsErrorDetailsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/app_metrics/{id}/error_details/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param pluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsAppMetricsHistoricalExportsRetrieve(
        pluginConfigId: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/app_metrics/{plugin_config_id}/historical_exports/',
            path: {
                'plugin_config_id': pluginConfigId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id
     * @param pluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsAppMetricsHistoricalExportsRetrieve2(
        id: string,
        pluginConfigId: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/app_metrics/{plugin_config_id}/historical_exports/{id}/',
            path: {
                'id': id,
                'plugin_config_id': pluginConfigId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedBatchExportList
     * @throws ApiError
     */
    public environmentsBatchExportsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedBatchExportList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public environmentsBatchExportsCreate(
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ViewSet for BatchExportBackfill models.
     *
     * Allows creating and reading backfills, but not updating or deleting them.
     * @param batchExportId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param cursor The pagination cursor value.
     * @param ordering Which field to use when ordering the results.
     * @returns PaginatedBatchExportBackfillList
     * @throws ApiError
     */
    public environmentsBatchExportsBackfillsList(
        batchExportId: string,
        projectId: string,
        cursor?: string,
        ordering?: string,
    ): CancelablePromise<PaginatedBatchExportBackfillList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/backfills/',
            path: {
                'batch_export_id': batchExportId,
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
                'ordering': ordering,
            },
        });
    }
    /**
     * Create a new backfill for a BatchExport.
     * @param batchExportId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns BatchExportBackfill
     * @throws ApiError
     */
    public environmentsBatchExportsBackfillsCreate(
        batchExportId: string,
        projectId: string,
        requestBody: BatchExportBackfill,
    ): CancelablePromise<BatchExportBackfill> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/backfills/',
            path: {
                'batch_export_id': batchExportId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * ViewSet for BatchExportBackfill models.
     *
     * Allows creating and reading backfills, but not updating or deleting them.
     * @param batchExportId
     * @param id A UUID string identifying this batch export backfill.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns BatchExportBackfill
     * @throws ApiError
     */
    public environmentsBatchExportsBackfillsRetrieve(
        batchExportId: string,
        id: string,
        projectId: string,
    ): CancelablePromise<BatchExportBackfill> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/backfills/{id}/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Cancel a batch export backfill.
     * @param batchExportId
     * @param id A UUID string identifying this batch export backfill.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsBackfillsCancelCreate(
        batchExportId: string,
        id: string,
        projectId: string,
        requestBody: BatchExportBackfill,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/backfills/{id}/cancel/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param batchExportId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param cursor The pagination cursor value.
     * @param ordering Which field to use when ordering the results.
     * @returns PaginatedBatchExportRunList
     * @throws ApiError
     */
    public environmentsBatchExportsRunsList(
        batchExportId: string,
        projectId: string,
        cursor?: string,
        ordering?: string,
    ): CancelablePromise<PaginatedBatchExportRunList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/runs/',
            path: {
                'batch_export_id': batchExportId,
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
                'ordering': ordering,
            },
        });
    }
    /**
     * @param batchExportId
     * @param id A UUID string identifying this batch export run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns BatchExportRun
     * @throws ApiError
     */
    public environmentsBatchExportsRunsRetrieve(
        batchExportId: string,
        id: string,
        projectId: string,
    ): CancelablePromise<BatchExportRun> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/runs/{id}/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Cancel a batch export run.
     * @param batchExportId
     * @param id A UUID string identifying this batch export run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsRunsCancelCreate(
        batchExportId: string,
        id: string,
        projectId: string,
        requestBody: BatchExportRun,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/runs/{id}/cancel/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param batchExportId
     * @param id A UUID string identifying this batch export run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsRunsLogsRetrieve(
        batchExportId: string,
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/runs/{id}/logs/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Retry a batch export run.
     *
     * We use the same underlying mechanism as when backfilling a batch export, as retrying
     * a run is the same as backfilling one run.
     * @param batchExportId
     * @param id A UUID string identifying this batch export run.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsRunsRetryCreate(
        batchExportId: string,
        id: string,
        projectId: string,
        requestBody: BatchExportRun,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{batch_export_id}/runs/{id}/retry/',
            path: {
                'batch_export_id': batchExportId,
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns BatchExport
     * @throws ApiError
     */
    public environmentsBatchExportsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public environmentsBatchExportsUpdate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns BatchExport
     * @throws ApiError
     */
    public environmentsBatchExportsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedBatchExport,
    ): CancelablePromise<BatchExport> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsBatchExportsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/batch_exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Trigger a backfill for a BatchExport.
     *
     * Note: This endpoint is deprecated. Please use POST /batch_exports/<id>/backfills/ instead.
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsBackfillCreate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{id}/backfill/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsLogsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/{id}/logs/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Pause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsPauseCreate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{id}/pause/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsRunTestStepCreate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{id}/run_test_step/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Unpause a BatchExport.
     * @param id A UUID string identifying this batch export.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsUnpauseCreate(
        id: string,
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/{id}/unpause/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsRunTestStepNewCreate(
        projectId: string,
        requestBody: BatchExport,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/batch_exports/run_test_step_new/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsBatchExportsTestRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/batch_exports/test/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDashboardBasicList
     * @throws ApiError
     */
    public environmentsDashboardsList(
        projectId: string,
        format?: 'json' | 'txt',
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDashboardBasicList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/dashboards/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Dashboard
     * @throws ApiError
     */
    public environmentsDashboardsCreate(
        projectId: string,
        format?: 'json' | 'txt',
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/dashboards/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DashboardCollaborator
     * @throws ApiError
     */
    public environmentsDashboardsCollaboratorsList(
        dashboardId: number,
        projectId: string,
    ): CancelablePromise<Array<DashboardCollaborator>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/dashboards/{dashboard_id}/collaborators/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DashboardCollaborator
     * @throws ApiError
     */
    public environmentsDashboardsCollaboratorsCreate(
        dashboardId: number,
        projectId: string,
        requestBody: DashboardCollaborator,
    ): CancelablePromise<DashboardCollaborator> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/dashboards/{dashboard_id}/collaborators/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param userUuid
     * @returns void
     * @throws ApiError
     */
    public environmentsDashboardsCollaboratorsDestroy(
        dashboardId: number,
        projectId: string,
        userUuid: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/dashboards/{dashboard_id}/collaborators/{user__uuid}/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
                'user__uuid': userUuid,
            },
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsDashboardsSharingList(
        dashboardId: number,
        projectId: string,
    ): CancelablePromise<Array<SharingConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/dashboards/{dashboard_id}/sharing/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create a new password for the sharing configuration.
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsDashboardsSharingPasswordsCreate(
        dashboardId: number,
        projectId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/dashboards/{dashboard_id}/sharing/passwords/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a password from the sharing configuration.
     * @param dashboardId
     * @param passwordId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsDashboardsSharingPasswordsDestroy(
        dashboardId: number,
        passwordId: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/dashboards/{dashboard_id}/sharing/passwords/{password_id}/',
            path: {
                'dashboard_id': dashboardId,
                'password_id': passwordId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param dashboardId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsDashboardsSharingRefreshCreate(
        dashboardId: number,
        projectId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/dashboards/{dashboard_id}/sharing/refresh/',
            path: {
                'dashboard_id': dashboardId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Dashboard
     * @throws ApiError
     */
    public environmentsDashboardsRetrieve(
        id: number,
        projectId: string,
        format?: 'json' | 'txt',
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Dashboard
     * @throws ApiError
     */
    public environmentsDashboardsUpdate(
        id: number,
        projectId: string,
        format?: 'json' | 'txt',
        requestBody?: Dashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Dashboard
     * @throws ApiError
     */
    public environmentsDashboardsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'json' | 'txt',
        requestBody?: PatchedDashboard,
    ): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns void
     * @throws ApiError
     */
    public environmentsDashboardsDestroy(
        id: number,
        projectId: string,
        format?: 'json' | 'txt',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/dashboards/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsDashboardsMoveTilePartialUpdate(
        id: number,
        projectId: string,
        format?: 'json' | 'txt',
        requestBody?: PatchedDashboard,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/dashboards/{id}/move_tile/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Stream dashboard metadata and tiles via Server-Sent Events. Sends metadata first, then tiles as they are rendered.
     * @param id A unique integer value identifying this dashboard.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsDashboardsStreamTilesRetrieve(
        id: number,
        projectId: string,
        format?: 'json' | 'txt',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/dashboards/{id}/stream_tiles/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsDashboardsCreateFromTemplateJsonCreate(
        projectId: string,
        format?: 'json' | 'txt',
        requestBody?: Dashboard,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/dashboards/create_from_template_json/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDataColorThemeList
     * @throws ApiError
     */
    public environmentsDataColorThemesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDataColorThemeList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/data_color_themes/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataColorTheme
     * @throws ApiError
     */
    public environmentsDataColorThemesCreate(
        projectId: string,
        requestBody: DataColorTheme,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/data_color_themes/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DataColorTheme
     * @throws ApiError
     */
    public environmentsDataColorThemesRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataColorTheme
     * @throws ApiError
     */
    public environmentsDataColorThemesUpdate(
        id: number,
        projectId: string,
        requestBody: DataColorTheme,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataColorTheme
     * @throws ApiError
     */
    public environmentsDataColorThemesPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedDataColorTheme,
    ): CancelablePromise<DataColorTheme> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this data color theme.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsDataColorThemesDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/data_color_themes/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param dataset Filter by dataset ID
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedDatasetItemList
     * @throws ApiError
     */
    public environmentsDatasetItemsList(
        projectId: string,
        dataset?: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedDatasetItemList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/dataset_items/',
            path: {
                'project_id': projectId,
            },
            query: {
                'dataset': dataset,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DatasetItem
     * @throws ApiError
     */
    public environmentsDatasetItemsCreate(
        projectId: string,
        requestBody: DatasetItem,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/dataset_items/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DatasetItem
     * @throws ApiError
     */
    public environmentsDatasetItemsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/dataset_items/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DatasetItem
     * @throws ApiError
     */
    public environmentsDatasetItemsUpdate(
        id: string,
        projectId: string,
        requestBody: DatasetItem,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/dataset_items/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DatasetItem
     * @throws ApiError
     */
    public environmentsDatasetItemsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedDatasetItem,
    ): CancelablePromise<DatasetItem> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/dataset_items/{id}/',
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
     * @param id A UUID string identifying this dataset item.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsDatasetItemsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/dataset_items/{id}/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param idIn Multiple values may be separated by commas.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param orderBy Ordering
     *
     * * `created_at` - Created At
     * * `-created_at` - Created At (descending)
     * * `updated_at` - Updated At
     * * `-updated_at` - Updated At (descending)
     * @param search Search in name, description, or metadata
     * @returns PaginatedDatasetList
     * @throws ApiError
     */
    public environmentsDatasetsList(
        projectId: string,
        idIn?: Array<string>,
        limit?: number,
        offset?: number,
        orderBy?: Array<'-created_at' | '-updated_at' | 'created_at' | 'updated_at'>,
        search?: string,
    ): CancelablePromise<PaginatedDatasetList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/datasets/',
            path: {
                'project_id': projectId,
            },
            query: {
                'id__in': idIn,
                'limit': limit,
                'offset': offset,
                'order_by': orderBy,
                'search': search,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dataset
     * @throws ApiError
     */
    public environmentsDatasetsCreate(
        projectId: string,
        requestBody: Dataset,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/datasets/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Dataset
     * @throws ApiError
     */
    public environmentsDatasetsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/datasets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dataset
     * @throws ApiError
     */
    public environmentsDatasetsUpdate(
        id: string,
        projectId: string,
        requestBody: Dataset,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/datasets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Dataset
     * @throws ApiError
     */
    public environmentsDatasetsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedDataset,
    ): CancelablePromise<Dataset> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/datasets/{id}/',
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
     * @param id A UUID string identifying this dataset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsDatasetsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/datasets/{id}/',
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
     * List all endpoints for the team.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/endpoints/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Create a new endpoint
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsCreate(
        projectId: string,
        requestBody?: EndpointRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/endpoints/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve an endpoint.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRetrieve2(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsUpdate(
        name: string,
        projectId: string,
        requestBody?: EndpointRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsPartialUpdate(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Delete a endpoint.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsEndpointsDestroy(
        name: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/endpoints/{name}/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRunRetrieve(
        name: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/endpoints/{name}/run/',
            path: {
                'name': name,
                'project_id': projectId,
            },
        });
    }
    /**
     * Update an existing endpoint. Parameters are optional.
     * @param name
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEndpointsRunCreate(
        name: string,
        projectId: string,
        requestBody?: EndpointRunRequest,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/endpoints/{name}/run/',
            path: {
                'name': name,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get the last execution times in the past 6 monthsfor multiple endpoints.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns QueryStatusResponse
     * @throws ApiError
     */
    public environmentsEndpointsLastExecutionTimesCreate(
        projectId: string,
        requestBody: EndpointLastExecutionTimesRequest,
    ): CancelablePromise<QueryStatusResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/endpoints/last_execution_times/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedErrorTrackingAssignmentRuleList
     * @throws ApiError
     */
    public environmentsErrorTrackingAssignmentRulesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedErrorTrackingAssignmentRuleList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/assignment_rules/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingAssignmentRule
     * @throws ApiError
     */
    public environmentsErrorTrackingAssignmentRulesCreate(
        projectId: string,
        requestBody: ErrorTrackingAssignmentRule,
    ): CancelablePromise<ErrorTrackingAssignmentRule> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/assignment_rules/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking assignment rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ErrorTrackingAssignmentRule
     * @throws ApiError
     */
    public environmentsErrorTrackingAssignmentRulesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ErrorTrackingAssignmentRule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/assignment_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this error tracking assignment rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingAssignmentRule
     * @throws ApiError
     */
    public environmentsErrorTrackingAssignmentRulesUpdate(
        id: string,
        projectId: string,
        requestBody: ErrorTrackingAssignmentRule,
    ): CancelablePromise<ErrorTrackingAssignmentRule> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/error_tracking/assignment_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking assignment rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingAssignmentRule
     * @throws ApiError
     */
    public environmentsErrorTrackingAssignmentRulesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedErrorTrackingAssignmentRule,
    ): CancelablePromise<ErrorTrackingAssignmentRule> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/assignment_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking assignment rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsErrorTrackingAssignmentRulesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/error_tracking/assignment_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingAssignmentRulesReorderPartialUpdate(
        projectId: string,
        requestBody?: PatchedErrorTrackingAssignmentRule,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/assignment_rules/reorder/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedErrorTrackingFingerprintList
     * @throws ApiError
     */
    public environmentsErrorTrackingFingerprintsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedErrorTrackingFingerprintList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/fingerprints/',
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
     * @param id A UUID string identifying this error tracking issue fingerprint v2.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ErrorTrackingFingerprint
     * @throws ApiError
     */
    public environmentsErrorTrackingFingerprintsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ErrorTrackingFingerprint> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/fingerprints/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A UUID string identifying this error tracking issue fingerprint v2.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsErrorTrackingFingerprintsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/error_tracking/fingerprints/{id}/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingGitProviderFileLinksResolveGithubRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/git-provider-file-links/resolve_github/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedErrorTrackingGroupingRuleList
     * @throws ApiError
     */
    public environmentsErrorTrackingGroupingRulesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedErrorTrackingGroupingRuleList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/grouping_rules/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingGroupingRule
     * @throws ApiError
     */
    public environmentsErrorTrackingGroupingRulesCreate(
        projectId: string,
        requestBody: ErrorTrackingGroupingRule,
    ): CancelablePromise<ErrorTrackingGroupingRule> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/grouping_rules/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking grouping rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ErrorTrackingGroupingRule
     * @throws ApiError
     */
    public environmentsErrorTrackingGroupingRulesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ErrorTrackingGroupingRule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/grouping_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this error tracking grouping rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingGroupingRule
     * @throws ApiError
     */
    public environmentsErrorTrackingGroupingRulesUpdate(
        id: string,
        projectId: string,
        requestBody: ErrorTrackingGroupingRule,
    ): CancelablePromise<ErrorTrackingGroupingRule> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/error_tracking/grouping_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking grouping rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingGroupingRule
     * @throws ApiError
     */
    public environmentsErrorTrackingGroupingRulesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedErrorTrackingGroupingRule,
    ): CancelablePromise<ErrorTrackingGroupingRule> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/grouping_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking grouping rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsErrorTrackingGroupingRulesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/error_tracking/grouping_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingGroupingRulesReorderPartialUpdate(
        projectId: string,
        requestBody?: PatchedErrorTrackingGroupingRule,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/grouping_rules/reorder/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedErrorTrackingReleaseList
     * @throws ApiError
     */
    public environmentsErrorTrackingReleasesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedErrorTrackingReleaseList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/releases/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingRelease
     * @throws ApiError
     */
    public environmentsErrorTrackingReleasesCreate(
        projectId: string,
        requestBody: ErrorTrackingRelease,
    ): CancelablePromise<ErrorTrackingRelease> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/releases/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking release.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ErrorTrackingRelease
     * @throws ApiError
     */
    public environmentsErrorTrackingReleasesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ErrorTrackingRelease> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/releases/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this error tracking release.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingRelease
     * @throws ApiError
     */
    public environmentsErrorTrackingReleasesUpdate(
        id: string,
        projectId: string,
        requestBody: ErrorTrackingRelease,
    ): CancelablePromise<ErrorTrackingRelease> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/error_tracking/releases/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking release.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingRelease
     * @throws ApiError
     */
    public environmentsErrorTrackingReleasesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedErrorTrackingRelease,
    ): CancelablePromise<ErrorTrackingRelease> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/releases/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking release.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsErrorTrackingReleasesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/error_tracking/releases/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param hashId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingReleasesHashRetrieve(
        hashId: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/releases/hash/{hash_id}/',
            path: {
                'hash_id': hashId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedErrorTrackingSuppressionRuleList
     * @throws ApiError
     */
    public environmentsErrorTrackingSuppressionRulesList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedErrorTrackingSuppressionRuleList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/suppression_rules/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingSuppressionRule
     * @throws ApiError
     */
    public environmentsErrorTrackingSuppressionRulesCreate(
        projectId: string,
        requestBody: ErrorTrackingSuppressionRule,
    ): CancelablePromise<ErrorTrackingSuppressionRule> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/suppression_rules/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking suppression rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ErrorTrackingSuppressionRule
     * @throws ApiError
     */
    public environmentsErrorTrackingSuppressionRulesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ErrorTrackingSuppressionRule> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/suppression_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this error tracking suppression rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingSuppressionRule
     * @throws ApiError
     */
    public environmentsErrorTrackingSuppressionRulesUpdate(
        id: string,
        projectId: string,
        requestBody: ErrorTrackingSuppressionRule,
    ): CancelablePromise<ErrorTrackingSuppressionRule> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/error_tracking/suppression_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking suppression rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ErrorTrackingSuppressionRule
     * @throws ApiError
     */
    public environmentsErrorTrackingSuppressionRulesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedErrorTrackingSuppressionRule,
    ): CancelablePromise<ErrorTrackingSuppressionRule> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/suppression_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking suppression rule.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsErrorTrackingSuppressionRulesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/error_tracking/suppression_rules/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingSuppressionRulesReorderPartialUpdate(
        projectId: string,
        requestBody?: PatchedErrorTrackingSuppressionRule,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/suppression_rules/reorder/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedErrorTrackingSymbolSetList
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedErrorTrackingSymbolSetList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns ErrorTrackingSymbolSet
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsCreate(
        projectId: string,
        formData: ErrorTrackingSymbolSet,
    ): CancelablePromise<ErrorTrackingSymbolSet> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/',
            path: {
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking symbol set.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ErrorTrackingSymbolSet
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<ErrorTrackingSymbolSet> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this error tracking symbol set.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns ErrorTrackingSymbolSet
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsUpdate(
        id: string,
        projectId: string,
        formData: ErrorTrackingSymbolSet,
    ): CancelablePromise<ErrorTrackingSymbolSet> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking symbol set.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns ErrorTrackingSymbolSet
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsPartialUpdate(
        id: string,
        projectId: string,
        formData?: PatchedErrorTrackingSymbolSet,
    ): CancelablePromise<ErrorTrackingSymbolSet> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id A UUID string identifying this error tracking symbol set.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this error tracking symbol set.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsFinishUploadUpdate(
        id: string,
        projectId: string,
        requestBody: ErrorTrackingSymbolSet,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/{id}/finish_upload/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsBulkFinishUploadCreate(
        projectId: string,
        requestBody: ErrorTrackingSymbolSet,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/bulk_finish_upload/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsBulkStartUploadCreate(
        projectId: string,
        requestBody: ErrorTrackingSymbolSet,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/bulk_start_upload/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsErrorTrackingSymbolSetsStartUploadCreate(
        projectId: string,
        formData: ErrorTrackingSymbolSet,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/error_tracking/symbol_sets/start_upload/',
            path: {
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Create a new evaluation run.
     *
     * This endpoint validates the request and enqueues a Temporal workflow
     * to asynchronously execute the evaluation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEvaluationRunsCreate(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/evaluation_runs/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param enabled Filter by enabled status
     * @param idIn Multiple values may be separated by commas.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param orderBy Ordering
     *
     * * `created_at` - Created At
     * * `-created_at` - Created At (descending)
     * * `updated_at` - Updated At
     * * `-updated_at` - Updated At (descending)
     * * `name` - Name
     * * `-name` - Name (descending)
     * @param search Search in name or description
     * @returns PaginatedEvaluationList
     * @throws ApiError
     */
    public environmentsEvaluationsList(
        projectId: string,
        enabled?: boolean,
        idIn?: Array<string>,
        limit?: number,
        offset?: number,
        orderBy?: Array<'-created_at' | '-name' | '-updated_at' | 'created_at' | 'name' | 'updated_at'>,
        search?: string,
    ): CancelablePromise<PaginatedEvaluationList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/evaluations/',
            path: {
                'project_id': projectId,
            },
            query: {
                'enabled': enabled,
                'id__in': idIn,
                'limit': limit,
                'offset': offset,
                'order_by': orderBy,
                'search': search,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Evaluation
     * @throws ApiError
     */
    public environmentsEvaluationsCreate(
        projectId: string,
        requestBody: Evaluation,
    ): CancelablePromise<Evaluation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/evaluations/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this evaluation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Evaluation
     * @throws ApiError
     */
    public environmentsEvaluationsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Evaluation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/evaluations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this evaluation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Evaluation
     * @throws ApiError
     */
    public environmentsEvaluationsUpdate(
        id: string,
        projectId: string,
        requestBody: Evaluation,
    ): CancelablePromise<Evaluation> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/evaluations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this evaluation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Evaluation
     * @throws ApiError
     */
    public environmentsEvaluationsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedEvaluation,
    ): CancelablePromise<Evaluation> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/evaluations/{id}/',
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
     * @param id A UUID string identifying this evaluation.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsEvaluationsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/evaluations/{id}/',
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
     *
     * This endpoint allows you to list and filter events.
     * It is effectively deprecated and is kept only for backwards compatibility.
     * If you ever ask about it you will be advised to not use it...
     * If you want to ad-hoc list or aggregate events, use the Query endpoint instead.
     * If you want to export all events or many pages of events you should use our CDP/Batch Exports products instead.
     *
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param after Only return events with a timestamp after this time.
     * @param before Only return events with a timestamp before this time.
     * @param distinctId Filter list by distinct id.
     * @param event Filter list by event. For example `user sign up` or `$pageview`.
     * @param format
     * @param limit The maximum number of results to return
     * @param offset The initial index from which to return the results.
     * @param personId Filter list by person id.
     * @param properties Filter events by event property, person property, cohort, groups and more.
     * @param select (Experimental) JSON-serialized array of HogQL expressions to return
     * @param where (Experimental) JSON-serialized array of HogQL expressions that must pass
     * @returns PaginatedClickhouseEventList
     * @throws ApiError
     */
    public environmentsEventsList(
        projectId: string,
        after?: string,
        before?: string,
        distinctId?: number,
        event?: string,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        personId?: number,
        properties?: Array<Property>,
        select?: Array<string>,
        where?: Array<string>,
    ): CancelablePromise<PaginatedClickhouseEventList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/events/',
            path: {
                'project_id': projectId,
            },
            query: {
                'after': after,
                'before': before,
                'distinct_id': distinctId,
                'event': event,
                'format': format,
                'limit': limit,
                'offset': offset,
                'person_id': personId,
                'properties': properties,
                'select': select,
                'where': where,
            },
        });
    }
    /**
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns ClickhouseEvent
     * @throws ApiError
     */
    public environmentsEventsRetrieve(
        id: string,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<ClickhouseEvent> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/events/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEventsValuesRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/events/values/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedExportedAssetList
     * @throws ApiError
     */
    public environmentsExportsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedExportedAssetList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/exports/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns ExportedAsset
     * @throws ApiError
     */
    public environmentsExportsCreate(
        projectId: string,
        requestBody: ExportedAsset,
    ): CancelablePromise<ExportedAsset> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/exports/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this exported asset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns ExportedAsset
     * @throws ApiError
     */
    public environmentsExportsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<ExportedAsset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/exports/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this exported asset.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsExportsContentRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/exports/{id}/content/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedFileSystemList
     * @throws ApiError
     */
    public environmentsFileSystemList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedFileSystemList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/file_system/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystem
     * @throws ApiError
     */
    public environmentsFileSystemCreate(
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/file_system/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FileSystem
     * @throws ApiError
     */
    public environmentsFileSystemRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystem
     * @throws ApiError
     */
    public environmentsFileSystemUpdate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystem
     * @throws ApiError
     */
    public environmentsFileSystemPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedFileSystem,
    ): CancelablePromise<FileSystem> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsFileSystemDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/file_system/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Get count of all files in a folder.
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsFileSystemCountCreate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/file_system/{id}/count/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsFileSystemLinkCreate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/file_system/{id}/link/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsFileSystemMoveCreate(
        id: string,
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/file_system/{id}/move/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get count of all files in a folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsFileSystemCountByPathCreate(
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/file_system/count_by_path/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsFileSystemLogViewCreate(
        projectId: string,
        requestBody: FileSystem,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/file_system/log_view/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsFileSystemUnfiledRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/file_system/unfiled/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedFileSystemShortcutList
     * @throws ApiError
     */
    public environmentsFileSystemShortcutList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedFileSystemShortcutList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/file_system_shortcut/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public environmentsFileSystemShortcutCreate(
        projectId: string,
        requestBody: FileSystemShortcut,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/file_system_shortcut/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public environmentsFileSystemShortcutRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public environmentsFileSystemShortcutUpdate(
        id: string,
        projectId: string,
        requestBody: FileSystemShortcut,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns FileSystemShortcut
     * @throws ApiError
     */
    public environmentsFileSystemShortcutPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedFileSystemShortcut,
    ): CancelablePromise<FileSystemShortcut> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this file system shortcut.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsFileSystemShortcutDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/file_system_shortcut/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * List all groups of a specific group type. You must pass ?group_type_index= in the URL. To get a list of valid group types, call /api/:project_id/groups_types/
     * @param groupTypeIndex Specify the group type to list
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param search Search the group name
     * @param cursor The pagination cursor value.
     * @returns PaginatedGroupList
     * @throws ApiError
     */
    public environmentsGroupsList(
        groupTypeIndex: number,
        projectId: string,
        search: string,
        cursor?: string,
    ): CancelablePromise<PaginatedGroupList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/groups/',
            path: {
                'project_id': projectId,
            },
            query: {
                'cursor': cursor,
                'group_type_index': groupTypeIndex,
                'search': search,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Group
     * @throws ApiError
     */
    public environmentsGroupsCreate(
        projectId: string,
        requestBody: CreateGroup,
    ): CancelablePromise<Group> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/groups/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param groupTypeIndex Specify the group type to find
     * @param id Specify the id of the user to find groups for
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsGroupsActivityRetrieve(
        groupTypeIndex: number,
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/groups/activity/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_type_index': groupTypeIndex,
                'id': id,
            },
        });
    }
    /**
     * @param groupKey Specify the key of the group to find
     * @param groupTypeIndex Specify the group type to find
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsGroupsDeletePropertyCreate(
        groupKey: string,
        groupTypeIndex: number,
        projectId: string,
        requestBody: Group,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/groups/delete_property/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_key': groupKey,
                'group_type_index': groupTypeIndex,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param groupKey Specify the key of the group to find
     * @param groupTypeIndex Specify the group type to find
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsGroupsFindRetrieve(
        groupKey: string,
        groupTypeIndex: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/groups/find/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_key': groupKey,
                'group_type_index': groupTypeIndex,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsGroupsPropertyDefinitionsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/groups/property_definitions/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsGroupsPropertyValuesRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/groups/property_values/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param groupTypeIndex Specify the group type to find
     * @param id Specify the id of the user to find groups for
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsGroupsRelatedRetrieve(
        groupTypeIndex: number,
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/groups/related/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_type_index': groupTypeIndex,
                'id': id,
            },
        });
    }
    /**
     * @param groupKey Specify the key of the group to find
     * @param groupTypeIndex Specify the group type to find
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsGroupsUpdatePropertyCreate(
        groupKey: string,
        groupTypeIndex: number,
        projectId: string,
        requestBody: Group,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/groups/update_property/',
            path: {
                'project_id': projectId,
            },
            query: {
                'group_key': groupKey,
                'group_type_index': groupTypeIndex,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param createdAt
     * @param createdBy
     * @param enabled
     * @param id
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @param type Multiple values may be separated by commas.
     * @param updatedAt
     * @returns PaginatedHogFunctionMinimalList
     * @throws ApiError
     */
    public environmentsHogFunctionsList(
        projectId: string,
        createdAt?: string,
        createdBy?: number,
        enabled?: boolean,
        id?: string,
        limit?: number,
        offset?: number,
        search?: string,
        type?: Array<string>,
        updatedAt?: string,
    ): CancelablePromise<PaginatedHogFunctionMinimalList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/hog_functions/',
            path: {
                'project_id': projectId,
            },
            query: {
                'created_at': createdAt,
                'created_by': createdBy,
                'enabled': enabled,
                'id': id,
                'limit': limit,
                'offset': offset,
                'search': search,
                'type': type,
                'updated_at': updatedAt,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns HogFunction
     * @throws ApiError
     */
    public environmentsHogFunctionsCreate(
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/hog_functions/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns HogFunction
     * @throws ApiError
     */
    public environmentsHogFunctionsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/hog_functions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns HogFunction
     * @throws ApiError
     */
    public environmentsHogFunctionsUpdate(
        id: string,
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/hog_functions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns HogFunction
     * @throws ApiError
     */
    public environmentsHogFunctionsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedHogFunction,
    ): CancelablePromise<HogFunction> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/hog_functions/{id}/',
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
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsHogFunctionsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/hog_functions/{id}/',
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
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsHogFunctionsBroadcastCreate(
        id: string,
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/hog_functions/{id}/broadcast/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsHogFunctionsInvocationsCreate(
        id: string,
        projectId: string,
        requestBody?: HogFunction,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/hog_functions/{id}/invocations/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsHogFunctionsLogsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/hog_functions/{id}/logs/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsHogFunctionsMetricsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/hog_functions/{id}/metrics/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this hog function.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsHogFunctionsMetricsTotalsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/hog_functions/{id}/metrics/totals/',
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
    public environmentsHogFunctionsIconRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/hog_functions/icon/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsHogFunctionsIconsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/hog_functions/icons/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Update the execution order of multiple HogFunctions.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsHogFunctionsRearrangePartialUpdate(
        projectId: string,
        requestBody?: PatchedHogFunction,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/hog_functions/rearrange/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param basic Return basic insight metadata only (no results, faster).
     * @param createdBy
     * @param format
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param refresh
     * Whether to refresh the retrieved insights, how aggresively, and if sync or async:
     * - `'force_cache'` - return cached data or a cache miss; always completes immediately as it never calculates
     * - `'blocking'` - calculate synchronously (returning only when the query is done), UNLESS there are very fresh results in the cache
     * - `'async'` - kick off background calculation (returning immediately with a query status), UNLESS there are very fresh results in the cache
     * - `'lazy_async'` - kick off background calculation, UNLESS there are somewhat fresh results in the cache
     * - `'force_blocking'` - calculate synchronously, even if fresh results are already cached
     * - `'force_async'` - kick off background calculation, even if fresh results are already cached
     * Background calculation can be tracked using the `query_status` response field.
     * @param shortId
     * @returns PaginatedInsightList
     * @throws ApiError
     */
    public environmentsInsightsList(
        projectId: string,
        basic?: boolean,
        createdBy?: number,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        refresh: 'async' | 'async_except_on_cache_miss' | 'blocking' | 'force_async' | 'force_blocking' | 'force_cache' | 'lazy_async' = 'force_cache',
        shortId?: string,
    ): CancelablePromise<PaginatedInsightList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/insights/',
            path: {
                'project_id': projectId,
            },
            query: {
                'basic': basic,
                'created_by': createdBy,
                'format': format,
                'limit': limit,
                'offset': offset,
                'refresh': refresh,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public environmentsInsightsCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/insights/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param insightId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsInsightsSharingList(
        insightId: number,
        projectId: string,
    ): CancelablePromise<Array<SharingConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/insights/{insight_id}/sharing/',
            path: {
                'insight_id': insightId,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create a new password for the sharing configuration.
     * @param insightId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsInsightsSharingPasswordsCreate(
        insightId: number,
        projectId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/insights/{insight_id}/sharing/passwords/',
            path: {
                'insight_id': insightId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a password from the sharing configuration.
     * @param insightId
     * @param passwordId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsInsightsSharingPasswordsDestroy(
        insightId: number,
        passwordId: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/insights/{insight_id}/sharing/passwords/{password_id}/',
            path: {
                'insight_id': insightId,
                'password_id': passwordId,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param insightId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsInsightsSharingRefreshCreate(
        insightId: number,
        projectId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/insights/{insight_id}/sharing/refresh/',
            path: {
                'insight_id': insightId,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param fromDashboard
     * Only if loading an insight in the context of a dashboard: The relevant dashboard's ID.
     * When set, the specified dashboard's filters and date range override will be applied.
     * @param refresh
     * Whether to refresh the insight, how aggresively, and if sync or async:
     * - `'force_cache'` - return cached data or a cache miss; always completes immediately as it never calculates
     * - `'blocking'` - calculate synchronously (returning only when the query is done), UNLESS there are very fresh results in the cache
     * - `'async'` - kick off background calculation (returning immediately with a query status), UNLESS there are very fresh results in the cache
     * - `'lazy_async'` - kick off background calculation, UNLESS there are somewhat fresh results in the cache
     * - `'force_blocking'` - calculate synchronously, even if fresh results are already cached
     * - `'force_async'` - kick off background calculation, even if fresh results are already cached
     * Background calculation can be tracked using the `query_status` response field.
     * @returns Insight
     * @throws ApiError
     */
    public environmentsInsightsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        fromDashboard?: number,
        refresh: 'async' | 'async_except_on_cache_miss' | 'blocking' | 'force_async' | 'force_blocking' | 'force_cache' | 'lazy_async' = 'force_cache',
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
                'from_dashboard': fromDashboard,
                'refresh': refresh,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public environmentsInsightsUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Insight
     * @throws ApiError
     */
    public environmentsInsightsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: PatchedInsight,
    ): CancelablePromise<Insight> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns void
     * @throws ApiError
     */
    public environmentsInsightsDestroy(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/insights/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this insight.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsInsightsActivityRetrieve2(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/insights/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsInsightsActivityRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/insights/activity/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsInsightsCancelCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/insights/cancel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsInsightsMyLastViewedRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/insights/my_last_viewed/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * Update insight view timestamps.
     * Expects: {"insight_ids": [1, 2, 3, ...]}
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsInsightsViewedCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Insight,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/insights/viewed/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedIntegrationList
     * @throws ApiError
     */
    public environmentsIntegrationsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedIntegrationList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Integration
     * @throws ApiError
     */
    public environmentsIntegrationsCreate(
        projectId: string,
        requestBody: Integration,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/integrations/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Integration
     * @throws ApiError
     */
    public environmentsIntegrationsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Integration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsIntegrationsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/integrations/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsChannelsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/channels/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsClickupListsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/clickup_lists/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsClickupSpacesRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/clickup_spaces/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsClickupWorkspacesRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/clickup_workspaces/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsEmailVerifyCreate(
        id: number,
        projectId: string,
        requestBody: Integration,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/integrations/{id}/email/verify/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsGithubReposRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/github_repos/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsGoogleAccessibleAccountsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/google_accessible_accounts/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsGoogleConversionActionsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/google_conversion_actions/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsLinearTeamsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/linear_teams/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsLinkedinAdsAccountsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/linkedin_ads_accounts/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsLinkedinAdsConversionRulesRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/linkedin_ads_conversion_rules/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this integration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIntegrationsTwilioPhoneNumbersRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/{id}/twilio_phone_numbers/',
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
    public environmentsIntegrationsAuthorizeRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/integrations/authorize/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsLogsAttributesRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/logs/attributes/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsLogsQueryCreate(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/logs/query/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsLogsSparklineCreate(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/logs/sparkline/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsLogsValuesRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/logs/values/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsMaxToolsCreateAndQueryInsightCreate(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/max_tools/create_and_query_insight/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPersistedFolderList
     * @throws ApiError
     */
    public environmentsPersistedFolderList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPersistedFolderList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persisted_folder/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PersistedFolder
     * @throws ApiError
     */
    public environmentsPersistedFolderCreate(
        projectId: string,
        requestBody: PersistedFolder,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persisted_folder/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns PersistedFolder
     * @throws ApiError
     */
    public environmentsPersistedFolderRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PersistedFolder
     * @throws ApiError
     */
    public environmentsPersistedFolderUpdate(
        id: string,
        projectId: string,
        requestBody: PersistedFolder,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns PersistedFolder
     * @throws ApiError
     */
    public environmentsPersistedFolderPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedPersistedFolder,
    ): CancelablePromise<PersistedFolder> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this Persisted Folder.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsPersistedFolderDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/persisted_folder/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param distinctId Filter list by distinct id.
     * @param email Filter persons by email (exact match)
     * @param format
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param properties Filter Persons by person properties.
     * @param search Search persons, either by email (full text search) or distinct_id (exact match).
     * @returns PaginatedPersonList
     * @throws ApiError
     */
    public environmentsPersonsList(
        projectId: string,
        distinctId?: string,
        email?: string,
        format?: 'csv' | 'json',
        limit?: number,
        offset?: number,
        properties?: Array<Property>,
        search?: string,
    ): CancelablePromise<PaginatedPersonList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/',
            path: {
                'project_id': projectId,
            },
            query: {
                'distinct_id': distinctId,
                'email': email,
                'format': format,
                'limit': limit,
                'offset': offset,
                'properties': properties,
                'search': search,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns Person
     * @throws ApiError
     */
    public environmentsPersonsRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<Person> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * Only for setting properties on the person. "properties" from the request data will be updated via a "$set" event.
     * This means that only the properties listed will be updated, but other properties won't be removed nor updated.
     * If you would like to remove a property use the `delete_property` endpoint.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public environmentsPersonsUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<Person> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/persons/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns Person
     * @throws ApiError
     */
    public environmentsPersonsPartialUpdate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: PatchedPerson,
    ): CancelablePromise<Person> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/persons/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Use this endpoint to delete individual persons. For bulk deletion, use the bulk_delete endpoint instead.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param deleteEvents If true, a task to delete all events associated with this person will be created and queued. The task does not run immediately and instead is batched together and at 5AM UTC every Sunday
     * @param format
     * @returns void
     * @throws ApiError
     */
    public environmentsPersonsDestroy(
        id: number,
        projectId: string,
        deleteEvents: boolean = false,
        format?: 'csv' | 'json',
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/persons/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'delete_events': deleteEvents,
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsActivityRetrieve2(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * Queue deletion of all events associated with this person. The task runs during non-peak hours.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsDeleteEventsCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/{id}/delete_events/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param unset Specify the property key to delete
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsDeletePropertyCreate(
        unset: string,
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/{id}/delete_property/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                '$unset': unset,
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Queue deletion of all recordings associated with this person.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsDeleteRecordingsCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/{id}/delete_recordings/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsPropertiesTimelineRetrieve(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/{id}/properties_timeline/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsSplitCreate(
        id: number,
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/{id}/split/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param id A unique integer value identifying this person.
     * @param key Specify the property key
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param value Specify the property value
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsUpdatePropertyCreate(
        id: number,
        key: string,
        projectId: string,
        value: any,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/{id}/update_property/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            query: {
                'format': format,
                'key': key,
                'value': value,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsActivityRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/activity/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint allows you to bulk delete persons, either by the PostHog person IDs or by distinct IDs. You can pass in a maximum of 1000 IDs per call.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param deleteEvents If true, a task to delete all events associated with this person will be created and queued. The task does not run immediately and instead is batched together and at 5AM UTC every Sunday
     * @param distinctIds A list of distinct IDs, up to 1000 of them. We'll delete all persons associated with those distinct IDs.
     * @param format
     * @param ids A list of PostHog person IDs, up to 1000 of them. We'll delete all the persons listed.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsBulkDeleteCreate(
        projectId: string,
        deleteEvents: boolean = false,
        distinctIds?: Record<string, any>,
        format?: 'csv' | 'json',
        ids?: Record<string, any>,
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/bulk_delete/',
            path: {
                'project_id': projectId,
            },
            query: {
                'delete_events': deleteEvents,
                'distinct_ids': distinctIds,
                'format': format,
                'ids': ids,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsCohortsRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/cohorts/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsFunnelRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsFunnelCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/funnel/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsFunnelCorrelationRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsFunnelCorrelationCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/funnel/correlation/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsLifecycleRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/lifecycle/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * Reset a distinct_id for a deleted person. This allows the distinct_id to be used again.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsResetPersonDistinctIdCreate(
        projectId: string,
        format?: 'csv' | 'json',
        requestBody?: Person,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/persons/reset_person_distinct_id/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsStickinessRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/stickiness/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsTrendsRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/trends/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * This endpoint is meant for reading and deleting persons. To create or update persons, we recommend using the [capture API](https://posthog.com/docs/api/capture), the `$set` and `$unset` [properties](https://posthog.com/docs/product-analytics/user-properties), or one of our SDKs.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param format
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsPersonsValuesRetrieve(
        projectId: string,
        format?: 'csv' | 'json',
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/persons/values/',
            path: {
                'project_id': projectId,
            },
            query: {
                'format': format,
            },
        });
    }
    /**
     * @param pluginConfigId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedPluginLogEntryList
     * @throws ApiError
     */
    public environmentsPluginConfigsLogsList(
        pluginConfigId: string,
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedPluginLogEntryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/plugin_configs/{plugin_config_id}/logs/',
            path: {
                'plugin_config_id': pluginConfigId,
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns QueryResponseAlternative
     * @throws ApiError
     */
    public environmentsQueryCreate(
        projectId: string,
        requestBody: QueryRequest,
    ): CancelablePromise<QueryResponseAlternative> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/query/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * (Experimental)
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns QueryStatusResponse
     * @throws ApiError
     */
    public environmentsQueryRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<QueryStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/query/{id}/',
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
    public environmentsQueryDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/query/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Get query log details from query_log_archive table for a specific query_id, the query must have been issued in last 24 hours.
     * @param id
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any
     * @throws ApiError
     */
    public environmentsQueryLogRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Record<string, any>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/query/{id}/log/',
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
    public environmentsQueryCheckAuthForAsyncCreate(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/query/check_auth_for_async/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsQueryDraftSqlRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/query/draft_sql/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * Upgrades a query without executing it. Returns a query with all nodes migrated to the latest version.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns QueryUpgradeResponse
     * @throws ApiError
     */
    public environmentsQueryUpgradeCreate(
        projectId: string,
        requestBody: QueryUpgradeRequest,
    ): CancelablePromise<QueryUpgradeResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/query/upgrade/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Override list to include synthetic playlists
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param createdBy
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param shortId
     * @returns PaginatedSessionRecordingPlaylistList
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsList(
        projectId: string,
        createdBy?: number,
        limit?: number,
        offset?: number,
        shortId?: string,
    ): CancelablePromise<PaginatedSessionRecordingPlaylistList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/session_recording_playlists/',
            path: {
                'project_id': projectId,
            },
            query: {
                'created_by': createdBy,
                'limit': limit,
                'offset': offset,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsCreate(
        projectId: string,
        requestBody?: SessionRecordingPlaylist,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/session_recording_playlists/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsRetrieve(
        projectId: string,
        shortId: string,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @param requestBody
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsUpdate(
        projectId: string,
        shortId: string,
        requestBody?: SessionRecordingPlaylist,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @param requestBody
     * @returns SessionRecordingPlaylist
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsPartialUpdate(
        projectId: string,
        shortId: string,
        requestBody?: PatchedSessionRecordingPlaylist,
    ): CancelablePromise<SessionRecordingPlaylist> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Hard delete of this model is not allowed. Use a patch API call to set "deleted" to true
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns void
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsDestroy(
        projectId: string,
        shortId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/session_recording_playlists/{short_id}/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
            errors: {
                405: `No response body`,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param shortId
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsRecordingsRetrieve(
        projectId: string,
        shortId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/session_recording_playlists/{short_id}/recordings/',
            path: {
                'project_id': projectId,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param sessionRecordingId
     * @param shortId
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsRecordingsCreate(
        projectId: string,
        sessionRecordingId: string,
        shortId: string,
        requestBody?: SessionRecordingPlaylist,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/',
            path: {
                'project_id': projectId,
                'session_recording_id': sessionRecordingId,
                'short_id': shortId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param sessionRecordingId
     * @param shortId
     * @returns void
     * @throws ApiError
     */
    public environmentsSessionRecordingPlaylistsRecordingsDestroy(
        projectId: string,
        sessionRecordingId: string,
        shortId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}/',
            path: {
                'project_id': projectId,
                'session_recording_id': sessionRecordingId,
                'short_id': shortId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSessionRecordingList
     * @throws ApiError
     */
    public environmentsSessionRecordingsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedSessionRecordingList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/session_recordings/',
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
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns SessionRecording
     * @throws ApiError
     */
    public environmentsSessionRecordingsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionRecording
     * @throws ApiError
     */
    public environmentsSessionRecordingsUpdate(
        id: string,
        projectId: string,
        requestBody?: SessionRecording,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionRecording
     * @throws ApiError
     */
    public environmentsSessionRecordingsPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedSessionRecording,
    ): CancelablePromise<SessionRecording> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A UUID string identifying this session recording.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsSessionRecordingsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/session_recordings/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsSessionRecordingsSharingList(
        projectId: string,
        recordingId: string,
    ): CancelablePromise<Array<SharingConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/session_recordings/{recording_id}/sharing/',
            path: {
                'project_id': projectId,
                'recording_id': recordingId,
            },
        });
    }
    /**
     * Create a new password for the sharing configuration.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsSessionRecordingsSharingPasswordsCreate(
        projectId: string,
        recordingId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/session_recordings/{recording_id}/sharing/passwords/',
            path: {
                'project_id': projectId,
                'recording_id': recordingId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a password from the sharing configuration.
     * @param passwordId
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @returns void
     * @throws ApiError
     */
    public environmentsSessionRecordingsSharingPasswordsDestroy(
        passwordId: string,
        projectId: string,
        recordingId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/session_recordings/{recording_id}/sharing/passwords/{password_id}/',
            path: {
                'password_id': passwordId,
                'project_id': projectId,
                'recording_id': recordingId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param recordingId
     * @param requestBody
     * @returns SharingConfiguration
     * @throws ApiError
     */
    public environmentsSessionRecordingsSharingRefreshCreate(
        projectId: string,
        recordingId: string,
        requestBody?: SharingConfiguration,
    ): CancelablePromise<SharingConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/session_recordings/{recording_id}/sharing/refresh/',
            path: {
                'project_id': projectId,
                'recording_id': recordingId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Generate AI summary for a group of session recordings to find patterns and generate a notebook.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionSummaries
     * @throws ApiError
     */
    public createSessionSummaries(
        projectId: string,
        requestBody: SessionSummaries,
    ): CancelablePromise<SessionSummaries> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/session_summaries/create_session_summaries/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Generate AI individual summary for each session, without grouping.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns SessionSummaries
     * @throws ApiError
     */
    public createSessionSummariesIndividually(
        projectId: string,
        requestBody: SessionSummaries,
    ): CancelablePromise<SessionSummaries> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/session_summaries/create_session_summaries_individually/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsSessionsPropertyDefinitionsRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/sessions/property_definitions/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsSessionsValuesRetrieve(
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/sessions/values/',
            path: {
                'project_id': projectId,
            },
        });
    }
    /**
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedSubscriptionList
     * @throws ApiError
     */
    public environmentsSubscriptionsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedSubscriptionList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/subscriptions/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Subscription
     * @throws ApiError
     */
    public environmentsSubscriptionsCreate(
        projectId: string,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/subscriptions/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Subscription
     * @throws ApiError
     */
    public environmentsSubscriptionsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/subscriptions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Subscription
     * @throws ApiError
     */
    public environmentsSubscriptionsUpdate(
        id: number,
        projectId: string,
        requestBody: Subscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/subscriptions/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Subscription
     * @throws ApiError
     */
    public environmentsSubscriptionsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedSubscription,
    ): CancelablePromise<Subscription> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/subscriptions/{id}/',
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
     * @param id A unique integer value identifying this subscription.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsSubscriptionsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/subscriptions/{id}/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedUserInterviewList
     * @throws ApiError
     */
    public environmentsUserInterviewsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedUserInterviewList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/user_interviews/',
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
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns UserInterview
     * @throws ApiError
     */
    public environmentsUserInterviewsCreate(
        projectId: string,
        formData: UserInterview,
    ): CancelablePromise<UserInterview> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/user_interviews/',
            path: {
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id A UUID string identifying this user interview.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns UserInterview
     * @throws ApiError
     */
    public environmentsUserInterviewsRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<UserInterview> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/user_interviews/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * @param id A UUID string identifying this user interview.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns UserInterview
     * @throws ApiError
     */
    public environmentsUserInterviewsUpdate(
        id: string,
        projectId: string,
        formData: UserInterview,
    ): CancelablePromise<UserInterview> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/user_interviews/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id A UUID string identifying this user interview.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns UserInterview
     * @throws ApiError
     */
    public environmentsUserInterviewsPartialUpdate(
        id: string,
        projectId: string,
        formData?: PatchedUserInterview,
    ): CancelablePromise<UserInterview> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/user_interviews/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param id A UUID string identifying this user interview.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsUserInterviewsDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/user_interviews/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param page A page number within the paginated result set.
     * @param search A search term.
     * @returns PaginatedDataWarehouseSavedQueryList
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesList(
        projectId: string,
        page?: number,
        search?: string,
    ): CancelablePromise<PaginatedDataWarehouseSavedQueryList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/warehouse_saved_queries/',
            path: {
                'project_id': projectId,
            },
            query: {
                'page': page,
                'search': search,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesCreate(
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_saved_queries/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesUpdate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedDataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesActivityRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Return the ancestors of this saved query.
     *
     * By default, we return the immediate parents. The `level` parameter can be used to
     * look further back into the ancestor tree. If `level` overshoots (i.e. points to only
     * ancestors beyond the root), we return an empty list.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesAncestorsCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/ancestors/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Cancel a running saved query workflow.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesCancelCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/cancel/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Return the descendants of this saved query.
     *
     * By default, we return the immediate children. The `level` parameter can be used to
     * look further ahead into the descendants tree. If `level` overshoots (i.e. points to only
     * descendants further than a leaf), we return an empty list.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesDescendantsCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/descendants/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Undo materialization, revert back to the original view.
     * (i.e. delete the materialized table and the schedule)
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesRevertMaterializationCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/revert_materialization/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Run this saved query.
     * @param id A UUID string identifying this data warehouse saved query.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns DataWarehouseSavedQuery
     * @throws ApiError
     */
    public environmentsWarehouseSavedQueriesRunCreate(
        id: string,
        projectId: string,
        requestBody: DataWarehouseSavedQuery,
    ): CancelablePromise<DataWarehouseSavedQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_saved_queries/{id}/run/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @param search A search term.
     * @returns PaginatedTableList
     * @throws ApiError
     */
    public environmentsWarehouseTablesList(
        projectId: string,
        limit?: number,
        offset?: number,
        search?: string,
    ): CancelablePromise<PaginatedTableList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/warehouse_tables/',
            path: {
                'project_id': projectId,
            },
            query: {
                'limit': limit,
                'offset': offset,
                'search': search,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Table
     * @throws ApiError
     */
    public environmentsWarehouseTablesCreate(
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_tables/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Table
     * @throws ApiError
     */
    public environmentsWarehouseTablesRetrieve(
        id: string,
        projectId: string,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/warehouse_tables/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Table
     * @throws ApiError
     */
    public environmentsWarehouseTablesUpdate(
        id: string,
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/environments/{project_id}/warehouse_tables/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Table
     * @throws ApiError
     */
    public environmentsWarehouseTablesPartialUpdate(
        id: string,
        projectId: string,
        requestBody?: PatchedTable,
    ): CancelablePromise<Table> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/environments/{project_id}/warehouse_tables/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsWarehouseTablesDestroy(
        id: string,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/environments/{project_id}/warehouse_tables/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsWarehouseTablesRefreshSchemaCreate(
        id: string,
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_tables/{id}/refresh_schema/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param id A UUID string identifying this data warehouse table.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsWarehouseTablesUpdateSchemaCreate(
        id: string,
        projectId: string,
        requestBody: Table,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_tables/{id}/update_schema/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Create, Read, Update and Delete Warehouse Tables.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param formData
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsWarehouseTablesFileCreate(
        projectId: string,
        formData: Table,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/environments/{project_id}/warehouse_tables/file/',
            path: {
                'project_id': projectId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param pathname Filter web vitals by pathname
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsWebVitalsRetrieve(
        pathname: string,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/environments/{project_id}/web_vitals/',
            path: {
                'project_id': projectId,
            },
            query: {
                'pathname': pathname,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param limit Number of results to return per page.
     * @param offset The initial index from which to return the results.
     * @returns PaginatedTeamBasicList
     * @throws ApiError
     */
    public environmentsList(
        projectId: string,
        limit?: number,
        offset?: number,
    ): CancelablePromise<PaginatedTeamBasicList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/environments/',
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
     * Projects for the current organization.
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public environmentsCreate(
        projectId: string,
        requestBody?: Team,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/environments/',
            path: {
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns Team
     * @throws ApiError
     */
    public environmentsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/environments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public environmentsUpdate(
        id: number,
        projectId: string,
        requestBody?: Team,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/projects/{project_id}/environments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns Team
     * @throws ApiError
     */
    public environmentsPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<Team> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/environments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/environments/{id}/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsActivityRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/environments/{id}/activity/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsAddProductIntentPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/environments/{id}/add_product_intent/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsCompleteProductOnboardingPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/environments/{id}/complete_product_onboarding/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Manage default evaluation tags for a team
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsDefaultEvaluationTagsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/environments/{id}/default_evaluation_tags/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Manage default evaluation tags for a team
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsDefaultEvaluationTagsCreate(
        id: number,
        projectId: string,
        requestBody?: Team,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/projects/{project_id}/environments/{id}/default_evaluation_tags/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Manage default evaluation tags for a team
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns void
     * @throws ApiError
     */
    public environmentsDefaultEvaluationTagsDestroy(
        id: number,
        projectId: string,
    ): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/projects/{project_id}/environments/{id}/default_evaluation_tags/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsDeleteSecretTokenBackupPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/environments/{id}/delete_secret_token_backup/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsEventIngestionRestrictionsRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/environments/{id}/event_ingestion_restrictions/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsIsGeneratingDemoDataRetrieve(
        id: number,
        projectId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/projects/{project_id}/environments/{id}/is_generating_demo_data/',
            path: {
                'id': id,
                'project_id': projectId,
            },
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsResetTokenPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/environments/{id}/reset_token/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Projects for the current organization.
     * @param id A unique integer value identifying this environment (aka team).
     * @param projectId Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
     * @param requestBody
     * @returns any No response body
     * @throws ApiError
     */
    public environmentsRotateSecretTokenPartialUpdate(
        id: number,
        projectId: string,
        requestBody?: PatchedTeam,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/api/projects/{project_id}/environments/{id}/rotate_secret_token/',
            path: {
                'id': id,
                'project_id': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
