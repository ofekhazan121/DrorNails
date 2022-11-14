import React, { useEffect, useRef, useState } from "react";
import { firestore } from "../firebase";
import { VscRefresh } from "react-icons/vsc";
import CheckBoxGrid from "./CheckBoxGrid";
import {
  doc,
  setDoc,
  getDoc,
  arrayUnion,
  updateDoc,
} from "@firebase/firestore";

const CalendarDay = (props) => {
  const hour = useRef("");

  const [isOpen, setIsOpen] = useState(false);
  const [dayString, setDayString] = useState("");
  const [monthString, setMonthString] = useState("");

  const updateHours = async () => {
    let docRef = await doc(firestore, "open_appointments");

    await updateDoc(docRef, {
      openHours: arrayUnion({
        hour: hour.current.value,
        client: { name: null, phone: null },
      }),
    });
  };
};
export default CalendarDay;
