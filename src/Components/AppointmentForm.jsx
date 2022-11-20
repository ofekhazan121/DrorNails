import React from "react";
import { useRef } from "react";
import { auth, firestore } from "../firebase";
import {addDoc, collection }from "@firebase/firestore"
import { getAuth , signInWithPhoneNumber, RecaptchaVerifier} from "firebase/auth";


const AppointmentForm = (props) => {

    const name = useRef();
    const phone= useRef();

    const register = (e) => {
        e.preventDefault();
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptchaVerifier.render()
    }


    
       

    return(
        <div className="appointment-form-container">
            <form className="appointment-form">
                <h3 className="appointment-header">הזמיני תור עכשיו </h3>
                <input type="text" placeholder="שם..." ref={name}/>
                <input type="text" placeholder="מספר..." ref={phone} />
                <button className="app-button" onClick={register} id={"sign-in"}>הגישי</button>
                <div id="recaptcha-container"></div>
            </form>
        </div>
    )

}

export default AppointmentForm;