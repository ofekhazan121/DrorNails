import React, { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import {doc,setDoc,getDoc}from "@firebase/firestore"

const CalendarDay = (props) =>{

    const hour = useRef('')
    const [isOpen,setIsOpen] = useState(false)
    const [dayString,setDayString] = useState('')
    const [monthString,setMonthString] = useState('')

    const openDay = async () => {
    
        await setDoc(doc(firestore,"open_appointments",`${props.day.getDate()}${props.day.getMonth()}${props.day.getYear()}`),{
            day:props.day.getDay(),
            openHour: []
        })

        setIsOpen(true)
    }
    const getDayFromDb= async () => {
        let docRef = await doc(firestore,"open_appointments",`${props.day.getDate()}${props.day.getMonth()}${props.day.getYear()}`)
        let docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            setIsOpen(true)
        }
        
    }

    const setTheDay = () => { 
        switch(props.day.getDay()){
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
        switch(props.day.getMonth()){
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

    useEffect(()=>{
        setTheDay()
        setTheMonth()
        getDayFromDb()
    })

    return(
    <>
        <div className="flex flex-col gap-5 items-center bg-gogo w-28 m-auto">

            <h2 className="text-2xl font-bold">{dayString}</h2>

            <div>{props.day.getDate()}&nbsp;{monthString}</div>

            <input type="time" ref={hour}/>

            <button onClick={openDay}>פתח יום</button>
            
            {!isOpen ? <h1 className="text-3xl">יום סגור</h1>:<button>Submit</button> }
            
        
        </div>
    </>
    )
}

export default CalendarDay;