import React from 'react'
import { doc, getDoc, updateDoc ,setDoc, deleteDoc, query, collection,where,getDocs} from "@firebase/firestore"
import { firestore } from "../firebase";
import { Hours } from './utils/Hours';
import { useState } from 'react';
import { async } from '@firebase/util';

const FireBaseTest = () => {
    const hours = Hours;
    const [hoursList,setHoursList] = useState([])
  
    const delObj = async () =>{
        
        await deleteDoc(doc(firestore,"days_test","11012210:00"))
    }

    
    
  
  
    return (
<>
    
    <div onClick={delObj}>joijoijoi</div>
    <div>Get DAy</div>
    <div className='flex gap-10 flex-wrap'>{hoursList.map((hour,index)=> (
        <div key={index}>
            <div>{hour.day}</div>
            <div>{hour.hour}</div>
            <div>{hour.status}</div>
        </div>
    ))}</div>
    </>
  )
}

export default FireBaseTest