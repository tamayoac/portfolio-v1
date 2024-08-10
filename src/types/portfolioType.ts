import { Experience } from "./experienceType";
import { Social } from "./socialType";

export interface Portfolio {
  _id: string;
  name: string;
  title: string;
  introduction: string;
  socials: Social[];
  experiences: Experience[];
}
