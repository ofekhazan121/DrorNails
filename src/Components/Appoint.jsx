import React from "react";
import { useRef } from "react";
import { firestore } from "../firebase";
import {addDoc, collection }from "@firebase/firestore"


const Home = () => {
        const name = useRef()
        const date = useRef()
        const time = useRef()
        const coll = collection(firestore,"Appointment")

        const data = []

        const handleSubmit = async (e) => {
            e.preventDefault();

            let data = {
                name: name.current.value,
                date: date.current.value,
                time: time.current.value
            }
            
            try{
                addDoc(coll,data)
            }
            catch(e){
                console.log(e);
            }
        }


    return(
        <>
            <form onSubmit={handleSubmit}> 
                <input type="text" ref={name} placeholder="Name.." />
                <input type="date" ref={date}  />
                {data.map((d) => {
                  
                })}
                <button type="submit">submit</button>
            </form>
        </>
    )

}

export default Home