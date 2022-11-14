import React from "react";
import {IoIosCall , IoLogoInstagram } from 'react-icons/io'
import {HiLocationMarker} from 'react-icons/hi'


const Contact = () => {
  return (
    <div className="w-screen">
      <div className="max-w-[800px]  h-screen md:hidden m-auto" id="mobile">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13646.045340042549!2d34.77679029383542!3d31.23426520489389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026f5603a22a0d%3A0xe2184232cd5fa59a!2z16DXldeV15Qg15bXkNeRLCDXkdeQ16gg16nXkdei!5e0!3m2!1siw!2sil!4v1668295943812!5m2!1siw!2sil"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="justify-center flex flex-col p-4">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-secondary border-b border-r-base-100">
            צרי קשר
          </h1>
          <div className="flex mt-8">
          <IoIosCall size={35} color="#ec4899" className="ml-2"/>
          <a className="text-lg mt-1" href="tel:+972547222393">054-722-2393</a>
          </div>
          <div className="flex mt-4">
            <IoLogoInstagram size={35} color="#ec4899" className="ml-2 "/>
            <a href="https://www.instagram.com/_dror.nails_/" target="_blank" className="mt-1">Dror Nails</a>
          </div>
          <div className="flex mt-4">
            <HiLocationMarker size={35} color="#ec4899" className="ml-2"/>
            <a href="https://www.google.com/maps?ll=31.234266,34.768057&z=14&t=m&hl=iw&gl=IL&mapclient=embed&q=%D7%A0%D7%95%D7%95%D7%94+%D7%96%D7%90%D7%91+%D7%91%D7%90%D7%A8+%D7%A9%D7%91%D7%A2" target="_blank" className="text-xl mt-1">נווה זאב</a>
          </div>
        </div>
      </div>

      <div className="max-w-[800px] h-screen hidden lg:flex xl:flex justify-center">
        <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13646.045340042549!2d34.77679029383542!3d31.23426520489389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026f5603a22a0d%3A0xe2184232cd5fa59a!2z16DXldeV15Qg15bXkNeRLCDXkdeQ16gg16nXkdei!5e0!3m2!1siw!2sil!4v1668295943812!5m2!1siw!2sil"
            width="400"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mt-8 ml-8"
          ></iframe>
        </div>
        <div className="">
          <h1 className="text-6xl font-bold md:py-6 text-secondary border-b border-r-base-100">
            צרי קשר
          </h1>
          <div className="flex mt-8">
          <IoIosCall size={35} color="#ec4899" className="ml-2"/>
          <a className="text-xl mt-1" href="tel:+972547222393">054-722-2393</a>
          </div>
          <div className="flex mt-4">
            <IoLogoInstagram size={35} color="#ec4899" className="ml-2"/>
            <a href="https://www.instagram.com/_dror.nails_/" target="_blank" className="text-xl mt-1">Dror Nails</a>
          </div>
          <div className="flex mt-4">
            <HiLocationMarker size={35} color="#ec4899" className="ml-2"/>
            <a href="https://www.google.com/maps?ll=31.234266,34.768057&z=14&t=m&hl=iw&gl=IL&mapclient=embed&q=%D7%A0%D7%95%D7%95%D7%94+%D7%96%D7%90%D7%91+%D7%91%D7%90%D7%A8+%D7%A9%D7%91%D7%A2" target="_blank" className="text-xl mt-1">נווה זאב</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
