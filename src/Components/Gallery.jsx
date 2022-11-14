import React, { useState, useEffect } from "react";
import { getMetadata, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import useWindowSize from "../hooks/useWindowSize";
import { useFetchImages } from "../hooks/useFetchImages";
// import Carousel from "carousel-mobile";
//local imports
import Carousel from './Carousel/Carousel';

const Gallery = () => {
  const [urls, setUrls] = useState([]);
  // const [image, setImage] = useState({});
  const size = useWindowSize();

  const storageRef = ref(storage, "nails-pictures/");
  useFetchImages({
    storageRef,
    urls,
    setUrls,
    listAll,
    getDownloadURL,
  });

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F1.PNG?alt=media&token=f0d4940f-c2e2-48f9-b0f4-73d53aece475",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F2.PNG?alt=media&token=374817f8-3e52-4d66-a553-71a91895952e",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F3.PNG?alt=media&token=e0e16028-5ea3-42b9-a2ed-a5b8ceb15546",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F4.PNG?alt=media&token=e0740b05-93bf-45f7-8ba3-edcc39808a58",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F14.PNG?alt=media&token=b65f5e0d-0a3b-4bef-b857-362af3c0324a",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F15.PNG?alt=media&token=3138e5e6-d299-4b2c-b6bf-23fcba9106d1",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F8.PNG?alt=media&token=bbe006cf-fc87-4221-8748-f1bd5bfab942",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F11.PNG?alt=media&token=fdff216c-21a3-45f6-a3f6-68d113b87b06",
    "https://firebasestorage.googleapis.com/v0/b/drornails-2b66c.appspot.com/o/nails-pictures%2F10.PNG?alt=media&token=76f96e9a-df55-4f8a-b2a1-0a7f936a91c0",
  ];

  //flex gap-6 h-screen
  return urls ? (
    <div className="w-full drop-shadow-md">
      {/* {console.log(urls)} */}
      {size.width <= 768 ? (
        <div className="mt-10 mb-10">
          <Carousel images={urls} />
        </div>
      ) : (
        <div>
          <div className="flex p-16 gap-6 h-screen ">
            <div className="w-1/3">
              <div className={`pb-6 h-2/6 w-full`}>
                <div
                  style={{
                    backgroundImage: `url(${images[0]})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              {/* <img className="pb-6 h-2/6 w-full object-cover" src={images[0]} /> */}
              <img className="pb-6 h-2/6 w-full object-cover" src={images[1]} />
              <img className="pb-6 h-2/6 w-full object-cover" src={images[2]} />
            </div>
            <div className="w-1/3">
              <img className="pb-6 h-2/5 w-full object-cover" src={images[3]} />
              <img className="pb-6 h-1/5 w-full object-cover" src={images[4]} />
              <img className="pb-6 h-2/5 w-full object-cover" src={images[5]} />
            </div>

            <div className="w-1/3">
              <img className="pb-6 h-1/5 w-full object-cover" src={images[6]} />
              <img className="pb-6 h-2/5 w-full object-cover" src={images[7]} />
              <img className="pb-6 h-2/5 w-full object-cover" src={images[8]} />
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div></div>
  );
};

export default Gallery;
