import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import {UserContext} from './UserContext';
import { useCookies } from 'react-cookie';
import {Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar';




function App() {
  const [cookies] = useCookies(['user'])
  return (

  <>
  
    <UserContext.Provider value={cookies.user}>  
    <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes> 
      
    </UserContext.Provider>
  
  </>
)}




export default App;

