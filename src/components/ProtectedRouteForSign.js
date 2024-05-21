import React from 'react';
import HomePage from './HomePage'; // Import your HomePage component
import { useNavigate } from 'react-router-dom';

const ProtectedRouteForSign = ({ children }) => {
    const navigate = useNavigate();
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (isLoggedIn) {
    navigate('/home', { replace: true }); 
    return <HomePage />; 
  }

  return children; 
};

export default ProtectedRouteForSign;
