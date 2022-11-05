import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-neutral">
      <h1 className="w-full text-3xl font-bold text-secondary">Dror Nails</h1>
      <ul className="hidden md:flex">
        <Link to={"/login"} className="p-4 font-bold">
          התחבר
        </Link>
        <Link to={"/"} className="p-4 font-bold">
          בית
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[60%] h-full border-r border-r-base-100 bg-[#E2E8F8] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-secondary m-4">
          Dror Nails
        </h1>
        <div className="uppercase p-4 flex flex-col">
          <Link to={"/login"} className="p-4 border-b border-base-100 ">
            התחבר
          </Link>
          <Link to={"/"} className="p-4 border-b border-base-100 ">
            בית
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Navbar;

