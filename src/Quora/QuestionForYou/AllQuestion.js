import {
  Box,
  Heading,
  Flex,
  Link,
  Grid
} from '@chakra-ui/react';
import UserCard from'../UserPost/PostCard'
import { useSelector } from 'react-redux';
import QuestionCard from './QuestionFor';


export default function Allquestion() {
  const { questions } = useSelector(state => state.questions)
  return (
      <Box w="100%" color="gray.600" >
        <Grid item sm={7} xs={150}>
              {questions.map(question => <QuestionCard data={question} />)}
          </Grid>
      </Box >
  );
}