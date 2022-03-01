
import { useDispatch,useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import FullWidthTabs from './LoginSignup';
import Home from './Quora/Home/Home';

import Navbar from './Quora/Layout/Navbar';

function Page()  {

  const { token } = useSelector(state => state.auth)
  return <div>{ token ? <Navbar/>:<FullWidthTabs/>}
    </div>;
}
 
export default Page;