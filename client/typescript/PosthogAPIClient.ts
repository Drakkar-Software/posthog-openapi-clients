/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { ActionsService } from './services/ActionsService';
import { ActivityLogService } from './services/ActivityLogService';
import { AnnotationsService } from './services/AnnotationsService';
import { AppMetricsService } from './services/AppMetricsService';
import { BatchExportsService } from './services/BatchExportsService';
import { CohortsService } from './services/CohortsService';
import { DashboardsService } from './services/DashboardsService';
import { DashboardTemplatesService } from './services/DashboardTemplatesService';
import { DomainsService } from './services/DomainsService';
import { EarlyAccessFeatureService } from './services/EarlyAccessFeatureService';
import { EventDefinitionsService } from './services/EventDefinitionsService';
import { EventsService } from './services/EventsService';
import { ExperimentsService } from './services/ExperimentsService';
import { ExplicitMembersService } from './services/ExplicitMembersService';
import { ExportsService } from './services/ExportsService';
import { FeatureFlagsService } from './services/FeatureFlagsService';
import { FunnelService } from './services/FunnelService';
import { GroupsService } from './services/GroupsService';
import { GroupsTypesService } from './services/GroupsTypesService';
import { InsightsService } from './services/InsightsService';
import { InvitesService } from './services/InvitesService';
import { MembersService } from './services/MembersService';
import { NotebooksService } from './services/NotebooksService';
import { OrganizationsService } from './services/OrganizationsService';
import { PersonsService } from './services/PersonsService';
import { PipelineDestinationConfigsService } from './services/PipelineDestinationConfigsService';
import { PipelineDestinationsService } from './services/PipelineDestinationsService';
import { PipelineFrontendAppsService } from './services/PipelineFrontendAppsService';
import { PipelineFrontendAppsConfigsService } from './services/PipelineFrontendAppsConfigsService';
import { PipelineImportAppsService } from './services/PipelineImportAppsService';
import { PipelineImportAppsConfigsService } from './services/PipelineImportAppsConfigsService';
import { PipelineTransformationConfigsService } from './services/PipelineTransformationConfigsService';
import { PipelineTransformationsService } from './services/PipelineTransformationsService';
import { PluginConfigsService } from './services/PluginConfigsService';
import { PluginsService } from './services/PluginsService';
import { ProjectsService } from './services/ProjectsService';
import { PropertyDefinitionsService } from './services/PropertyDefinitionsService';
import { QueryService } from './services/QueryService';
import { RolesService } from './services/RolesService';
import { SessionRecordingPlaylistsService } from './services/SessionRecordingPlaylistsService';
import { SessionRecordingsService } from './services/SessionRecordingsService';
import { SubscriptionsService } from './services/SubscriptionsService';
import { SurveysService } from './services/SurveysService';
import { TrendService } from './services/TrendService';
import { UsersService } from './services/UsersService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class PosthogAPIClient {
    public readonly actions: ActionsService;
    public readonly activityLog: ActivityLogService;
    public readonly annotations: AnnotationsService;
    public readonly appMetrics: AppMetricsService;
    public readonly batchExports: BatchExportsService;
    public readonly cohorts: CohortsService;
    public readonly dashboards: DashboardsService;
    public readonly dashboardTemplates: DashboardTemplatesService;
    public readonly domains: DomainsService;
    public readonly earlyAccessFeature: EarlyAccessFeatureService;
    public readonly eventDefinitions: EventDefinitionsService;
    public readonly events: EventsService;
    public readonly experiments: ExperimentsService;
    public readonly explicitMembers: ExplicitMembersService;
    public readonly exports: ExportsService;
    public readonly featureFlags: FeatureFlagsService;
    public readonly funnel: FunnelService;
    public readonly groups: GroupsService;
    public readonly groupsTypes: GroupsTypesService;
    public readonly insights: InsightsService;
    public readonly invites: InvitesService;
    public readonly members: MembersService;
    public readonly notebooks: NotebooksService;
    public readonly organizations: OrganizationsService;
    public readonly persons: PersonsService;
    public readonly pipelineDestinationConfigs: PipelineDestinationConfigsService;
    public readonly pipelineDestinations: PipelineDestinationsService;
    public readonly pipelineFrontendApps: PipelineFrontendAppsService;
    public readonly pipelineFrontendAppsConfigs: PipelineFrontendAppsConfigsService;
    public readonly pipelineImportApps: PipelineImportAppsService;
    public readonly pipelineImportAppsConfigs: PipelineImportAppsConfigsService;
    public readonly pipelineTransformationConfigs: PipelineTransformationConfigsService;
    public readonly pipelineTransformations: PipelineTransformationsService;
    public readonly pluginConfigs: PluginConfigsService;
    public readonly plugins: PluginsService;
    public readonly projects: ProjectsService;
    public readonly propertyDefinitions: PropertyDefinitionsService;
    public readonly query: QueryService;
    public readonly roles: RolesService;
    public readonly sessionRecordingPlaylists: SessionRecordingPlaylistsService;
    public readonly sessionRecordings: SessionRecordingsService;
    public readonly subscriptions: SubscriptionsService;
    public readonly surveys: SurveysService;
    public readonly trend: TrendService;
    public readonly users: UsersService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? 'null',
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
        this.annotations = new AnnotationsService(this.request);
        this.appMetrics = new AppMetricsService(this.request);
        this.batchExports = new BatchExportsService(this.request);
        this.cohorts = new CohortsService(this.request);
        this.dashboards = new DashboardsService(this.request);
        this.dashboardTemplates = new DashboardTemplatesService(this.request);
        this.domains = new DomainsService(this.request);
        this.earlyAccessFeature = new EarlyAccessFeatureService(this.request);
        this.eventDefinitions = new EventDefinitionsService(this.request);
        this.events = new EventsService(this.request);
        this.experiments = new ExperimentsService(this.request);
        this.explicitMembers = new ExplicitMembersService(this.request);
        this.exports = new ExportsService(this.request);
        this.featureFlags = new FeatureFlagsService(this.request);
        this.funnel = new FunnelService(this.request);
        this.groups = new GroupsService(this.request);
        this.groupsTypes = new GroupsTypesService(this.request);
        this.insights = new InsightsService(this.request);
        this.invites = new InvitesService(this.request);
        this.members = new MembersService(this.request);
        this.notebooks = new NotebooksService(this.request);
        this.organizations = new OrganizationsService(this.request);
        this.persons = new PersonsService(this.request);
        this.pipelineDestinationConfigs = new PipelineDestinationConfigsService(this.request);
        this.pipelineDestinations = new PipelineDestinationsService(this.request);
        this.pipelineFrontendApps = new PipelineFrontendAppsService(this.request);
        this.pipelineFrontendAppsConfigs = new PipelineFrontendAppsConfigsService(this.request);
        this.pipelineImportApps = new PipelineImportAppsService(this.request);
        this.pipelineImportAppsConfigs = new PipelineImportAppsConfigsService(this.request);
        this.pipelineTransformationConfigs = new PipelineTransformationConfigsService(this.request);
        this.pipelineTransformations = new PipelineTransformationsService(this.request);
        this.pluginConfigs = new PluginConfigsService(this.request);
        this.plugins = new PluginsService(this.request);
        this.projects = new ProjectsService(this.request);
        this.propertyDefinitions = new PropertyDefinitionsService(this.request);
        this.query = new QueryService(this.request);
        this.roles = new RolesService(this.request);
        this.sessionRecordingPlaylists = new SessionRecordingPlaylistsService(this.request);
        this.sessionRecordings = new SessionRecordingsService(this.request);
        this.subscriptions = new SubscriptionsService(this.request);
        this.surveys = new SurveysService(this.request);
        this.trend = new TrendService(this.request);
        this.users = new UsersService(this.request);
    }
}

