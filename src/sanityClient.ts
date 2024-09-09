import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "./types/sanityImageType";

const sanityClient = createClient({
  projectId: process.env.VUE_APP_SANITY_PROJECT_ID || "",
  dataset: process.env.VUE_APP_SANITY_DATASET || "",
  apiVersion: process.env.VUE_APP_SANITY_API_VERSION || "",
  useCdn: process.env.VUE_APP_SANITY_USE_CDN === "true",
});
const builder = imageUrlBuilder(sanityClient);

export default sanityClient;

export function getImageUrl(source: SanityImage) {
  return builder.image(source).url();
}
