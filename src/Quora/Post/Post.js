// Correct Bar
import {
  Box,
  Heading,
  Flex,
  Link,
  Grid
} from '@chakra-ui/react';
import UserCard from'../UserPost/PostCard'
import { useSelector } from 'react-redux';


export default function Post() {
  const { posts } = useSelector(state => state.posts)
  return (
      <Box w="100%" color="gray.600" >
        <Grid item sm={7} xs={150}>
              {posts.map(product => <UserCard data={product} />)}
          </Grid>
      </Box >
  );
}