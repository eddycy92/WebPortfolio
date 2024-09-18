import { X3CardCarousel, ProjectCard } from '../../components/index';
import * as projectImages from '../../../public/images/projects'; 
import React, { useEffect, useState} from 'react';


type ProjectImagesType = Record<string, string>;

function ProjectCarousel() {
  const [projectCards, setProjectCards] = useState<JSX.Element[]>([]);
  const [loadingError, setLoadingError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Cast projectImages to the defined type
      const images = projectImages as ProjectImagesType;

      // Log to check if all images are being imported
      console.log(images);

      if (Object.keys(images).length === 0) {
        setLoadingError("No images found in the projects folder.");
        return;
      }

      // Dynamically create projectData from the imported images
      const projectData = Object.keys(images).map((key) => {
        return {
          name: key,
          ProjectCard_ProjectDescription: `Description for ${key.replace(/([A-Z])/g, ' $1').trim()}`, // Create a default description or customize this
          ImageC_Src: images[key],
          ImageC_Alt: key
        };
      });

      const cards = projectData.map((project, index) => (
        <ProjectCard
          key={index}
          ImageC_Src={[project.ImageC_Src]} 
          ImageC_Alt={[project.ImageC_Alt]}
          ProjectCard_ProjectName={project.name}
          ProjectCard_ProjectDescription={project.ProjectCard_ProjectDescription}
        />
      ));

      setProjectCards(cards);
    } catch (error) {
      console.error("Error loading project images:", error);
      setLoadingError("Failed to load project images.");
    }
  }, []);

  if (loadingError) {
    return <div>Error: {loadingError}</div>;
  }

  return (
    <>
      <h1 className="text-lg-center">Projects</h1>
      {projectCards.length > 0 ? (
        <X3CardCarousel X3CardCarousel_Children={projectCards} />
          ) : ( 
            <div>No projects available to display.</div>
      )}
    </>
  );
}

export default ProjectCarousel;
