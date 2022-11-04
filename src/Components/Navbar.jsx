import React from "react";
import {Link} from "react-router-dom"

const Navbar = () =>{ 

    return(
        <div className="flex gap-10 mt-5 mb-5 mr-5">
            <Link to={"/login"} className="bg-gogo text-xl font-bold w-20 text-center">התחבר</Link>
            <Link to={"/"} className="bg-gogo text-xl font-bold w-20 text-center">בית</Link>
        </div>
    )

}

export default Navbar;