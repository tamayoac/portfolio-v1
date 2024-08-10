import sanityClient from "@/sanityClient";
import { Portfolio } from "@/types/portfolioType";
export const fetchPortfolio = async (): Promise<Portfolio | null> => {
  try {
    const query = `*[_type == "portfolio"][0]{
      _id,
      name,
      title,
      introduction,
      "socials": socials[]->{
        _id,
        name,
        link
      },
      "experiences": experiences[]->{
        _id,
        jobTitle,
        company,
        description,
        from,
        to,
        link,
        "frameworks": frameworks[]->{name, version}
      }
    }`;

    const portfolio = await sanityClient.fetch<Portfolio>(query);

    if (!portfolio) {
      console.warn("No portfolio found");
      return null;
    }

    return portfolio;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return null;
  }
};
