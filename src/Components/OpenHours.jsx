import React, { useState } from "react";
import { doc, getDoc } from "@firebase/firestore"
import { firestore } from "../firebase";
import { useEffect } from "react";


const OpenHours = (props) => {

    const [openHours, setOpenHours] = useState([]);

    const displayHours = async () => {
        const docRef = await getDoc(doc(firestore, "open_appointments",props.docName ))
        setOpenHours(docRef.data().hours.sort((a,b) => a.id > b.id))
    }



    useEffect(()=>{
        displayHours()
    },[])


    return (
        
        <div className="flex flex-col gap">
            
            
            {openHours.map((hour) => {
                if(hour.client.name != null){
                    return(
                        <div key={hour.id}>
                            שעה: {hour.id}, שם: {hour.client.name}, מספר: {hour.client.number} 
                        </div>
                    )
                }else{
                    return(
                        <div key={hour.id}>שעה: {hour.id}</div>
                    )
                }
            })}
            
            
        </div>
    )

}


export default OpenHours;