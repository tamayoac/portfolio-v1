import { Experience } from "./experienceType";
import { Project } from "./projectType";
import { Social } from "./socialType";

export interface Portfolio {
  _id: string;
  name: string;
  introduction: string;
  about: string;
  isSvg: boolean;
  socials: Social[];
  experiences: Experience[];
  projects: Project[];
}
