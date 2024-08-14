import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@/sanityClient";
import { SanityImage } from "@/types/sanityImageType";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}
