import React, { useState, useEffect } from "react";
import { Link, useHref } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  Link as SectionLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const href = useHref();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-neutral">
      <Link to={"/"}>
        <h1 className="w-full text-3xl font-bold text-secondary">Dror Nails</h1>
      </Link>
      <ul className="hidden md:flex">
        <Link to={"/contact"} className="p-4 font-bold w-max">
          צור קשר
        </Link>
        {href === "/" ? (
          <SectionLink
            activeClass="active"
            className="p-4 font-bold"
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
          >
            גלריה
          </SectionLink>
        ) : (
          ""
        )}
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
            ? "fixed right-0 top-0 w-[60%] h-full border-r border-r-base-100 bg-footer ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Link to={"/"}>
          <h1 className="w-full text-3xl font-bold text-secondary m-4 pt-3.5">
            Dror Nails
          </h1>
        </Link>

        <div className="uppercase p-4 flex flex-col">
          <Link to={"/login"} className="p-4 border-b border-base-100 ">
            התחבר
          </Link>
          <Link to={"/"} className="p-4 border-b border-base-100 ">
            בית
          </Link>
          {href === "/" ? (
            <SectionLink
              activeClass="active"
              className="p-4 border-b border-base-100"
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
            >
              גלריה
            </SectionLink>
          ) : (
            ""
          )}
          <Link to={"/contact"} className="p-4">
            צור קשר
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
