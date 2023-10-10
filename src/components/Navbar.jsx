import { SearchIcon } from "@chakra-ui/icons";
import{ Image } from "@chakra-ui/image";
import { Text, Container, Flex, Box} from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftElement} from "@chakra-ui/input";
import {  Popover, PopoverTrigger} from "@chakra-ui/react"
import { blogData } from "../data/index";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("");
    const [matchingPosts, setMatchingPosts] = useState([]);
    const [isPopOverOpen, setIsPopOverOpen] = useState(false)


    const handleInputChange = (event) => {

        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        query ? setIsPopOverOpen(true) : setIsPopOverOpen(false)
    
        const matching = blogData.filter((post) =>
          post.title.toLowerCase().includes(query)
        );
        setMatchingPosts(matching);
      };


    return(
        <div 
            style={{
                position: "sticky",
                top: 0,
                boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                zIndex: 100
            }}
        >
        <Container maxW="1300px"  display="flex"  justifyContent="space-between" padding="4" box-shadow="lg" border-radius="lg" >
            <Flex align="center">
                <Image mr="4" w="50px" h="50px" src="/images/btc.svg"/>
                <Link to="/" >Home</Link>
                <Link style={{margin: "0 1rem"}} to="/login">Login</Link>
            </Flex>
            <Flex align="center" position="relative">
            <InputGroup>

            <InputLeftElement pointerEvents="none" >
                <SearchIcon color="gray.300" />
            </InputLeftElement>
    
                children={}
            <Input
                w={{ base: "100px", sm: "160px", md: "auto" }}
                type="text"
                placeholder="Search Post"
                value={searchQuery}
                onChange={handleInputChange}
            />
            </InputGroup>
            {isPopOverOpen && <Popover placement="bottom-start" isOpen={isPopOverOpen} onClose={() => setIsPopOverOpen(false)}   >
                <PopoverTrigger >
                    <Box position="absolute" top="100%" left="0" right="0" style={{backgroundColor: "white",  boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)"}}>
                    {matchingPosts.map((post) => (
                        <Box
                            key={post.id}
                            py="2"
                            px="4"
                            cursor="pointer"
                            onClick={() =>{ setSearchQuery(""); setIsPopOverOpen(false); navigate(`/${post.id}`); }}
                            _hover={{ bg: "gray.100" }}
                        >
                        {post.title}
                        </Box>
                    ))}
                    </Box>
                </PopoverTrigger>
            </Popover>}

        </Flex>
        </Container>
    </div>

);

   
};

export default NavBar;