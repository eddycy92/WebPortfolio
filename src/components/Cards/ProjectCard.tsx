import React from "react";
import { ImageC } from "../index";
import { Box, Icon, useToast, Grid, Input, Text, Heading } from '@chakra-ui/react'; // Chakra UI components

interface ProjectCardProps {
  //Variables to pass to ImageC.tsx 
  ImageC_Src?: string[]; // Array of image sources
  ImageC_Alt?: string[]; // Array of alt texts for the images
  ImageC_Style?: React.CSSProperties; // Styles for the images
  ImageC_Fluid?: boolean; // Make the image responsive
  ImageC_ClassName?: string; // Additional classes for the image
  ImageC_Align?: "start" | "end" | "center"; // Align the image

  //Variables for the project card
  ProjectCard_Style?: React.CSSProperties; // Additional styles for the container

  ProjectCard_ProjectName?: string; // Name of the project
  ProjectCard_ProjectDescription?: string; // Description of the project
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  ImageC_Src = ["placeholder.jpg"], 
  ImageC_Alt = ["Placeholder image"], 
  ImageC_Style = { objectFit: "cover" }, 
  ImageC_Fluid = true, 
  ImageC_Align = "center", 
  ImageC_ClassName, 
  ProjectCard_ProjectName = "Project Name", 
  ProjectCard_ProjectDescription = 
    `Your project description goes here.
    This is just sample text to visualize the Project Card (ProjectCard.tsx). 
    Here is some additional text and dont forget to end in ...
    `, 
  ProjectCard_Style = {}, 
}) => {
  return (
    <Box className="align-items-center m-2" style={ProjectCard_Style}>
      {ImageC_Src.map((imageSrc, index) => (
        <React.Fragment key={index}>
          <Grid >
            <h3 className=" align-items-center m-2">{ProjectCard_ProjectName}</h3>
            <Grid >  
              <ImageC
                ImageC_Src={imageSrc}
                ImageC_Alt={ImageC_Alt[index] || `Image for ${ProjectCard_ProjectName}`}
                ImageC_Style={ImageC_Style}
                ImageC_Fluid={ImageC_Fluid}
                ImageC_ClassName={ImageC_ClassName}
                ImageC_Align={ImageC_Align}
              />
              <div className="">
                <p className="m-2">{ProjectCard_ProjectDescription}</p>
                <button className="btn btn-primary m-2">View Project</button>
              </div>
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ProjectCard;
