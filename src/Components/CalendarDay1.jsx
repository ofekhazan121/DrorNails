import React, { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { VscRefresh } from "react-icons/vsc"
import CheckBoxGrid from "./CheckBoxGrid";
import { doc, setDoc, getDoc, arrayUnion, updateDoc } from "@firebase/firestore"


const CalendarDay = (props) => {

    
    const hour = useRef('')
    const [openHours, setOpenHours] = useState([])
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

    const displayHours = async () => {
        const docRef = await getDoc(doc(firestore, "open_appointments", ))
        setOpenHours(docRef.data().openHours)
    }

    

    const setTheDay = () => {
        switch (props.day.getDay()) {
            default: setDayString("שגיאה")
                break;
            case 0: setDayString("ראשון")
                break;
            case 1: setDayString('שני')
                break;

            case 2: setDayString('שלישי')
                break;

            case 3: setDayString('רביעי')
                break;

            case 4: setDayString('חמישי')
                break;

            case 5: setDayString("שישי")
                break;

            case 6: setDayString('שבת')
                break;

        }
    }

    const setTheMonth = () => {
        switch (props.day.getMonth()) {
            default: setMonthString("שגיאה")
                break;
            case 0: setMonthString("ינואר")
                break;
            case 1: setMonthString('פברואר')
                break;

            case 2: setMonthString('מרץ')
                break;

            case 3: setMonthString('אפריל')
                break;

            case 4: setMonthString('מאי')
                break;

            case 5: setMonthString("יוני")
                break;

            case 6: setMonthString('יולי')
                break;

            case 7: setMonthString('אוגוסט')
                break;

            case 8: setMonthString('ספטמבר')
                break;

            case 9: setMonthString('אוקטובר')
                break;

            case 10: setMonthString('נובמבר')
                break;

            case 11: setMonthString('דצמבר')
                break;
        }
    }

    useEffect(() => {
        setTheDay()
        setTheMonth()
        displayHours()
    }, [])

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