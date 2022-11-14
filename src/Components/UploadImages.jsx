import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../firebase";
import { listAll, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { uuidv4 } from "@firebase/util";

const UploadImages = () => {
  const [imageUpload, setImageUpload] = useState({});
  const [ imageList, setImageList ] = useState([]);
  const [imageName, setImageName] = useState("");

  const onChangeUploadImage = (event) => {
    const img = event.target.files[0];
    const imgName = img.name;
    const extension = imgName.substr(imgName.lastIndexOf("."));
    const newImgName = uuidv4() + extension;
    setImageName(newImgName);
    setImageUpload(img);
  }

  const upload = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `nails-pictures/${imageName}`);
    uploadBytes(imageRef, imageUpload).then(() => {
        alert("image uploaded")
    })
  };

  const imageListRef = ref(storage, "nails-pictures/")

  useEffect(() => {
    listAll(imageListRef).then ((res) => {
        res.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
                setImageList((prev) => [...prev,url])
            })
        }) 
    })
  }, []);

  return (
    <div className="flex flex-row gap-6 h-screen items-center justify-center">
        <div className="">
        {/* {imageList.map((url, i) => {
            return <img className="w-2/6 h-2/6 p-6 object-cover" key={i} src={url}/>
        })} */}
        </div>
      <input
        className="block file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-primary file:bg-opacity-20 hover:file:bg-primary"
        type="file"
        onChange={(e) => { onChangeUploadImage(e) }}
      />
      <button
        className="bg-secondary hover:bg-primary w-[200px] h-[50px] rounded-md font-medium text-neutral"
        onClick={upload}
      >
        העלאת התמונה
      </button>
    </div>
  );
};

export default UploadImages;
