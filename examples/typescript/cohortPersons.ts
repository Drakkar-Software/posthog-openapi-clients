import { Person, PosthogAPIClient } from "../../client/typescript/index";
import { writeFile } from "fs";

type CohortPersonResponse = {
  results: Array<Person>;
  next: string | null;
  previous: string | null;
};

async function fetchCohortPersons() {
  const client = new PosthogAPIClient({
    BASE: process.env.POSTHOG_BASE_URL || "https://app.posthog.com",
    TOKEN: process.env.POSTHOG_PERSONAL_API_KEY,
  });

  let response: CohortPersonResponse =
    (await client.cohorts.cohortsPersonsRetrieve(
      Number.parseInt(process.env.POSTHOG_COHORT_ID || ""),
      process.env.POSTHOG_PROJECT_ID || ""
    )) as any as CohortPersonResponse;
  let data: Array<Person> = response.results;

  while (response.next) {
    console.log("Fetching remaining persons...");
    const nextResponse = await client.request.request({
      method: "GET",
      url: response.next.replace(process.env.POSTHOG_BASE_URL || "", ""),
    });
    response = nextResponse as CohortPersonResponse;
    data = data.concat(response.results);
  }

  writeFile("persons.json", JSON.stringify(data.map((person: Person) => person.name)), "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

fetchCohortPersons();
