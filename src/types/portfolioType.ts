import { Experience } from "./experienceType";
import { Social } from "./socialType";

export interface Portfolio {
  _id: string;
  name: string;
  introduction: string;
  about: string;
  socials: Social[];
  experiences: Experience[];
}
