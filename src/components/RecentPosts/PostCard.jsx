import { Avatar } from "@chakra-ui/avatar";
import {Image} from "@chakra-ui/image";
import {Text} from "@chakra-ui/layout";
import {Flex} from "@chakra-ui/layout";
import {Heading} from "@chakra-ui/layout";
import {Stack} from "@chakra-ui/layout";
import {Tag} from "@chakra-ui/tag";
import {Button} from "@chakra-ui/button";
import { useNavigate } from "react-router-dom";

const PostCard =({post}) => {
    const navigate = useNavigate()
    return (
    <Stack w="350px" boxShadow="lg" borderRadius="lg" overflow="hidden">
        <Image src={post?.imageUrl}/>
        <Stack p="4">
            <Heading>{post?.title}</Heading>
            <Flex alignItems="center" gap="0.5rem">
                <Avatar src={post?.avatar} />
                <Text fontWeight="bold">{post?.authorName}</Text>
                <Text>{post?.publishDate}</Text>
            </Flex>
            <Text>{post?.description}</Text>
            <Flex gap="0.5rem">
                {post?.tags.map(tag=> (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Flex>
            <Button onClick={() => navigate(`/${post.id}`)}  alignSelf="flex-end" colorSchema="orange">Read more
            </Button>
        </Stack>

    </Stack>
    );
};

export default PostCard;