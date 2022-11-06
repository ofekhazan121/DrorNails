import React,{ useState } from "react";
import { useLocation } from "react-router-dom";
import CheckBoxGrid from "../Components/CheckBoxGrid";
import Daytitle from "../Components/Daytitle";
import Openday from "../Components/Openday";
import { firestore } from "../firebase";
import {getDoc,doc} from "@firebase/firestore"
import { useEffect } from "react";
import OpenHours from "../Components/OpenHours";


const CalendarDay = () => {
    const [build,setBuild] = useState("")
    const location = useLocation();
    const day = location.state
    const docName = `${day.getDate()}${day.getMonth()}${day.getYear()}`
    const [manageableDay, setManageableDay] = useState(false);
   
    const getDayFromDb = async () => {
        let docRef = await doc(firestore, "open_appointments", docName)
        let docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setManageableDay(true)
        }

    }
    
    useEffect(()=>{
        getDayFromDb()
    },[build])

    
    return(
        <div className="flex flex-col items-center gap-5 mb-5">

            <Daytitle day={day} />

            {manageableDay ? 
            <div>
                <h2 className="font-bold text-3xl">יום פתוח</h2>
                <CheckBoxGrid/> 
            </div>
            :
            <div>
                <h2 className="font-bold text-3xl">יום סגור</h2>
                <Openday day={day.getDay()} docName={docName} setBuild={setBuild}/>
            </div>
            }
            <OpenHours docName={docName}/>
        </div>
    )
}

export default CalendarDay