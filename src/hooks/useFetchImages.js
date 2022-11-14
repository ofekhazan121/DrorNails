import { useEffect, useState } from "react";

export const useFetchImages = ({storageRef, urls, setUrls, listAll, getDownloadURL}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
       listAll(storageRef)?.then((res) => {
        res.items.forEach(item => { getDownloadURL(item)
          .then((url) =>{
            const _id = item._location.path_.split("/")[1].split(".")[0];
            if(urls?.find(link => link._id === _id)){
              return;
            }
            setUrls(prev => [...prev, { _id, url }]);
            
            setData(prev => [...prev, {
              content: (props) => (<div style={{ backgroundImage: `url('${url}')`, height: "100%" }}></div>)
            }]);
          });
        });
      });
    }
    fetchImages();

  }, [])
  

  
  return { urls, data };
};