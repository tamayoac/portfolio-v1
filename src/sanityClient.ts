import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: process.env.VUE_APP_SANITY_PROJECT_ID || "",
  dataset: process.env.VUE_APP_SANITY_DATASET || "",
  apiVersion: process.env.VUE_APP_SANITY_API_VERSION || "",
  useCdn: process.env.VUE_APP_SANITY_USE_CDN === "true",
});

export default sanityClient;
