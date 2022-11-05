import React, { useState } from "react";
import { useCookies } from 'react-cookie';
import Calendar from 'react-calendar'
import CalendarDay from "./CalendarDay";

const Calender = () => {

    const [,,removeCookie] = useCookies(['user'])
    const [date,setDate] = useState(null)

    const showDate = (day) => {

        setDate(<CalendarDay day={day}/>)

    }

    const logout = () => {
        removeCookie('user')
    }
    return(
            <div className="flex flex-col">
                
                {date!=null ? date : <Calendar onClickDay={(e)=>{showDate(e)}} className="bg-gogo"/>}
                {date ? <button onClick={()=> {setDate(null)}}>חזור ללוח שנה</button> : <></>}
                <br />
                <button className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-neutral " type="submit" onClick={logout} >התנתק</button>
            </div>
        
    )   
}

 export default Calender