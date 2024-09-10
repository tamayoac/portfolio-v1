import { Framework } from "./frameworkType";
import { SanityImage } from "./sanityImageType";

export interface Project {
  _id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  projectUrl?: string;
  images?: SanityImage[];
  technologies?: Framework[];
}
