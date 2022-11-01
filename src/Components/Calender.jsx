import React from "react";
import { useCookies } from 'react-cookie';
import Calendar from 'react-calendar'

const Calender = () => {

    const [cookies,setCookie,removeCookie] = useCookies(['user'])
    
    const logout = () => {
        removeCookie('user')
    }
    return(<>
                <h2>Hello From Calender</h2>
                <Calendar/>
                <button onClick={logout}>Logout</button>
            </>
        
    )   
}

 export default Calender