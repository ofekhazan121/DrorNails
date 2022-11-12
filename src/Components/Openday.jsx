import React from 'react'
import { useState } from 'react'
import { Hours } from './utils/Hours'
import {doc,setDoc} from '@firebase/firestore'
import { firestore } from '../firebase'


const Openday = (props) => {
    const [checkedHours, setCheckedHours] = useState(new Array(Hours.length).fill(false));
    const [hoursToDb, setHoursToDb] = useState(Hours)

    const showHours = (position) =>{
      
        const updatedHours = checkedHours.map((hour,index) => 
            index === position ? !hour : hour      
          )
        setCheckedHours(updatedHours)
    }

    const openDay = async () => {

        await setDoc(doc(firestore, "open_appointments", props.docName), {
            hours : hoursToDb.map((hour,index) =>  ({hour , "open" : checkedHours[index], client : {}}))
            
    })

        
    }

    

  return (
  <div className=' flex flex-col items-center'>
        <div className='flex w-[350px] flex-wrap gap-10 items-center'>
            {Hours.map(({time},index) => (
                <div key={index}>
                    <input 
                    className=""
                    type="checkbox" 
                    value={time} 
                    checked={checkedHours[index]} 
                    onChange={() => showHours(index)}
                    />{time}
                </div>
            ))} 
        </div>
        
        <button className="bg-secondary w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-neutral"
        onClick={openDay}> פתח יום</button> 
    
    </div>
  )
}

export default Openday