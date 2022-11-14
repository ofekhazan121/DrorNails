import { object } from "prop-types";
import React from "react";
import { Link, useHref } from "react-router-dom";
import {
  Link as SectionLink,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { IoIosCall, IoLogoInstagram } from "react-icons/io";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

export const Footer = () => {
  const href = useHref();

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F1.PNG?alt=media&token=f0d4940f-c2e2-48f9-b0f4-73d53aece475",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F2.PNG?alt=media&token=374817f8-3e52-4d66-a553-71a91895952e",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F3.PNG?alt=media&token=e0e16028-5ea3-42b9-a2ed-a5b8ceb15546",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F4.PNG?alt=media&token=e0740b05-93bf-45f7-8ba3-edcc39808a58",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F15.PNG?alt=media&token=3138e5e6-d299-4b2c-b6bf-23fcba9106d1",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F10.PNG?alt=media&token=76f96e9a-df55-4f8a-b2a1-0a7f936a91c0",
  ];

  return (
    <div>
      <div className="md:hidden bg-footer h-20">
        <div className="flex w-screen justify-center items-center p-5 mt-4">
          <a href="https://www.instagram.com/_dror.nails_/">
            <IoLogoInstagram size={35} color="#ec4899" className="ml-2 " />
          </a>
          <a href="https://www.google.com/maps?ll=31.234266,34.768057&z=14&t=m&hl=iw&gl=IL&mapclient=embed&q=%D7%A0%D7%95%D7%95%D7%94+%D7%96%D7%90%D7%91+%D7%91%D7%90%D7%A8+%D7%A9%D7%91%D7%A2">
            <HiLocationMarker size={35} color="#ec4899" className="ml-2" />
          </a>
          <a className="text-md" href="tel:+972547222393">
            <HiPhone size={35} color="#ec4899" className="ml-2 p-0" />
          </a>
        </div>
      </div>
      <div className="w-screen basis-4 h-1/4 p-2 bg-footer hidden lg:flex xl:flex">
        <div className="w-1/4 p-2">
          <img src="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            repellendus? Enim at fugiat rem consequuntur blanditiis suscipit,
            molestiae quisquam soluta quod dolor, distinctio culpa assumenda
            voluptate, iste deserunt quia saepe.
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-6 p-2">
          <div className="flex flex-col gap-6 p-2 w-1/4">
            <Link to={"/"} className="font-bold">
              בית
            </Link>
            {href === "/" ? (
              <SectionLink
                activeClass="active"
                className="font-bold"
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
            <Link to={"/login"} className="font-bold">
              התחבר
            </Link>
            <Link to={"/contact"} className="font-bold w-max">
              צור קשר
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 object-cover w-1/4 p-2">
          {images.map((image, i) => {
            return (
              <img
                src={image}
                key={i}
                className="object-cover"
                style={{
                  backgroundSize: "cover",
                  height: "50%",
                  width: "80%",
                  objectFit: "cover",
                }}
              />
            );
          })}
        </div>
        <div className="w-1/4 p-2">
          <h1 className="text-2xl font-bold text-secondary border-b border-r-base-100">
            צרי קשר
          </h1>
          <div className="flex mt-8">
            <IoIosCall size={35} color="#ec4899" className="ml-2" />
            <a className="text-md mt-1" href="tel:+972547222393">
              054-722-2393
            </a>
          </div>
          <div className="flex mt-4">
            <IoLogoInstagram size={35} color="#ec4899" className="ml-2 " />
            <a
              href="https://www.instagram.com/_dror.nails_/"
              target="_blank"
              className="text-md mt-1"
            >
              Dror Nails
            </a>
          </div>
          <div className="flex mt-4">
            <HiLocationMarker size={35} color="#ec4899" className="ml-2" />
            <a
              href="https://www.google.com/maps?ll=31.234266,34.768057&z=14&t=m&hl=iw&gl=IL&mapclient=embed&q=%D7%A0%D7%95%D7%95%D7%94+%D7%96%D7%90%D7%91+%D7%91%D7%90%D7%A8+%D7%A9%D7%91%D7%A2"
              target="_blank"
              className="text-md mt-1 "
            >
              נווה זאב
            </a>
          </div>
        </div>
      </div>
      <div className="w-screen text-center bg-neutral text-white flex gap-4">
        <h1>עוצב ונבנה על ידי:</h1>
        <a href="https://www.linkedin.com/in/ofek-hazan" target="_blank">
          Ofek Hazan
        </a>
        <br />
        <a href="https://www.linkedin.com/in/dvir-best" target="_blank">
          Dvir Best
        </a>
      </div>
    </div>
  );
};
