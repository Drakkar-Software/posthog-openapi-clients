/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ActionsService } from './services/ActionsService';
import { ActivityLogService } from './services/ActivityLogService';
import { AgentsService } from './services/AgentsService';
import { AnnotationsService } from './services/AnnotationsService';
import { AppMetricsService } from './services/AppMetricsService';
import { BatchExportsService } from './services/BatchExportsService';
import { CohortsService } from './services/CohortsService';
import { DashboardsService } from './services/DashboardsService';
import { DashboardTemplatesService } from './services/DashboardTemplatesService';
import { DataColorThemesService } from './services/DataColorThemesService';
import { DatasetItemsService } from './services/DatasetItemsService';
import { DatasetsService } from './services/DatasetsService';
import { DomainsService } from './services/DomainsService';
import { EarlyAccessFeatureService } from './services/EarlyAccessFeatureService';
import { EndpointsService } from './services/EndpointsService';
import { EnvironmentsService } from './services/EnvironmentsService';
import { EnvironmentsRollbackService } from './services/EnvironmentsRollbackService';
import { EventDefinitionsService } from './services/EventDefinitionsService';
import { EventsService } from './services/EventsService';
import { ExperimentHoldoutsService } from './services/ExperimentHoldoutsService';
import { ExperimentsService } from './services/ExperimentsService';
import { ExperimentSavedMetricsService } from './services/ExperimentSavedMetricsService';
import { ExportsService } from './services/ExportsService';
import { FeatureFlagsService } from './services/FeatureFlagsService';
import { FileSystemService } from './services/FileSystemService';
import { FileSystemShortcutService } from './services/FileSystemShortcutService';
import { FlagValueService } from './services/FlagValueService';
import { GroupsService } from './services/GroupsService';
import { GroupsTypesService } from './services/GroupsTypesService';
import { HogFunctionsService } from './services/HogFunctionsService';
import { InsightsService } from './services/InsightsService';
import { IntegrationsService } from './services/IntegrationsService';
import { InvitesService } from './services/InvitesService';
import { LlmGatewayService } from './services/LlmGatewayService';
import { LogsService } from './services/LogsService';
import { MembersService } from './services/MembersService';
import { NotebooksService } from './services/NotebooksService';
import { OrganizationsService } from './services/OrganizationsService';
import { PersistedFolderService } from './services/PersistedFolderService';
import { PersonsService } from './services/PersonsService';
import { PluginConfigsService } from './services/PluginConfigsService';
import { ProjectsService } from './services/ProjectsService';
import { PropertyDefinitionsService } from './services/PropertyDefinitionsService';
import { ProxyRecordsService } from './services/ProxyRecordsService';
import { QueryService } from './services/QueryService';
import { RolesService } from './services/RolesService';
import { SessionRecordingPlaylistsService } from './services/SessionRecordingPlaylistsService';
import { SessionRecordingsService } from './services/SessionRecordingsService';
import { SessionsService } from './services/SessionsService';
import { SubscriptionsService } from './services/SubscriptionsService';
import { SurveysService } from './services/SurveysService';
import { TaskRunsService } from './services/TaskRunsService';
import { TasksService } from './services/TasksService';
import { UsersService } from './services/UsersService';
import { WarehouseSavedQueriesService } from './services/WarehouseSavedQueriesService';
import { WarehouseTablesService } from './services/WarehouseTablesService';
import { WebAnalyticsService } from './services/WebAnalyticsService';
import { WebExperimentsService } from './services/WebExperimentsService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PosthogAPIClient {
    public readonly actions: ActionsService;
    public readonly activityLog: ActivityLogService;
    public readonly agents: AgentsService;
    public readonly annotations: AnnotationsService;
    public readonly appMetrics: AppMetricsService;
    public readonly batchExports: BatchExportsService;
    public readonly cohorts: CohortsService;
    public readonly dashboards: DashboardsService;
    public readonly dashboardTemplates: DashboardTemplatesService;
    public readonly dataColorThemes: DataColorThemesService;
    public readonly datasetItems: DatasetItemsService;
    public readonly datasets: DatasetsService;
    public readonly domains: DomainsService;
    public readonly earlyAccessFeature: EarlyAccessFeatureService;
    public readonly endpoints: EndpointsService;
    public readonly environments: EnvironmentsService;
    public readonly environmentsRollback: EnvironmentsRollbackService;
    public readonly eventDefinitions: EventDefinitionsService;
    public readonly events: EventsService;
    public readonly experimentHoldouts: ExperimentHoldoutsService;
    public readonly experiments: ExperimentsService;
    public readonly experimentSavedMetrics: ExperimentSavedMetricsService;
    public readonly exports: ExportsService;
    public readonly featureFlags: FeatureFlagsService;
    public readonly fileSystem: FileSystemService;
    public readonly fileSystemShortcut: FileSystemShortcutService;
    public readonly flagValue: FlagValueService;
    public readonly groups: GroupsService;
    public readonly groupsTypes: GroupsTypesService;
    public readonly hogFunctions: HogFunctionsService;
    public readonly insights: InsightsService;
    public readonly integrations: IntegrationsService;
    public readonly invites: InvitesService;
    public readonly llmGateway: LlmGatewayService;
    public readonly logs: LogsService;
    public readonly members: MembersService;
    public readonly notebooks: NotebooksService;
    public readonly organizations: OrganizationsService;
    public readonly persistedFolder: PersistedFolderService;
    public readonly persons: PersonsService;
    public readonly pluginConfigs: PluginConfigsService;
    public readonly projects: ProjectsService;
    public readonly propertyDefinitions: PropertyDefinitionsService;
    public readonly proxyRecords: ProxyRecordsService;
    public readonly query: QueryService;
    public readonly roles: RolesService;
    public readonly sessionRecordingPlaylists: SessionRecordingPlaylistsService;
    public readonly sessionRecordings: SessionRecordingsService;
    public readonly sessions: SessionsService;
    public readonly subscriptions: SubscriptionsService;
    public readonly surveys: SurveysService;
    public readonly taskRuns: TaskRunsService;
    public readonly tasks: TasksService;
    public readonly users: UsersService;
    public readonly warehouseSavedQueries: WarehouseSavedQueriesService;
    public readonly warehouseTables: WarehouseTablesService;
    public readonly webAnalytics: WebAnalyticsService;
    public readonly webExperiments: WebExperimentsService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.actions = new ActionsService(this.request);
        this.activityLog = new ActivityLogService(this.request);
        this.agents = new AgentsService(this.request);
        this.annotations = new AnnotationsService(this.request);
        this.appMetrics = new AppMetricsService(this.request);
        this.batchExports = new BatchExportsService(this.request);
        this.cohorts = new CohortsService(this.request);
        this.dashboards = new DashboardsService(this.request);
        this.dashboardTemplates = new DashboardTemplatesService(this.request);
        this.dataColorThemes = new DataColorThemesService(this.request);
        this.datasetItems = new DatasetItemsService(this.request);
        this.datasets = new DatasetsService(this.request);
        this.domains = new DomainsService(this.request);
        this.earlyAccessFeature = new EarlyAccessFeatureService(this.request);
        this.endpoints = new EndpointsService(this.request);
        this.environments = new EnvironmentsService(this.request);
        this.environmentsRollback = new EnvironmentsRollbackService(this.request);
        this.eventDefinitions = new EventDefinitionsService(this.request);
        this.events = new EventsService(this.request);
        this.experimentHoldouts = new ExperimentHoldoutsService(this.request);
        this.experiments = new ExperimentsService(this.request);
        this.experimentSavedMetrics = new ExperimentSavedMetricsService(this.request);
        this.exports = new ExportsService(this.request);
        this.featureFlags = new FeatureFlagsService(this.request);
        this.fileSystem = new FileSystemService(this.request);
        this.fileSystemShortcut = new FileSystemShortcutService(this.request);
        this.flagValue = new FlagValueService(this.request);
        this.groups = new GroupsService(this.request);
        this.groupsTypes = new GroupsTypesService(this.request);
        this.hogFunctions = new HogFunctionsService(this.request);
        this.insights = new InsightsService(this.request);
        this.integrations = new IntegrationsService(this.request);
        this.invites = new InvitesService(this.request);
        this.llmGateway = new LlmGatewayService(this.request);
        this.logs = new LogsService(this.request);
        this.members = new MembersService(this.request);
        this.notebooks = new NotebooksService(this.request);
        this.organizations = new OrganizationsService(this.request);
        this.persistedFolder = new PersistedFolderService(this.request);
        this.persons = new PersonsService(this.request);
        this.pluginConfigs = new PluginConfigsService(this.request);
        this.projects = new ProjectsService(this.request);
        this.propertyDefinitions = new PropertyDefinitionsService(this.request);
        this.proxyRecords = new ProxyRecordsService(this.request);
        this.query = new QueryService(this.request);
        this.roles = new RolesService(this.request);
        this.sessionRecordingPlaylists = new SessionRecordingPlaylistsService(this.request);
        this.sessionRecordings = new SessionRecordingsService(this.request);
        this.sessions = new SessionsService(this.request);
        this.subscriptions = new SubscriptionsService(this.request);
        this.surveys = new SurveysService(this.request);
        this.taskRuns = new TaskRunsService(this.request);
        this.tasks = new TasksService(this.request);
        this.users = new UsersService(this.request);
        this.warehouseSavedQueries = new WarehouseSavedQueriesService(this.request);
        this.warehouseTables = new WarehouseTablesService(this.request);
        this.webAnalytics = new WebAnalyticsService(this.request);
        this.webExperiments = new WebExperimentsService(this.request);
    }
}

