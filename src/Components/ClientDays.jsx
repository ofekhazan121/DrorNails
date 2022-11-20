import React from 'react'
import { doc, updateDoc , query, collection,where,getDocs} from "@firebase/firestore"
import { firestore } from "../firebase";
import { useState } from 'react';
import { useEffect } from 'react';
import AppointmentForm from './AppointmentForm';

function ClientDays(props) {

    const [hoursList, setHoursList] = useState([])
    const [showRegiser,setShowRegister] = useState(false)


    const updateClient = (docData) => { 
        setShowRegister(!showRegiser)
        console.log(1);
    }

     const submitAppointment = () => {
        
     }

    const getDayCust = async () => {
        let arr = []
        const refs = collection(firestore,"days_test")
        const test = query(refs,where("status","==","open"),where("day","==",`${props.docName}`))
        const myDocs = await getDocs(test)
        myDocs.forEach ((doc)=> {
            arr.push(doc.data())
        })
        setHoursList(arr)
    }

    useEffect(() => {
        getDayCust()
    },[])

  return (
    <div>
        {showRegiser ? 
        <div><AppointmentForm /></div>: <></>}
        <br/>
        <table className='client-table'>
            <thead className='client-thead'>
                <tr>
                    <td className='client-header'>שעה</td>
                    <td className='client-header'>סטטוס</td>    
                </tr>
            </thead>
            <tbody>
                
                {hoursList.length > 0 ? hoursList.map((hour,index) => (
                    <tr key={index} onClick={()=> updateClient()}>
                        <td className='client-hour'>{hour.hour}</td>
                        <td className='client-hour'>פתוח</td>
                    </tr>
                ) ) : 
                <tr className='no_available'>
                    <td colSpan={2} className='no-hour'>אין תורים זמינים</td>
                    
                </tr>}
            </tbody>


        </table>


    </div>


  )
}

export default ClientDays