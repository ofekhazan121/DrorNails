import React from 'react'
import { useState } from 'react'
import { Calendar } from 'react-calendar'
import ClientDays from '../Components/ClientDays'
import Daytitle from '../Components/Daytitle'

const ClientChooseDate = () => {

    const [selectedDate,setSelectedDate] = useState(false)
    const [selectedDay,setSelectedDay] = useState({})
    const [docName,setDocName] = useState("")

    const showDate = (day) => {
        
        if(day != null){
            setSelectedDate(!selectedDate)
            setSelectedDay(day)
            setDocName(`${day.getDate()}${day.getMonth()}${day.getYear()}`)
        }else{
            setSelectedDate(!selectedDate)
            setSelectedDay({})
        }
        
    }

  return (
    <div className='client-date-choice'>
        
        {!selectedDate ? <Calendar onClickDay={(day) => showDate(day)}/> : 
            <div>
                <Daytitle day={selectedDay}/>
                <ClientDays docName={docName}/>
            </div>}
        {selectedDate ? <button className='app-button' onClick={()=> showDate()}>חזור</button> : <></>}
    </div>
  )
}

export default ClientChooseDate