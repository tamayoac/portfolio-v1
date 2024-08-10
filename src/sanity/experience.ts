import { Experience } from "@/types/experienceType";
import sanityClient from "@/sanityClient";

export const fetchExperiences = async (): Promise<Experience[]> => {
  try {
    const query = `*[_type == "experience"]{
        _id,
        jobTitle,
        company,
        description,
        from,
        to,
        link,
        "frameworks": frameworks[]->{name, version}
      }`;

    const experiences = await sanityClient.fetch<Experience[]>(query);
    return experiences;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
};
