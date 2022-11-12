import React, { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { VscRefresh } from "react-icons/vsc"
import { doc, setDoc, getDoc, arrayUnion, updateDoc } from "@firebase/firestore"


const CalendarDay = (props) => {

    
    const hour = useRef('')
    
    const [isOpen, setIsOpen] = useState(false)
    const [dayString, setDayString] = useState('')
    const [monthString, setMonthString] = useState('')

    

    const updateHours = async () => {
        let docRef = await doc(firestore, "open_appointments", )

        await updateDoc(docRef, {
            openHours: arrayUnion(
                {
                    "hour": hour.current.value,
                    "client": { "name": null, "phone": null }
                }
            )
        })
    }

    

    


    /*return (
        <> 
            <div className="flex flex-col gap-5 items-center bg-gogo w-screen m-auto">

                <h2 className="text-2xl font-bold">{dayString}, {props.day.getDate()}&nbsp;{monthString}</h2>

                {!isOpen ?
                    <h1 className="text-3xl">יום סגור</h1>
                    :
                    <CheckBoxGrid />}

                {openHours.map((thisHour) => (
                    <div>
                        {thisHour.hour} {thisHour.client !== null ?
                            <>
                                <div>{thisHour.client.name}</div>
                                <div>{thisHour.client.phone}</div>
                            </>
                            : <></>}
                    </div>
                ))}

                {isOpen ? <button onClick={displayHours}><VscRefresh size={"3em"} /> רענן</button> : <button onClick={openDay}>פתח יום</button>}


            </div>


        </>
    )*/
}

export default CalendarDay;