
import { useEffect } from 'react'
import { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import Page from './page'
import Post from './Quora/Post/Post';
import PostDetails from './Quora/UserPost/Details';
import Home from './Quora/Home/Home';
import QuestionForYou from './Quora/QuestionForYou/App';



function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      // dispatch an action that modifies the store
      console.log(token)
      dispatch({
        type: "SET_AUTH_TOKEN",
        payload: { token }
      })
    }
  
  }, [])
  return (
    <div className="App">
<Page/>
{/* <Question/>
<Home/> */}
  <Toaster/>
   <Routes> 
 <Route exact  path='/home' element={<Home/>}/>
 <Route exact path='/answer'  element={<QuestionForYou/>}/>
 <Route exact path='/shop/:productId' element={<PostDetails/>} />
 <Route exact path='/shop'  element={<Post/>} />
 </Routes>  
    </div>
  );
}
export default App;