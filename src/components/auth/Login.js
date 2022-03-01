import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
  import {loginUser} from '../../actions/auth'
  import { Navigate } from 'react-router';
  export default function Login() {
      const[email,setEmail]=useState('')
      const[password,setPassword]=useState('')
      const dispatch=useDispatch()

      const { token } = useSelector(state => state.auth)
      const handleLogin=()=>{
          dispatch(loginUser(email,password))
      }
      return token ? <Navigate to='/home' />:
      <Stack bgImage={''} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={e=>{setEmail(e.target.value)}} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange={e=>{setPassword(e.target.value)}} type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button onClick={handleLogin} colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
       
            src={ 
              'data:image/jpeg;base64,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'
            }
          />
        </Flex>
      </Stack>
  }