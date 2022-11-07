import React from "react";
import { firestore } from "../firebase";
import {setDoc,doc} from "@firebase/firestore"


const Openday = (props) => {

    const openDay = async () => {

        await setDoc(doc(firestore, "open_appointments", props.docName), {
            day: props.day,
            hours: []
        })

        props.setBuild(1)
    }

    return(
        <button className="bg-secondary w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-neutral " onClick={openDay}>פתח יום</button>
    )
}

export default Openday;