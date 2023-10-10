import { Tag } from "@chakra-ui/tag";
import { Button } from "@chakra-ui/button";
import { Text, Container, Flex, Heading, Stack, Box } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { useEffect, useState } from "react";
import { blogData } from "../data/index";
import { Link, useLocation } from "react-router-dom"; 


const SingleBlog = () => {
  const [data, setBlogData] = useState({});
  const location = useLocation()
  useEffect(() => {
    const id = location.pathname.split("/")[1];
    setBlogData(blogData.find((e) => e.id == id));
  }, [location]);

  return (
    <Stack p="4">
      <Heading as="h1" size="xl">
        {data?.title}
      </Heading>
      <Flex alignItems="center" my="3"  >
        <Avatar src={data?.avatar} />
        <Text ml="2" fontWeight="bold">
          {data?.authorName}
        </Text>
        <Text ml="2" fontSize="sm" color="gray.500">
          {data?.publishDate}
        </Text>
      </Flex>
      <Flex gap="1rem" flexWrap="wrap" >
        <Container flex={1}  minW="200px" >
            <Image  src={data?.imageUrl} alt={data?.title} />
        </Container>
        <Container flex={1}  minW="200px" >
            <Text mt="4">{data?.description}</Text>
            <Text mt="4">{data?.content}</Text>
            <Flex mt="4" wrap="wrap">
                {data?.tags?.map((tag) => (
                <Tag key={tag} size="md" colorScheme="orange" mr="2" mb="2">
                    {tag}
                </Tag>
                ))}
            </Flex>
        </Container>
      </Flex>
      <Box mt="4">
        <Link to="/"> {/* Assuming you have a home page */}
          <Button colorScheme="orange">Back to Blog</Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default SingleBlog;
