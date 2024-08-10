import { Framework } from "@/types/frameworkType";

export interface Experience {
  _id: string;
  jobTitle: string;
  company: string;
  description: string;
  from: string;
  to: string;
  link: string;
  frameworks: Framework[];
}
