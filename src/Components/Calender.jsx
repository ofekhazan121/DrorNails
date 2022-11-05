import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import Calendar from 'react-calendar'
import CalendarDay from "./CalendarDay";

const Calender = () => {

    const [/*cookies*/,/*setCookie*/,removeCookie] = useCookies(['user'])
    const [date,setDate] = useState(null)

    const showDate = (day) => {

        setDate(<CalendarDay day={day}/>)

    }

    const logout = () => {
        removeCookie('user')
    }
    return(<>
                <h2>Hello From Calender</h2>
             
                
                {date!=null ? date : <Calendar onClickDay={(e)=>{showDate(e)}} className="bg-gogo"/>}
                <button onClick={()=> {setDate(null)}}>Back To Calendar</button>
                <br />
                <button onClick={logout}>Logout</button>
            </>
        
    )   
}

 export default Calender