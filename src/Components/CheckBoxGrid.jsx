import React from "react";
import { useState } from "react";

const CheckBoxGrid = () => {

    const [show,setShow] = useState(false)

    return (<>
        {show ? 
        <div className="flex flex-col items-center">
            <div className="flex gap-6 flex-wrap w-96 items-center">
                <div><input type="checkbox" value="09:00" /> <label>09:00</label></div>
                <div><input type="checkbox" value="10:00" /> <label>10:00</label></div>
                <div><input type="checkbox" value="11:00" /> <label>11:00</label></div>
                <div><input type="checkbox" value="12:00" /> <label>12:00</label></div>
                <div><input type="checkbox" value="13:00" /> <label>13:00</label></div>
                <div><input type="checkbox" value="14:00" /> <label>14:00</label></div>
                <div><input type="checkbox" value="15:00" /> <label>15:00</label></div>
                <div><input type="checkbox" value="16:00" /> <label>16:00</label></div>
                <div><input type="checkbox" value="17:00" /> <label>17:00</label></div>
                <div><input type="checkbox" value="18:00" /> <label>18:00</label></div>
                <div><input type="checkbox" value="19:00" /> <label>19:00</label></div>
                <div><input type="checkbox" value="20:00" /> <label>20:00</label></div>
                <div><input type="checkbox" value="21:00" /> <label>21:00</label></div>
            </div>
            <div className="flex gap-5">
                <button className="bg-secondary w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-neutral " type="submit"  >הגש</button>
                <button className="bg-secondary w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-neutral " onClick={() =>setShow(false)}   >סגור</button>
            </div>
        </div>
            :
              <div>
                    <button className="bg-secondary w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-neutral "
                            onClick={() => setShow(true)}>בחר שעות פעילות</button>
              </div>  
              }
        </>
    )
}

export default CheckBoxGrid

