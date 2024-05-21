import React from 'react'
import {Link} from "react-router-dom"
const Navbar = ({isLoggedIn,setIsLoggedIn}) => {


const handleLogout=()=>{
     setIsLoggedIn(false);
}

console.log(isLoggedIn);
  return (
    <nav className='heading'>
    <span>Home Page </span>
   {!isLoggedIn ?(
   <div className='buttons'>
    <Link to="/signup">
    <button className='signup-button'>Sign Up</button>
    </Link>

   <Link to="/signin">
    <button className='signup-button'>Sign In</button>
    </Link>
    </div> ):(<button className='signup-button' onClick={handleLogout}>Log Out</button>)}
   </nav>
)}

export default Navbar
