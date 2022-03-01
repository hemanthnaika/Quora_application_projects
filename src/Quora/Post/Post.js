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
  const [Questions, setQuestions] = useState([])
   const getCategories = async () => {
     const res = await axios.get('https://quora-app-api-hemanth.herokuapp.com/api/v1/answers/all')
     const { answers, message } = res.data
     console.log(answers)
  
     setQuestions(answers)
   }
   useEffect(() => {
     getCategories()
   }, [])
  return (
      <Box w="100%" color="gray.600" >
        <Grid item sm={7} xs={150}>
              {Questions.map(questions => <UserCard data={questions} />)}
          </Grid>
      </Box >
  );
}