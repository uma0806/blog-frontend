import { GridItem } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import PostCard from "./PostCard";
import { Container } from "@chakra-ui/layout";
import { blogData } from "../../data";
const RecentPosts = () => {
    return <>
        <Container maxW="1300px" id="posts">
            <Grid gridGap= " 4"gridTemplateColoumns="repeat {auto-fit,minmax(20rem,1fr)}">
                <GridItem display="flex" justifyContent="center" gap="1rem" flexWrap="wrap">         
                    {blogData.map(e => {
                        return <PostCard post={e} key={e.title} />
                    })}
                </GridItem>
            </Grid>
        </Container> 
    </>;
};

export default RecentPosts;