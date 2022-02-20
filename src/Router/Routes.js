import { Routes, Route } from 'react-router-dom'
import Login from '../components/auth/Login';
import SignUp from '../components/auth/SignUp';
const Router = () => {
  return (
<div>

    <Routes> 
    {/* <Route path='/' element={<Home />} />
   <Route path='/shop' element={<Products />} />
   <Route path='/shop/:productId' element={<Product />} /> */} 
    <Route path='/login' element={<Login />} />
    {/* <Route path='/signup' element={<Login />} /> */}

 </Routes> 
 </div>

    );
}
 
export default Router;