
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Quora from './Quora/App';
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
 {/* <Login/>
 <SignUp/> */}
 <Quora/>
      {/* <Home /> */}
      <Toaster />
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/shop/:productId' element={<Product />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
     
      </Routes>
    

    </div>
  );
}

export default App;