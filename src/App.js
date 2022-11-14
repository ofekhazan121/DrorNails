import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { UserContext } from './UserContext';
import { useCookies } from 'react-cookie';
import { Route, Routes, Navigate } from "react-router-dom"
import Navbar from './Components/Navbar';
import CalendarDay from './pages/CalendarDay';
import UploadImages from './Components/UploadImages';
import Contact from './pages/Contact';
import { Footer } from './Components/Footer';




function App() {
  const [cookies] = useCookies(['user'])

  const Redirect = () => {
    return(<div><span> wrong page 3 sec to redirect... <Navigate replace to={"/"} />  </span></div>)
  };


  return (

  <>
  
    <UserContext.Provider value={cookies.user}>  
    <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/calendarday" element={<CalendarDay/>}/>
        <Route path="*" element={<Redirect />} />
        <Route path="/upload" element={<UploadImages/>} />
        <Route path='/contact' element={<Contact />}/>
      </Routes> 
    <Footer /> 
    </UserContext.Provider>
  
  </>
)}




export default App;

