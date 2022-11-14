import React, { useRef, useState } from "react";
import {signInWithEmailAndPassword } from "@firebase/auth"

import { auth } from "../firebase";
import { useCookies } from 'react-cookie';



const LoginForm = () =>{

    const [/*cookies*/,setCookies,/*removeCookies*/] = useCookies(['user'])
    const email = useRef()
    const password = useRef()
    const [errorMessage,setErrorMessage] = useState(null)



    const onSubmit = (e) => { 
        e.preventDefault();
        const auths = auth
            signInWithEmailAndPassword(auths,email.current.value,password.current.value)
                .then((userCre) => {
                    
                    setCookies('user',userCre.user,{path: '/'})
                    setErrorMessage(null)
                })
                .catch((error) => {
                    setErrorMessage("שם משתמש או סיסמה לא נכונים")
                })

    }

   

    return(
    <div className="h-screen">
        <form onSubmit={onSubmit} className="flex flex-col w-48 m-auto gap-5">
            <h2>היי דרור בבקשה התחברי</h2>
            <input className=""
             type="email"
              ref={email} 
              placeholder="אימייל..."
              />
            <input type="password" ref={password} placeholder="סיסמה..."/>
            <div className="text-error">{errorMessage}</div>
            <button className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-neutral" type="submit">התחבר</button>
        </form>
        
    </div>
        
    )
}

export default LoginForm