import React from 'react'
import "../components/HomePage.css"
import Navbar from './Navbar'

const HomePage = ({isLoggedIn,setIsLoggedIn}) => {
 console.log(isLoggedIn)
  return (
    <div className='homepage-container'>
   <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
     <h1 className='homepage-content'>Hello World</h1>
   </div>
  )
}

export default HomePage
