import React, { useContext } from "react";
import LoginForm from "../Components/LoginForm";
import ErrorBoundary from "../Components/ErrorBound"
import {UserContext} from "../UserContext";
import Calender from "../Components/Calender";


const Login = () =>{
    const user =  useContext(UserContext)
    return(
        <>
            {user == null ?
            <ErrorBoundary>
                <LoginForm />
             </ErrorBoundary>:
             
             <Calender/>
             }
            
            
        </>
    )
}


export default Login