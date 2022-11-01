import React, { useRef } from "react";
import {signInWithEmailAndPassword } from "@firebase/auth"

import { auth } from "../firebase";
import { useCookies } from 'react-cookie';



const LoginForm = () =>{

    const [cookies,setCookies,removeCookies] = useCookies(['user'])
    const email = useRef()
    const password = useRef()
    



    const onSubmit = (e) => { 
        e.preventDefault();
        const auths = auth
            signInWithEmailAndPassword(auths,email.current.value,password.current.value)
                .then((userCre) => {
                    setCookies('user',userCre.user,{path: '/'})
                })
                .catch((error) => {
                    console.log(error);
                })

    }

   

    return(
    <>
        <form onSubmit={onSubmit}>
            <h2>Hello Dror Please Login</h2>
            <input type="email" ref={email} placeholder="Email..."/>
            <input type="password" ref={password} placeholder="Passowrd..."/>  
            <button type="submit">Submit</button>
        </form>
        
    </>
        
    )
}

export default LoginForm