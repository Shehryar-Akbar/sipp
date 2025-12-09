import { generateMetadata } from "../seo/seo";
import { seoConfig } from "../seo/seoConfig";
import ProjectsGallery from "./components/ProjectGallery";
import ProjectHero from "./components/ProjectHero";
export const metadata = generateMetadata(seoConfig.portfolio);

const page = () => {
  return (
    <>
      <ProjectHero />
      <ProjectsGallery />
    </>
  );
};

export default page;
