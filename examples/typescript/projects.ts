import { OpenAPI, ProjectsService } from "../../client/typescript/index";

OpenAPI.TOKEN = process.env.POSTHOG_PERSONAL_API_KEY;
OpenAPI.BASE = process.env.POSTHOG_BASE_URL || "https://app.posthog.com";

async function fetchProjects() {
  const projects = await ProjectsService.list();
  console.log(projects);
}

fetchProjects();
