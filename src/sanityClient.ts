import sanityClient, { SanityClient } from "@sanity/client";

const config = {
  projectId: process.env.VUE_APP_SANITY_PROJECT_ID || "",
  dataset: process.env.VUE_APP_SANITY_DATASET,
  apiVersion: process.env.VUE_APP_SANITY_API_VERSION,
  useCdn: process.env.VUE_APP_SANITY_USE_CDN === "true",
};

const client: SanityClient = sanityClient(config);

export default client;
