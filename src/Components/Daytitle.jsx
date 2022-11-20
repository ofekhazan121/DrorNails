import React,{ useEffect, useState}  from "react";


const Daytitle =(props) => {
    const [dayString, setDayString] = useState('')
    const [monthString, setMonthString] = useState('')

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
    },[])

    return(
    <h2 className="appointment-day">{dayString}, {props.day.getDate()}&nbsp;{monthString}</h2>
    )
}


export default Daytitle;