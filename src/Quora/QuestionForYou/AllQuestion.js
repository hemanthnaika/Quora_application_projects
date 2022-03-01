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
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
export default function Allquestion() {
  
   const [questions, setquestions] = useState([])
   const getCategories = async () => {
     const res = await axios.get('https://quora-app-api-hemanth.herokuapp.com/api/v1/Question/all')
     const { question, message } = res.data
     console.log(question)
      setquestions(question.reverse())
   }
   useEffect(() => {
     getCategories()
   }, [])
  return (
      <Box w="100%" color="gray.600" >
        <Grid item sxs={6} xs={550}>
              {questions.map((question => <QuestionCard question={question} />))}
        
          </Grid>
      </Box >
  );
}