import React, { useState } from "react";
import { doc, getDoc, updateDoc } from "@firebase/firestore"
import { firestore } from "../firebase";
import { useEffect } from "react";


const ManageDay = (props) => {

    const [openHours, setOpenHours] = useState([]);
    const [editMode, setEditMode] = useState(false)


    const displayHours = async () => {
        const docRef = await getDoc(doc(firestore, "open_appointments", props.dayDocName))
        setOpenHours(docRef.data().hours);

    }

    const updateHour = (position) => {
        const updatedHours = openHours.map((hour, index) => {
            if (index === position) {
                hour.open = !hour.open
            }
            return (hour)
        })
        setOpenHours(updatedHours)
    }

    
    const updateDb = () => {
        
    }


    useEffect(() => {
        displayHours()
    }, [])


    return (
        <div className="flex flex-col gap-16">
            <table className="w-[600px]">
                <thead>
                    <tr>
                        <th className="w-1/4">שעה</th>
                        <th className="w-1/4">שם</th>
                        <th className="w-1/4">מספר</th>
                        <th className="w-1/4">סטטוס</th>
                    </tr>
                </thead>
                <tbody className="">
                    {openHours.map((hour, index) => {

                        return (
                            <tr key={hour.hour.time} className="text-center h-10">
                                <td className="w-1/4">{hour.hour.time}</td>
                                <td className="w-1/4">{hour.client.time}</td>
                                <td className="w-1/4">{hour.client.number}</td>
                                {hour.open ? <td className="w-1/4 text-success">פתוח</td> : <td className="w-1/4 text-warning "  >סגור</td>}
                                {editMode ? <td>
                                    {hour.open ?
                                        <button
                                            onClick={() => updateHour(index)}
                                            className="bg-secondary w-[50px] rounded-md font-medium my-2 mx-auto py-3 text-neutral">סגור</button> :
                                        <button
                                            onClick={() => updateHour(index)}
                                            className="bg-secondary w-[50px] rounded-md font-medium my-2 mx-auto py-3 text-neutral">פתח</button>}</td> : <></>}
                            </tr>
                        )
                    })}
                </tbody>

            </table>
            {editMode ? <div className="flex gap-16 m-auto">
                <button onClick={updateDb} className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-neutral">הגש שינויים</button>
                <button onClick={() => window.location.reload()} className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-neutral" >סגור עריכה ללא שינוי</button>
            </div> : <button onClick={() => setEditMode(!editMode)} className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-neutral">עריכת שעות</button>}

        </div>
    )

}


export default ManageDay;