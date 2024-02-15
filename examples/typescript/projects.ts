import { PosthogAPIClient } from "../../client/typescript/index";

async function fetchProjects() {
  const client = new PosthogAPIClient({
    BASE: process.env.POSTHOG_BASE_URL || "https://app.posthog.com",
    TOKEN: process.env.POSTHOG_PERSONAL_API_KEY,
  });

  const projects = await client.projects.list2();
  console.log(projects);
}

fetchProjects();
