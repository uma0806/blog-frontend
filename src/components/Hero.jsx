import React from 'react';
import { Stack } from "@chakra-ui/layout";
import { Container, Flex, Heading, Text, Button, Box, Image } from '@chakra-ui/react';

const Hero = () => {
    return (
        <Container
            maxW="1300px"
            display="flex"
            h="100vh"
            alignItems="center"
            flexDirection={{ base: "column-reverse", md: "row" }}
        >

            <Stack
                height={{ base: "auto", md: "350px" }}
                flexGrow={1}
                justify="space-around"
                mt={{ base: "8", md: "0" }}
                textAlign={{ base: "center", md: "left" }} 
            >
                <Heading fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }} as="h1" >
                    Get Crypto Related Knowledge
                </Heading>

                <Text fontSize={{ base: "sm", sm: "md", md: "lg" }} as="p"  >
                    Vivamus suscipit tortor eget falls.
                </Text>

                <Box mt={{ base: "4", md: "0" }}> 
                    <Button colorScheme="orange" onClick={() => location.href = "#posts"}>Check Posts</Button>
                </Box>
            </Stack>
            <Flex mt={{ base: "8", md: "0" }} justifyContent="center" >
                <Image
                    width={{ base: "70%", md: "auto" }}
                    mr={{ base: "0", md: "4" }} 
                    src="/images/btc.svg"
                    alt="Bitcoin" 
                />
            </Flex>
        </Container>
    );
};

export default Hero;
