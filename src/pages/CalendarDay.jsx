import React,{ useState } from "react";
import { useLocation } from "react-router-dom";
import Daytitle from "../Components/Daytitle";
import Openday from "../Components/Openday";
import { firestore } from "../firebase";
import {getDoc,doc} from "@firebase/firestore"
import { useEffect } from "react";
import ManageDay from "../Components/ManageDay";
import LoadingScreen from "../Components/LoadingScreen";


const CalendarDay = () => {
    const [build,setBuild] = useState("")
    const location = useLocation();
    const day = location.state
    const docName = `${day.getDate()}${day.getMonth()}${day.getYear()}`
    const [manageableDay, setManageableDay] = useState(false);
    const [loading,setLoading] = useState(true)
   
    const getDayFromDb = async () => {
        let docRef = await doc(firestore, "open_appointments", docName)
        let docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setManageableDay(true)
            setLoading(false)
        }else{
            setLoading(false)
        }

    }
    
    useEffect(()=>{
        getDayFromDb()
    },[build])

    
    return(
        <div className="flex flex-col items-center gap-5 mb-5">
            <Daytitle day={day} />
            {loading ? <LoadingScreen/> :<>{manageableDay ? <ManageDay docName={docName} setLoading={setLoading}/> : <Openday docName={docName} setLoading={setLoading}/>} </>}
            

            
        </div>
    )
}

export default CalendarDay