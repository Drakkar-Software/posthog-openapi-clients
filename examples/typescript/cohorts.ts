import { PosthogAPIClient } from "../../client/typescript/index";

async function fetchCohors() {
  const client = new PosthogAPIClient({
    BASE: process.env.POSTHOG_BASE_URL || "https://app.posthog.com",
    TOKEN: process.env.POSTHOG_PERSONAL_API_KEY,
  });

  const cohorts = await client.cohorts.cohortsList(process.env.POSTHOG_PROJECT_ID || "");
  console.log(cohorts);
}

fetchCohors();
