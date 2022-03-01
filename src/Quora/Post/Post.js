// Correct Bar
import {
  Box,

  Grid
} from '@chakra-ui/react';
import Page from '../../page';
import UserCard from'../UserPost/PostCard'
import axios from 'axios';
import { useState } from 'react';
import React, { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
export default function Post() {
  const [questions, setquestions] = useState([])
   const getCategories = async () => {
     const res = await axios.get('https://quora-app-api-hemanth.herokuapp.com/api/v1/Question/all')
     const { question, message } = res.data
     console.log(question)
  
     setquestions(question)
   }
   useEffect(() => {
     getCategories()
   }, [])
  return (
      <Box w="100%" color="gray.600" >
        <Grid item sm={7} xs={150}>
              {questions.map(question => <UserCard question={question} />)}
          </Grid>
      </Box >
  );
}