
import Signup from './Signup';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (!isLoggedIn) {
    navigate('/signup', { replace: true }); 
    return <Signup />; 
  }

  return children;
};

export default ProtectedRoutes;
