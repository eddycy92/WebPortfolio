// /src/components/Cards/ArticlePreviewCard.tsx

import React, { useEffect, useState } from "react";
import {Flex, Heading, Text, Button, Image, useColorModeValue} from "@chakra-ui/react"

interface ArticlePreviewCardProps {
  title?:string;
  summary?:string;
  imageOn?:boolean;
  imageSrc?:string;
  articleLink?:string;
}


function ArticlePreviewCard({
  title='This is your title', 
  summary='This is your summary of the article that you are previewing for the user. This is a great place to give a brief overview of the article content and entice the user to click through to read more. This is your summary of the article that you are previewing for the user. This is a great place to give a brief overview of the article content and entice the user to click through to read more. This is your summary of the article that you are previewing for the user. This is a great place to give a brief overview of the article content and entice the user to click through to read more. This is your summary of the article that you are previewing for the user. This is a great place to give a brief overview of the article content and entice the user to click through to read more. This is your summary of the article that you are previewing for the user. This is a great place to give a brief overview of the article content and entice the user to click through to read more. This is your summary of the article that you are previewing for the user. This is a great place to give a brief overview of the article content and entice the user to click through to read more.',
  imageOn=false,
  imageSrc='',
  articleLink='#'
}: ArticlePreviewCardProps){
  return (
    <Flex      
      flexDir="column"
      justify={"center"}
      bg={useColorModeValue("gray.100","gray.500")}
      borderRadius="xl"
      borderWidth={1}
      borderColor={useColorModeValue("gray.300","gray.600")}
      m={5} p={4}
    >
      <Heading >{title}</Heading>
      
      {imageOn && 
        <Image 
          src={imageSrc}
        />
      }
      <Text p={5}>{summary}</Text>
      <Button
        as="a"
        href={articleLink}
        flex={1}
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        m={1} p={3}
        w={'15%'}
        alignSelf={'flex-end'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{ bg: 'blue.500' }}
        _focus={{ bg: 'blue.500' }}
      > Read More 
      </Button>
    </Flex>
  )
}

export default ArticlePreviewCard