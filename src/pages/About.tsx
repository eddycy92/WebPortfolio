// src/pages/About.tsx

import React from 'react';
import  {TitleTextImage}  from '../containers/index';
import {List, ListItem, Text, Box, Heading, } from '@chakra-ui/react';
import { H_Align, V_Align } from '../utils/Alignment';
function About() {
  return (
    <>
      {/* Box for About me */}
      <TitleTextImage 
        title='About me'
        text= {(
          <> 
            Hey there, I'm Eddy! I'm a Solutions Engineer and Technical Sales professional with an insatiable tech appetite, the kind of guy who devours complexity for breakfast and serves up neatly sliced solutions. With over 8 years of experience in sales, specializing in technical sales, and a strong commitment to delivering value, I've honed my skills and embraced my inner geek. Software and Cybersecurity aren't just my field; they're my playground. Whether I'm building, analyzing, proposing, or improving solutions, I'm always game.
            <br />
            <br />
            When I'm off-duty, I'm an automotive enthusiast and 3D modelling aficionado. You might find me hidden beneath the hood of my car, breaking and remaking my home network lab and servers, or searching for things to 3D print or design. As an enthusiast of Machine Learning, Artificial Intelligence, and Large Language Models, I enjoy engaging in vibrant discussions and bouncing ideas off like-minded folks.
          </>
        )}
        imageSrc="../../public/images/people/headshot.png"
        imageAlt='Eddy'
        imageLocation='right'
      />
        
      {/* Box for Mission */}
      <TitleTextImage 
        title='Mission'
        text= {(
          <> 
            My compass consistently points towards innovation. Guiding me to problem-solve, unwrapping the layers of
            complex tech problems and serving powerful yet streamlined solutions.
            <br />
            <br />
            Navigating through the realm of tech is thrilling. A crucial part of this ride is bridging the gap between
            tech jargon and everyday language. Whether I'm chatting about highly technical solutions with a seasoned tech
            pro or a novice, my mission is to simplify the complex and make the intimidating accessible.
            <br />
            <br />
            Problem-solving is just the tip of the iceberg; the goal is creating value that stands the test of time. I'm
            on a mission to show that it doesn't have to be complicated. It just has to make sense.
          </>
        )}
        imageSrc="../../public/images/backgrounds/lense.jpg"
        imageAlt='Eddy'
        imageLocation='left'
        
      />

      {/* Box for Values */}
      <TitleTextImage 
        
        boxMaxHeight={{base:'600px', md:'800px'}}
        title='Values'
        textWidth={{base: '95%', md: '80%'}}
        text={(
          <Box >
            <List spacing={1}>
              <ListItem display="flex">
                  <Heading as="h3" size='sm' H_Align='left'>Curiosity:</Heading>
                  <Text fontSize='sm' ml={3}> Tech is my buffet, and curiosity, my insatiable appetite. Just as a foodie, excited by the thrill of trying new dishes, my thirst for knowledge nudges me to continuously explore shifting sands of the tech landscape. </Text>
              </ListItem>
              <ListItem display="flex">
                <Heading as="h3" size='sm' H_Align='left'>Collaboration:</Heading>
                <Text fontSize='sm' ml={3}>Powerful software solutions are born from the womb of collaboration. Whether pairing software with client's needs or brainstorming on a cybersecurity strategy with colleagues, a commitment to collaborative growth is vital. Even the most talented individual can't reach their true potential without the harmonious symphony of a well-orchestrated team.</Text>
              </ListItem>
              <ListItem display="flex">
                <Heading as="h3" size='sm' H_Align='left'>Consistency:</Heading> 
                <Text fontSize='sm' ml={3}>Like adding a drop of water to a empty tank. At first, each drop echoes loudly due to the distance it travels, the empty echo-prone walls and the speed it has developed when hitting the base. With time, the echo softens, and a pool of a new skill starts to form. Each drop, consistent and uninterrupted, makes a significant difference. Even without innate talent, consistency can cultivate skills, refine expertise, drive progress leading to surprising excellence.</Text>
              </ListItem>
              <ListItem display="flex">
                <Heading as="h3" size='sm' H_Align='left'>Reliability:</Heading> 
                <Text fontSize='sm' ml={3}>Reliability is the catalyst of consistency. One who delivers under pressure and can be relied on to carry the torch when it matters most. Just as a trusty old car it may start rough, but it starts up every time. Reliability accelerates productivity and creates trust.</Text>
              </ListItem>
              <ListItem display="flex">
                <Heading as="h3" size='sm' H_Align='left'>Efficiency:</Heading> 
                <Text fontSize='sm' ml={3}>Like a master chef's well-organized kitchen. Everything has its place, and every action has a purpose. Just as a chef effortlessly blends ingredients into a delicious dish. It is all about seamlessly merging skills, tools, and strategies to concoct robust and effective solutions.</Text>
              </ListItem>
              <ListItem display="flex">
                <Heading as="h3" size='sm' H_Align='left'>Humility: </Heading>
                <Text fontSize='sm' ml={3}>The quiet confidence to keep one's mind open. It's not about underselling one's skills, but recognizing that there's always room for growth and improvement.</Text>
              </ListItem>
              <ListItem display="flex">
                <Heading as="h3" size='sm' H_Align='left'>Humor: </Heading>
                <Text fontSize='sm' ml={3}>A dash of humor is the cherry on top of a sundae. It lightens the mood, making the complex more digestible and the experience more enjoyable. Who says the world of zeros and ones can't include a few laughs?</Text>
              </ListItem>
            </List>
          </Box> 
          
        )}
        noImage={true}
       />
    </>
  );
}

export default About;
