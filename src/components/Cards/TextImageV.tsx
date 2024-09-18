import React from "react";
import { ImageC} from "../index";
import { Box, Grid } from '@chakra-ui/react'; // Chakra UI components

interface TextImageVProps {
  //Variables to pass to ImageC.tsx
  ImageC_Src?: string[]; // Array of image sources
  ImageC_Alt?: string[]; // Array of alt texts for the images
  ImageC_Style?: React.CSSProperties; // Styles for the images
  ImageC_ClassName?: string; // Additional classes for the image

  //Variables for the project card
  TextImageV_Style?: React.CSSProperties; // Additional styles for the container
  TextImageV_HasHeading?: boolean; // Name of the project
  TextImageV_ProjectDescription?: string; // Description of the project
  TextImageV_ImageLocation?: string; // Location of the image 
} 

const TextImageV: React.FC<TextImageVProps> = ({
  ImageC_Src= ["images/placeholders/placeholder.jpg"],
  ImageC_Alt=[],
  ImageC_Style,
  ImageC_ClassName,
  TextImageV_HasHeading = "Project Name",
  TextImageV_ProjectDescription = `Your project description goes here.
    This is just sample text to visualize the Project Card (TextImageV.tsx). 
    Here is some additional text and dont forget to end in ...
    `,
  TextImageV_Style = {},
}) => {
  return (
    <Box className="align-items-center m-2" style={TextImageV_Style}>
      {ImageC_Src.map((imageSrc, index) => (
        <React.Fragment key={index}>
          <Grid >
            <h3 className=" align-items-center m-2">
              {TextImageV_HasHeading}
            </h3>
            <Grid>
              <ImageC
                ImageC_Src={imageSrc}
                ImageC_Alt={ImageC_Alt[index] || `Image for ${TextImageV_HasHeading}`
                }
                ImageC_Style={ImageC_Style}
                ImageC_ClassName={ImageC_ClassName}
              />
              <div className="">
                <p className="m-2">{TextImageV_ProjectDescription}</p>
                <button className="btn btn-primary m-2">View Project</button>
              </div>
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default TextImageV;
